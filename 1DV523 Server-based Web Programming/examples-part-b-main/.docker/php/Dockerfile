FROM php 

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 80 

CMD ["php", "-S", "0.0.0.0:80", "-t", "public"]
