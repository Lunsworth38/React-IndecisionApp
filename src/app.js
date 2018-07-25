console.log("App.js is running!");

//JSX

var template = (
	<div>
		<h1>Indecision App!</h1> 
		<p>This is some info</p>
		<ol>
			<li>First</li>
			<li>Second</li>
		</ol>
	</div>
);

var template2 = (
	<div>
		<h1>Lewis</h1>
		<p>29</p>
		<p>England</p>
	</div>
); 

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);