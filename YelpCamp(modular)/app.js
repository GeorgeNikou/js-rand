var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	mongoose 		= require("mongoose"),
	passport 		= require("passport"),
	localStrategy 	= require("passport-local"),
	Campground  	= require(".models/campground"),
	Comment     	= require(".models/comment"),
	User			= require("./models/user"),
	seedDB      	= require("./seeds")


seedDB();
mongoose.connect("mongodb+srv://admin:m3nm3nm3n@cluster0-s5ty3.mongodb.net/yelpcamp?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true
	}).then(function(){
		console.log("Connected to database")
	}).catch(function(err) {
		console.log("Error: " , err.message);
}, function(err, campground){
	if(err){
		console.log("Error: " + err);
	}else {
		console.log("New campground added: " + campground);
	}
});

//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res){
	res.render("landing");
});

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds/index",{campgrounds:allCampgrounds});
       }
    });
});

// CREATE - ADD A NEW CAMPGROUND TO DATABASE
app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampground = {name: name, image:image, description:description};
	// Create new campground and save it to the database
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		}else{
			// Redirect back to the campground page
			res.redirect("/campgrounds");	
		}
	});
	
});

// NEW - SHOW FORM TO CREATE NEW CAMPGROUND
app.get("/campgrounds/new", function(req, res){
	res.render("campgrounds/new");
});

// FIND THE CAMPGROUND WITH THE WANTED ID
app.get("/campgrounds/:id", function(req, res){	
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err)
		}else {
			console.log(foundCampground);
			//render show templatre with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});	
});

app.get("*", function(req, res){
	res.send("404 ERROR");
});

// =========================
//		COMMENTS ROUTES
// =========================

app.get("campgrounds/:id/comments/new", function(req, res){
	//find campground by id
	Campground.findById(req.params.id, function(err), campground){
		if(err){
			console.log(err);
		}else {
			res.sender("comments/new", {campground: campground});
		}
	}
	res.render("comments/new")
});

app.post("/campgrounds/:id/comments", function(req, res){
	//lookup campground using id/comments
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		}else {
			Comment.create(request.body.comment, function(err, comment){
				if(err){
					console.log(err);
				}else {
					campgrounds.comments.push(comment);
					campground.save();
					res.redirect("/campground/" + campground._id);
				}
			});
		}
	});
	//create new comment
	//connect new comment to campground
	//redirect campground to show page
});

//  ===========
// AUTH ROUTES
//  ===========

// show register form
app.get("/register", function(req, res){
   res.render("register"); 
});
//handle sign up logic
app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/campgrounds"); 
        });
    });
});

// show login form
app.get("/login", function(req, res){
   res.render("login"); 
});
// handling login logic
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// logic route
app.get("/logout", function(req, res){
   req.logout();
   res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
	console.log("YelpCamp Server has started.");
});