Express with Mongoose/Mongo DB persistent storage MVC style
==============================

This example shows how to use Express and Mongoose/Mongo DB for persistent storage. This example is further developed from the `express-mongoose` example. It has the following added features.

* MVC Controller style where the routes are defined with a controller method as an callback action.
* MVC Model style for implementing the database access as a model module exporting the objects that can be used for database access.
* Flexible in executing on different ports and with different database connection strings, send them as environment variabels.
* The example is executed locally and it connects to a docker image having MongoDB.
* There is a separate docker image to run for mongosh.

This example is prepared to be executed where MongoDB is in a Docker environment but it can also be changed to connect to other database instances.



Connect to the database
-----------------------------

You may start the default docker container for MongoDB like this.

```
docker-compose up mongo

docker-compose up -d mongo     # detached in the background
```

Take down the container if you started it as detached.

```
docker-compose down

# or remove the volume (database) and start over from scratch
docker-compose down -v
```



Run mongosh using Docker
-----------------------------

The MongoSH is a shell to query the database interactivly. See its [Quick Reference on how to use it](https://docs.mongodb.com/manual/reference/mongo-shell/).

This example comes with a setup so you can run mongosh in a docker container.

Prepare and build the image like this.

```
docker-compose build
```

Start the container like this. The connection string in this example connects to the running docker container named 'mongo' you previously started. You can also use another connection string for the database.

```
# docker-compose run <container> <command>
docker-compose run mongosh mongosh mongodb://mongo/test
```

Then try out some commands.


```
> help
> show databases
> use test
> show collections
> db.cats.find()
```

You can also try out this.

```
> db.cats.findOne({ 'name' : 'A name in the collection'})
```



Start the application
-----------------------------

You start the express server like this, with or without environment variables.

```
npm start
```

```
PORT=3001 npm start
PORT=3001 DSN='mongodb://localhost/test' npm start
```

Then open a web browser and connect to it using: `http://localhost:8008/`. The default port is 8008.

Use the following routes to list and add values to the database.

* `/cat/` (list values in the document)
* `/cat/add` (add values to the document)
* `/cat/:name` (list only one cat matching the name as a parameter)



References
-----------------------------

The program uses the following npm modules.

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)

These are external utilities.

* [Mongoose API documentation](https://mongoosejs.com/)
* [The MongoDB shell mongosh](https://docs.mongodb.com/manual/reference/mongo-shell/)
* [MongoDB to Node](https://docs.mongodb.com/drivers/node), as a API reference.
