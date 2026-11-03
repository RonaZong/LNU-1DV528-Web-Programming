#!/usr/bin/env bash
install -d etc/nginx
rsync -a /etc/nginx/mime.types etc/nginx
rsync -a --delete /etc/nginx/sites-enabled etc/nginx/
rsync -a --delete /etc/nginx/sites-available etc/nginx

install -d var/www
rsync -a --delete /var/www/ var/www/
