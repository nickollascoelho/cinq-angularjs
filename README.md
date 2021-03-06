An app to present the resulting data from a REST service.
> [Live demo](http://cinq-angularjs.herokuapp.com/)

[![Build Status](https://travis-ci.org/nickollascoelho/cinq-angularjs.svg?branch=master)](https://travis-ci.org/nickollascoelho/cinq-angularjs)
[![Code Climate](https://codeclimate.com/github/nickollascoelho/cinq-angularjs/badges/gpa.svg)](https://codeclimate.com/github/nickollascoelho/cinq-angularjs)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/669ab8d171664afc940003a639b9bf68)](https://www.codacy.com/app/nickollas-coelho/cinq-angularjs)

#### Built with:
* [node.js](http://www.nodejs.org/)
* [express](http://www.expressjs.com/)
* [angularjs](https://angularjs.org/)
* [docker](https://www.docker.com/)

#### How to run using docker: ([docker installguide](https://docs.docker.com/engine/installation/))
* `docker build -t nickollascoelho/cinq-angularjs .`
* `docker run -p 49876:3000 -d nickollascoelho/cinq-angularjs`
* `Access localhost:49876 (Linux) or 192.168.99.100:49876 (OSX and Windows)`

#### How to run using npm:
* `npm install`
* `npm start`
* `Access localhost:3000`
