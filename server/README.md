# Packages Service Demo

Koa based API. 

## Start

1. A `.env` file with a valid token for the Heroku product API is checked
on startup. Ensure you create a `./server/.env` file containing:

```
PRODUCT_SERVICE_AUTH_TOKEN=<username and password concatenated with : and base64 encoded>
```

2. Run `npm install`

3. Run `npm run start` and the server will listen on `http://localhost:3001`

4. If the database is empty, some data will be seeding on startup

## Tests

To run tests, execute `npm run test`

## Packages API

Most API calls will be used by the app. THe CREATE API call should be used
manually to create new packages in the DB. The payload should look like this:

```
{
	"name": "My Package",
	"description": "Lorem ipsum dolor sit amet.",
	"products": [
		"PKM5pGAh9yGm",
		"DXSQpv6XVeJm",
		"VqKb4tyj9V6i"
	]
}
```

The array of products **do not** need to be unique. They **do** need to be valid
product ids from the provided Heroku app or the call will fail. 

A total price for the package will be calculated from the retrieved products. If you
want to override it, send a price property:

```
{
	"name": "My Package",
	"description": "Lorem ipsum dolor sit amet.",
	"products": [
		"PKM5pGAh9yGm",
		"DXSQpv6XVeJm",
		"VqKb4tyj9V6i"
	],
    "price": 999,
}
```

Prices are always in dollars when creating packages. They will be converted
to other currencies on retrieving them.

### Examples

```
GET http://localhost:3001/packages      # Index all
GET http://localhost:3001/packages/1    # Get one
POST http://localhost:3001/packages     # Create new (see payload above)
PUT http://localhost:3001/packages/1    # Replace existing (see payload above)
DELETE http://localhost:3001/packages/1 # Delete
```
