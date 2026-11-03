FROM ubuntu 

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN apt update \
    && apt install -y \
        apache2 \
        apache2-utils \
    && apt clean 

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]
