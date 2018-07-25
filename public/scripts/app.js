"use strict";

console.log("App.js is running!");

//JSX

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Indecision App!"
	),
	React.createElement(
		"p",
		null,
		"This is some info"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"First"
		),
		React.createElement(
			"li",
			null,
			"Second"
		)
	)
);

var template2 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Lewis"
	),
	React.createElement(
		"p",
		null,
		"29"
	),
	React.createElement(
		"p",
		null,
		"England"
	)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
