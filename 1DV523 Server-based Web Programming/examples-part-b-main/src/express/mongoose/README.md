---
revision: 
    "2023-02-06": "(B, mos) Updated with MJS and improved structure in README."
    "2021-11-31": "(A, mos) First version."
---
Express with Mongoose/Mongo DB persistent storage
==============================

This example shows how to use Express and Mongoose/Mongo DB for persistent storage. This example is prepared to be executed in an Docker environment that hosts the MongoDB database.

The codestyle in Express is according to MVC as it was layed out in the example "[Model View Controller (MVC) with the Express Web Framework](./../mvc/)".

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 15 minutes long (English), when Mikael goes through the content of this article.

[![2023-02-07 en](https://img.youtube.com/vi/0eC2A2eLSWk/0.jpg)](https://www.youtube.com/watch?v=0eC2A2eLSWk)



Run MongoDB in Docker
-----------------------------

To make it easy to run this example we will be using the MongoDB installed in a docker container. There is a container called `mongo` which is based on the default image of MongoDB and it can be found at [`official image for MongoDB`](https://hub.docker.com/_/mongo). The data is stored in a persistent volume and saves its data between sessions.

This is how to get going with the docker installation.

Start it:

```
docker-compose up

# or start in the background
docker-compose up -d
```

Take it down by:

```
docker-compose down

# or remove the volume (database) and start over from scratch
docker-compose down -v
```

The database MongoDB listens on its default port 27017 when you start it in the container.

Check the docs on how to install MongoDB it locally on your environment, if you prefer that instead of running it through docker.

You can also use MongoDB as a service through the [MongoDB Atlas service](https://www.mongodb.com/database-as-a-service). There is a free option.



Try out mongosh using docker
-----------------------------

The [MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/) is a shell to query the database interactivly. It is pre-installed in the Docker image. Check the docs on how to install it locally on your environment, if you prefer that instead of running it through docker.

Here is how you can start it by running a shell in the container.

```
# Run a shell in the container
docker-compose run mongo bash
```

Start the shell `mongosh` and connect to your running instance of MongoDB which runs in the docker network named `mongo`. Change the hostname if you are connecting to another data source.

```
mongosh mongodb://mongo
```

You can also connect as an authenticated user `root` with the password `secret`.

```
mongosh mongodb://root:secret@mongo
```

When you are connected you can try out some commands.

```
> help
> show databases
> use test
> show collections
```

Now you know how to connect to a MongoDB database. Use this terminal `mongosh` as a test and development tool. It might help you with debugging.



npm install
-----------------------------

All the external packages are available in the `package.json`. Install as this.

```
npm install
```

For your information, the packages that are installed where first installed as this.

```
npm install express morgan ejs mongoose dotenv --save
npm install nodemon --save-dev
``` 

You can read more on the [npm package mongoose](https://www.npmjs.com/package/mongoose) that is the package that deals with the actual connection to MongoDB through JavaScript code and keeps the database schema.

The [npm package dotenv](https://www.npmjs.com/package/dotenv) will help you save secrets like connection details to the MongoDB database.



Start the express server
-----------------------------

You can start the express server that connects to the MongoDB like this.

```
npm start
```

The server starts up and listens to a port. Check that it works to connect to it by using curl. YOu should see a "Hello World!" message.

```
curl http://localhost:3000
```

You can then open a web browser to the url http://localhost:3000/cat to start using the example.

The database is empty at start.



Connection details
-----------------------------

A good way to start is to make a copy of the `.env.development` and save it as `.env` and then update the settings to fit your environment where you run MongoDB.

The example uses the dotenv package so the connection details are stored in the `.env` and the `.env.development` files. All the data in the `.env` files overwrites the data in the `.env.development`. If you need to change any details, then create a file `.env` and add your specific settings into it.

If you add secrets to it, then the file should not be committed to git, read more on [what should be committed and not when using dotenv](https://github.com/bkeepers/dotenv#should-i-commit-my-env-file).

The default setup works with the docker container and the user and password that are setup in the file [`docker-compose.yml`](./docker-compose.yml).

The content of the file [`.env.development`](.env.development).

```
#
# https://github.com/bkeepers/dotenv#should-i-commit-my-env-file
# https://www.mongodb.com/docs/manual/reference/connection-string/
#

#MONGO_URI='mongodb://<user>:<pass>@<host>:<port>/<database>?<connection options>'

# Connection string to the docker container mongo
#MONGO_URI='mongodb://mongo/pets'

# Connection string to the docker container mongo using root:secret
#MONGO_URI='mongodb://root:secret@mongo/pets?authSource=admin'

# Connection string to localhost
MONGO_URI='mongodb://root:secret@127.0.0.1/pets?authSource=admin'
#MONGO_URI='mongodb://127.0.0.1/pets'

# Connection string to Atlas
#MONGO_URI='mongodb://root:secret@mongo/pets'
```



Work with Mongoose
-----------------------------

Read more on [Mongoose in the docs](https://mongoosejs.com/). Mongoose also uses the [MongoDB Node connector](https://docs.mongodb.com/drivers/node).



### Connect

The example uses Mongoose as the way to connect and work with the MongoDB databases.

```javascript
//
// Connect to the MongoDB database
//
mongoose.set('strictQuery', false) // fix to prepare for 7.0 and avoid warning
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```



### Schema

Using Mongoose you can create and store a schema in the database which contains both data and methods.

```javascript
//
// Create a database schema
//
const Schema = mongoose.Schema;
const catSchema = new Schema({
  name: String
})

// methods must be added to the schema before compiling with mongoose.model()
catSchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name"
  console.log(greeting)
  return greeting
}

// Compile a model from the schema
const Cat = mongoose.model('Cat', catSchema)
```



### Add, view, delete, search

All the code is saved in the [model class src/model/cat.mjs](./src/model/cat.mjs). Review it to see how to add data to the database, how to delete, search and view its content.

List all cats.

```javascript
/**
 * List all cats.
 * 
 * @returns array with cats.
 */
model.listAll = async () => {
  console.log('Reading cats from the database...')
  const kittens = await Cat.find()
  console.log(JSON.stringify(kittens, null, 2))
return kittens
}
```

Delete all cats.

```javascript
/**
 * Delete all cats.
 */
model.deleteAll = async () => {
  await Cat.deleteMany()
  console.log('All cats where deleted')
}
```

Add a new cat.

```javascript
/**
 * Add new cat.
 */
model.add = async () => {
  const rand = Math.floor(Math.random() * Math.floor(10))
  const kitty = new Cat({
    name: 'Zildjian ' + rand
  })

  await kitty.save()
  console.log('A cat was added - ' + kitty.speak())
}
```

Find a cat with a specific name.

```javascript
/**
 * Find a cat by name.
 * 
 * @returns array with cats.
 */
model.findByName = async (name) => {
  return await Cat.find({
    'name' : name
  })
}
```

Check the Mongoose docs to learn more.



Try out mongosh
-----------------------------

Now when you have data in your data base you can try to access it using mongosh. Create a connection to your database using the mongosh and try the following.

```
> help
> show databases
> use pets
> show collections
> db.cats.find()
```

You can also try out this.

```
> db.cats.findOne({ 'name' : 'A name in the collection'})
```

Or try this where `il` is a regular expression.

```
> db.cats.find({ 'name' : /il/})
```



Summary
-----------------------------

You have seen examples that shows how to connect a express server with the MonogDB database and using Mongoose to work with the data and the schema. The code structure was MVC and dotenv used for keeping the secrets.
