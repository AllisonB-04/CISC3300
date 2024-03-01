// 1. What is HTTP? What are the different HTTP request methods and how do they differ?
// HTTP is how the internet handles communication between clients and servers, is done by requests and responses.
// get - should only ever retrieve data
// post - submits an entity to the specified resource, often causing a change in state or side effects on the serve - usually something to be saved
// put - method replaces all all current representations of the target resource with the request payload - update everything for a resource
// patch - partially modify a resource - not really used much, post is more common
// delete - delete a resource 

// 2. What is an API? What is JSON?
// An API is an application programming interface is a way for two or more computer programs or components to communicate with each other.
// JSON (JavaScript Object Notation) is a lightweight format for storing and transport data.

// 3. What is AJAX? What is meant by asynchronous code?
// AJAX (Asynchronous JavaScript And XML) is a technique for loading data into part of a page without having to refresh the entire page. 
// Asynchronous programming is an essential concept in JavaScript that allows your code to run the background without blocking the execution of other code.

// 4.  Use jquery to make some requests to our json server:
$(document).ready(function() {
// a. Write a get request to request the data from one of the resources.
$("#getPostsButton").click(function() {
    $.get("http://localhost:3000/posts/1", function(data) {
        $("#response").text("GET request response: " + JSON.stringify(data));
    });
});  

// b. Write a post request to add a new resource.
$("#addPostButton").click(function() {
    var newPost = { id: "1", text: "a comment about post 1", postid: "1" };
    $.post("http://localhost:3000/comments", newPost, function(data) {
        $("#response").text("POST request response: " + JSON.stringify(data));
    });
});

// c. Write a put request to replace a previous resource.
$("#updatePostButton").click(function() {
    var updatedPost = { title: "Updated Title", views: 400 };
    $.ajax({
        url: "http://localhost:3000/posts/2",
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(updatedPost),
        success: function(data) {
            $("#response").text("PUT request response: " + JSON.stringify(data));
        }
    });
});
});