install_1:
	cd webpack-5.40.0 && npm ci

install_2:
	cd webpack-5.41.0 && npm ci

install:
	npm ci && make install_1 && make install_2

build_1:
	cd webpack-5.40.0 && npm start

build_2:
	cd webpack-5.41.0 && npm start

build:
	make build_1 && make build_2

start:
	make install && make build && npm start
