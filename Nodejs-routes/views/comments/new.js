<%- include("../partials/header") %>
<div class="container">
	<h1 style="text-align:center">Add New Comment to <%= campground.name %></h1>
	<div style="width:30%; margin:25px auto">
		<form action="/campgrounds/<%= campground._id %>/comments" method="POST">
			<div class="form-group">
				<input class="form-control" type="text" name="comment[text]" placeholder="text">
			</div>
			<div class="form-group">
				<input class="form-control" type="text" name="comment[author]" placeholder="author">
			</div>
			<div class="form-group">
				<input class="btn btn-lg btn-default btn-block btn-primary" type="submit">
			</div>
		</form>
		<a href="/campgrounds">Go Back</a>
	</div>
</div>
<%- include("../partials/footer") %>