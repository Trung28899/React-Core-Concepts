1. Starting a new React app: 
- Go here for documentation: 
https://github.com/facebook/create-react-app

- Commands: 
+, To create new React app: 
npx create-react-app app-folder-name

+, To run app: 
npm start

2. Folder Structure: 
- package.json: react dependencies information and script available
+, commands: 
npm start
npm build 
npm test

- node_modules folder: hold all the dependencies for the file to compile

- Public folder: web server will serve this folder, but the source file
is editable in src folder

+, Public/index.html: can add more libraries and framework here for example: 
adding bootstrap, javascript libraries, AOE libraries, etc... 

There will be a div that has the id of 
root that we'll mount the app later in the source code 

+, public/manifest.json: contains configuration of the react app

- src folder: 
+, src/index.js: get access to the root element in the public/index.html
+, src/App.js: is imported in index.js, this is where you can code your application
+, src/App.css: global styling
+, src/index.css: also global styling but should be used for general set up
(own opinion: sort of like the config file in Sass)
+, Doesn't need to worry about serviceWorker.js
+, src/App.test.js: is the testing file that will be used later on 

3. Restriction of JSX: 
- The use of 'className' instead of 'class' for css styling: 
+, The 'class' in html tags are not usable, have to use 'className'
instead because the defining of the class is also named 'class'

4. Noticable content in the example: 
- How to import and export components in Person/Person.js file,
how to import the components in Person/Person.js file into App.js
(in the comment part in the bottom)

- Read about Components note (in the comment part in the bottom)

- Working with Props: Notice how Person.js component get input from App.js
(by attributes in JSX tags)
(in the comment part in the bottom)

- Understand the "children" Prop: props.children get any element that is 
between the <Person> </Person> tag 
(in the comment part in the bottom)

- The use of state, Read "Prop and State documentation" for some more information

- Event listener: read this documentation https://reactjs.org/docs/events.html#supported-events
and see example, notice about the way of changing state object properties