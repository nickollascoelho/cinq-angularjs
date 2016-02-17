[![Build Status](https://travis-ci.org/nickollascoelho/cinq-angularjs.svg?branch=master)](https://travis-ci.org/nickollascoelho/cinq-angularjs)

# CINQ AngularJS

An app to present the resulting data from a REST service.
[demo](http://cinq-angularjs.herokuapp.com/)

#### Built with:
* [node.js](http://www.nodejs.org/)
* [express](http://www.expressjs.com/)
* [angularjs](https://angularjs.org/)
* [docker](https://www.docker.com/)

#### How to RUN using [docker](https://docs.docker.com/engine/installation/):
* `docker build -t nickollascoelho/cinq-angularjs .`
* `docker run -p 49876:3000 -d nickollascoelho/cinq-angularjs`
* `Access` [localhost:49876](http://localhost:49876)

#### How to RUN using npm: (Incomplete)
* `npm install`
* `npm postinstall`
* `npm start`
