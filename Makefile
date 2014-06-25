serve: templates.js
	./node_modules/.bin/beefy example/example.js --open --cwd ./example

templates.js: example/templates/*.dom
	./node_modules/.bin/domthing example/templates > example/templates.js
