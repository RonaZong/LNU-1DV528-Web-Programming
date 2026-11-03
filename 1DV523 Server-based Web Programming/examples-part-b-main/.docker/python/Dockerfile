FROM python 

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 80

CMD ["python3", "-m", "http.server", "--directory", "public", "80"]
