# travlr

The architecture of the web application will be the MEAN architecture. 
This will allow for better functionality and security. 
MEAN stands for MongoDB, Express.js, AngularJS and Node.js. 
MongoDB is a non-relational database that allows us to work with JSON-data. 
This will house our data, allowing us to have a degree of separation from our important information and the client. 
Express.js is a web application framework that allows us to build RESTful APIs in tandem with Node.js. 
Express.js helps the client navigate from page to page and managing servers and routes. 
AngularJS is a JavaScript framework that allows us to run JavaScript scripts and makes the html code shorter, more succinct, more portable and easier to edit. 
It helps with databinding, directives, speed, performance and dependency injection.

We will be using two types of applications in tandem to run this. 
Firstly, we will be using a customer side version. 
This will be a multi-page application with RESTful APIs. 
This allows for data to be interacted with but for there to be separation for data integrity. 
This makes it so the client cannot manipulate our data in an undesired fashion. 
As we want the administrator to be able to do this and we trust the administrator, their version will be single page. 
This allows data to be directly driven to and from the database and allows for easy editing of data.  

JSON  is more efficient and cannot contain functions.
This is both quicker and provides better user experiences whilst at the same time being more secure. 
This is why we refactored any data being passed to be passed this way. 
It is more secure and quick to have standard models that are passed specific information in JSON format. 

There are 3 main parts, the Database, the Client-side and the Server-side. 
The client side is accessed by a browser starting a client session this then is sent to the server side, then authenticated and a server session is initiated. 
The server makes calls to the database. 
The database sends some data to the server and some to the client. 
The page is then displayed.  

Method	Purpose	URL	Notes
GET	Retrieve about page	/app_server/routes/about	Returns about page
GET	Retrieve contact page	/app_server/routes/contact	Returns contact page
GET	Retrieve index page	/app_server/routes/index	Returns index page
GET	Retrieve meals page	/app_server/routes/meals	Returns meals page
GET	Retrieve news page	/app_server/routes/news	Returns news page
GET	Retrieve rooms info	/app_server/routes/rooms	Returns rooms
GET	Retrieve travel list	/app_server/routes/travelList	Returns travel list
GET	Retrieve user’s listing	/app_server/routes/users	Returns users listing

GET	Retrieve login page	App_api/routes/index/login	Retrieves login page
POST	Authenticates login	App_api/routes/index/login	Authenticates login
GET	Retrieves registration data	App_api/routes/index/register	Allows actor to see registration options
POST 	Registers 	App_api/routes/index/register	Allows actor to register
GET	tripslist	App_API/routes/index/trips	Returns tripslist
POST	tripslist	App-API/routes/index/trips	Adds a trip to the list
GET	Gets single trip	App-API/routes/index/trips/:tripCode	Returns a single trip
PUT	Updates a single trip	App-API/routes/index/trips/:tripCode	Adds or edits a single trip in the triplist 

I would like to go into data science so making a website is not that career oriented. However, working a lot with Json as well as a bit with databases is helpful.
The process of developing a website is helpful in the sense that it is iterative and hightly logical so this type of problem solving will be helpful for datascience. 
