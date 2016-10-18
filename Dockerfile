FROM drakerin/rpi-alpine-nginx

WORKDIR /dorry-web
COPY ./dist/ /dorry-web/
COPY default.conf /etc/nginx/default.conf
RUN chown root /etc/nginx/default.conf && \
    chgrp root /etc/nginx/default.conf

CMD ["/bin/sh", "/start-nginx.sh"]
