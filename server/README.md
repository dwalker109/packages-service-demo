# Packages Service Demo

Koa based API. 

A `.env` file with a valid token for the Heroku product API is checked
on startup. If this is missing, ensure you create a `./server/.env` file 
containing:

```
PRODUCT_SERVICE_AUTH_TOKEN=<username and password concatenated with : and base64 encoded>
```

## Packages API

