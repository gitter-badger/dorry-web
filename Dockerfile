# To build and run with Docker:
#
#  $ docker build -t dorry-web .
#  $ docker run -it --rm -p 4200:4200 dorry-web
#
#FROM node:latest
FROM hypriot/rpi-node:latest

WORKDIR /dorry-web
COPY . /dorry-web/
RUN npm install

CMD npm start
