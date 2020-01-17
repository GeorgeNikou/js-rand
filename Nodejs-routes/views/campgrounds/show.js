<%- include("../partials/header.ejs") %>
<div class="container">
	<div class="row">
		<div class="col-md-3">
			<p class="lead">YelpCamp</p>
			<div class="list-group">
				<li class="list-group-item active">Info 1</li>
				<li class="list-group-item">Info 2</li>
				<li class="list-group-item">Info 3</li>
			</div>
		</div>
		<div class="col-md-9">
			<div class="img-thumbnail">
				<img class="img-responsive"> src="<%= campground.image %>">
				<div class="caption-full">
					<h4 class="pull-right">$9.00/night</h4>
					<h4><a><%= campground.name %></a></h4>
					<p><%= campground.desciption %></p>
				</div>
			</div>
			<div class="well">
				<div class="text-right">
					<a class="btn btn-sucess" href="/campgrounds/<%= campground._id %>/comments/new">Add New Comment</a>
				</div>
				<hr>
				<div class="row">
					<div class="col-md-12">
						<strong><%= comment.author %></strong>
						<span class="pull-right">10 days ago</span>
						<p><%= comment.text %></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<h1><%= campground.name %></h1>

<img src="<%= campground.image %>" alt="">

<p><%= campground.description %></p>

<p>
	<a class="btn btn-sucess" href="/campgrounds/<%= campground._id %>/comments/new">Add New Comment</a>
</p>

<% campground.comments.forEach(function(comment){ %>
	 <p><strong><%= comment.author %></strong> - <%= comment.text %></p>
<% }) %>
<%- include("../partials/footer.ejs") %>