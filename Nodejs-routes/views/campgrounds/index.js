<%- include("../partials/header") %>

<h4>currentUser</h4>

<div class="container">
	<header class="jumbotron">
		<div class="container">
			<h1>Welcome To YelpCamp!</h1>
			<p>View our hand picked campgrounds from all over the world.</p>
			<p>
				<a class="btn btn-primary btn-large" href="campgrounds/new">Add New Campground</a>
			</p>
		</div>
	</header>
	
	<div class="row">
		<div class="col-lg-12">
			<h3>Our Most Popular Campgrounds!</h3>
		</div>
	</div>
	
	<div class="row">
		<% campgrounds.forEach(function(campground){ %>
		<div class="col-md-3 col-sm-6">
			<div class="img-thumbnail text-center">				
				<img style="width:100%; height:200px; background-size:cover; background-position:center" 
					 src="<%= campground.image %>" >
				<div class="caption">
					<h4><%= campground.name %></h4>				
				</div>
				<p><a class="btn btn-primary" href="/campgrounds/<%= campground._id %>">More Info</a></p>	
			</div>	
		</div>
		<% }); %>
	</div>
</div>
<%- include("../partials/footer") %>
