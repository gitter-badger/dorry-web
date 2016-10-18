FROM hypriot/rpi-node:latest

WORKDIR /dorry-web
COPY . /dorry-web/
RUN npm install

CMD npm start
