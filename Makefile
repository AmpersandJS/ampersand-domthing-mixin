serve: templates.js
	./node_modules/.bin/beefy test.js --open

templates.js: templates/*.dom
	./node_modules/.bin/domthing templates > templates.js
