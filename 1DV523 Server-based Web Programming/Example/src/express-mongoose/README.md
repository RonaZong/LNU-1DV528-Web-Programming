Express with Mongoose/Mongo DB persistent storage
==============================

This example shows how to use Express and Mongoose/Mongo DB for persistent storage. This example is prepared to be executed in an Docker environment.

This example is built upon the code in "[docker-compose-node-mongodb](https://github.com/thajo/docker-compose-node-mongodb/)".



Run in Docker
-----------------------------

Build it:

```
docker-compose build
```

Start it by:

```
docker-compose up
```

Take it down by (needed if you want to rebuild the image):

```
docker-compose down

# or remove the volume (database) and start over from scratch
docker-compose down -v
```

Then open a web browser and connect to it using: `http://127.0.0.1:8008/`.

Then use the following two routes to list and add values to the database.

* `/cat/` (list values in the document)
* `/cat/add` (add values to the document)
* `/cat/:name` (list only one cat matching the name as a parameter)



Try out mongosh
-----------------------------

The MongoSH is a shell to query the database interactivly. It is pre-installed in the Docker image. See its [Quick Reference on how to use it](https://docs.mongodb.com/manual/reference/mongo-shell/).

Here is how you can start it.

```
docker-compose run web bash
$ mongosh mongodb://db/test
# or directly
docker-compose run web mongosh mongodb://db/test
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



References
-----------------------------

The program uses the following npm modules.

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)

These are external utilities.

* [Mongoose API documentation](https://mongoosejs.com/)
* [The MongoDB shell mongosh](https://docs.mongodb.com/manual/reference/mongo-shell/)
* [MongoDB to Node](https://docs.mongodb.com/drivers/node), as a API reference.
