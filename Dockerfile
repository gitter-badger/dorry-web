FROM drakerin/rpi-alpine-nginx

WORKDIR /dorry-web
COPY ./dist/ /dorry-web/
RUN npm install

CMD npm start
