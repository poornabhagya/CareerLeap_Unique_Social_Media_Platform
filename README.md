<h1>CareerLeap</h1> 
<br>
<h2>Introduction</h2> 
<p>CareerLeap" is a unique social media platform that caters to the needs of general users  organizations, businesses  and consultants. The platform aims to provide a comprehensive set of features to facilitate networking, job search, advertising,  and communication among users.</p>
<br>
<p>This is the "User Management Component" backend of the project. </p>
<br>
<h2>File Structuer</h2> 
<dl>
	<dt>Models</dt>
  	<ul style="list-style-type:disc;"><dd><li> post.js</li></dd></ul> 
    <ul style="list-style-type:disc;"><dd><li> user.js</li></dd></ul> 
  	<dt>Routes</dt>
  	<ul style="list-style-type:disc;"><dd><li> post.js</li></dd></ul> 
    <ul style="list-style-type:disc;"><dd><li> user.js</li></dd></ul> 
    <dt>Config - Configuration files (e.g., database connection)</dt>
  	<ul style="list-style-type:disc;"><dd><li> config.js - Configuration settings</li></dd></ul> 
    <dt>server.js - Entry point for the backend server </dt>
  	
</dl>
<br>
<h2>Technologies</h2>
<dl>
  <dd><b>React:</b> For the front-end development</dd>
  <dd><b>NodeJS:</b> For maintaining the server of the application</dd>
  <dd><b>Express:</b> For developing the Backend API</dd>
  <dd><b>MongoDb:</b> Backend storage of the application</dd>
</dl>

<br>

<h2>Tools</h2>
<dl>
  <dd><b>Postman:</b> Tool used for testing the backend routes.</dd>
  
</dl>

<br>

<h2>3rd party libaries</h2>
<dl>
  <dd><b>uuid:</b> for get unique ID to postID and userID</dd>
  <dd><b>express-validator:</b> to get validations for our properties</dd>
  <dd><b>nodemon:</b> when you chage your code and save it, server will auto restart with the changes</dd>
</dl>

<br>
	

<h2>API Endpoints</h2>
<h4><b>api/users</b></h4>
<ol type="1"><dl>
	<dt><li>POST …/register</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Create new user</li></dd></ul> 
    <dt><li>POST …/login</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Log user in</li></dd></ul> 
    <dt><li>GET …/getById/:id</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Get a specific user by userid (id)</li></dd></ul> 
    <dt><li>DELETE …/delete/:id</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Delete a user by id (id)</li></dd></ul> 
    <dt><li>PUT …/update/:id</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Update a user by id (id)</li></dd></ul> 
  	
</dl></ol>

<h4><b>api/posts</b></h4>
<ol type="1"><dl>
	<dt><li>POST …/create</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Create new post</li></dd></ul> 
    <dt><li>GET …/getAll</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Get all post</li></dd></ul> 
    <dt><li>PUT …/update/:id</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Update post by id (id)</li></dd></ul> 
    <dt><li>DELETE …/delete/:id</li></dt> 
  	<ul style="list-style-type:disc;"><dd><li> Delete post by id (id)</li></dd></ul> 
    
  	
</dl></ol>
<br>
<h2>URL</h2>
<h4>Posts</h4>
<dl>
  	<ul style="list-style-type:disc;"><dd><li> GET for posts (getElementByUserId)(read) : http://localhost:5000/api/posts/user/u1</li></dd></ul> 
  	<ul style="list-style-type:disc;"><dd><li>GET for posts (getPostById)(read) : http://localhost:5000/api/posts/p1</li></dd></ul> 
  	<ul style="list-style-type:disc;"><dd><li>POST for posts (create posts ) : http://localhost:5000/api/posts</li></dd></ul> 
  	<ul style="list-style-type:disc;"><dd><li>PATCH for posts (update posts) : http://localhost:5000/api/posts/p1</li></dd></ul> 
    <ul style="list-style-type:disc;"><dd><li>DELETE for posts (delete posts) : http://localhost:5000/api/posts/p1</li></dd></ul> 
</dl></ol>

<h4>User</h4>
<dl>
  	<ul style="list-style-type:disc;"><dd><li>GET for user (all users/ read user) : http://localhost:5000/api/users</li></dd></ul> 
  	<ul style="list-style-type:disc;"><dd><li>GET for user (getElementById)(uId)(read) : http://localhost:5000/api/users/u1</li></dd></ul> 
  	<ul style="list-style-type:disc;"><dd><li> POST for user (create user, SignUp) : http://localhost:5000/api/users/signup</li></dd></ul> 
  	<ul style="list-style-type:disc;"><dd><li> POST for user (Login) : http://localhost:5000/api/users/login</li></dd></ul> 
    <ul style="list-style-type:disc;"><dd><li>PATCH for user (update user) : http://localhost:5000/api/users/u1</li></dd></ul> 
    <ul style="list-style-type:disc;"><dd><li>DELETE for user (delete user) : http://localhost:5000/api/users/u1</li></dd></ul> 
</dl></ol>
<br>
<h2>Problems</h2>
<p><b>Problem 1 :</b> When I create POST method to create post. I got and error msg in postman. "message:DUMMY_POSTS not ...".
<b>Solution :</b> I create DUMMY_POST for sample data not DUMMY_POSTS (last S is the error) </p>

<p><b>Problems 2 :</b> When I set a unique ID for post ID (with uuid package), I got a error form postman 'uuid is not function'
<b>Solution :</b> I create function 'const uniqueId = uuid.v4;' and POST function I call that 'uniqueId()'.
'id: uniqueId(),'</p>

<p><b>Problem 3 :</b> When I create route handling error and test it in postman. It going to time to response.</p>

<p><b>Problem 4 :</b> When I create PATCH method and test it with postman, postman is stuck on "Sending request..." and seems to be loading indefinitely.
<b>Solution :</b> I didn't create PATCH request on posts-router.js And I created it "router.patch('/:pid',postsControllers.updatePost);".</p>

<p><b>Problem 5:</b> When I create PATCH method and test it with postman. postman give empty bank output "{}" 
<b>Solution :</b> I didnt return updatedPost and I updated it "res.status(200).json({post:updatedPost});"</p>

<p><b>Problem 6 :</b> When I create PATCH method and test it with postman, postman is stuck on "Sending request..." and seems to be loading indefinitely.
<b>Solution :</b> I didn't create DELETE request(I used PATCH Method) on posts-router.js And I created it "router.delete('/:pid',postsControllers.updatePost);".</p>

<p><b>Problem 7 :</b> When I create PATCH method and test it with postman, postman is stuck on "Sending request..." and seems to be loading indefinitely.
<b>Solution :</b> I didn't set POST request(I used GET Method) on Postman.</p>






