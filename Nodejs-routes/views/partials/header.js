<!DOCTYPE html>
<html>
	<head>
		<title>YelpCamp</title>
		 <!-- Latest compiled and minified CSS -->
		 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		 <link rel="stylesheet" href="/stylesheets/main.css">
	</head>
	<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="/">YelpCamp</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
                    <% if(!currentUser){ %>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Sign Up</a></li>
                    <% } else { %>
                        <li><a href="#">Signed In As <%= currentUser.username %></a></li>
                        <li><a href="/logout">Logout</a></li>
                    <% } %>
                </ul>
			</div>
		</div>
 	</nav>
		
