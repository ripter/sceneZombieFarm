.PHONY: all build clean deploy lint server gen.cert

all: deploy server

build: node_modules/
	npx webpack --mode development

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

deploy: lint
	npx webpack --mode production

lint: node_modules/
	npx eslint --fix src/

server: build
	npx webpack-dev-server --open

node_modules/: package.json
	npm install
	touch node_modules/

gen.cert:
	# https://gist.github.com/pgilad/63ddb94e0691eebd502deee207ff62bd
	openssl genrsa -out server.key 4096
	openssl req -new -sha256 -out server.csr -key server.key
	openssl x509 -req -days 3650 -in server.csr -signkey server.key -out server.crt -extensions req_ext
	openssl x509 -in server.crt -out server.pem -outform PEM
