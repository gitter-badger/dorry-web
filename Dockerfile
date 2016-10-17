# To build and run with Docker:
#
#  $ docker build -t dorry-web .
#  $ docker run -it --rm -p 5000:4200 dorry-web
#
FROM node:latest

WORKDIR /dorry-web
COPY . /dorry-web/

CMD npm start
