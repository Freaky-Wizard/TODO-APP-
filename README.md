main file is app.js
1.express is used for routing, creating middleware for including static files, integrates with templating engines like ejs(view engine).
2. first we are creating a server by ourself but express solve this problem
3.view engine is set by app.set as first it will look into view folder for file before running whenever we render anything..
4.app.use is used for static files such  that first it will look into public folder for same
5. todo controller is used to make the code look easier basically and to manage connection between model(storing data) and view part(display data) and function is called of exports using this.
6. app is listening to port no. 3000 which is assigned to nodejs to respond back

todocontroller.js
1.body parser is used to parse the data send from the form(input) and then it is available in req.body, basically
req doesnot actually takes data as it is taking in get so we have to introduce a middleware in this which is body-parser
 var urlencodedparser = bodyparser.urlencoded({extended: false}); this is parsing data and storing it in urlencodedparser.

 2. mongoose is used for making connection with mongo db of mlab.
 3. app.get('route',function);
 route is basically url address.

todo.ejs is connected to ajax file i.e todo-list.js which is handling ajax request.
ajax is used to update delete , add data at runtime without the need for refreshing the page.
