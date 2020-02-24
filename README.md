# Packages Service Demo

README files are available in both the server and app directories,
but here is a quickstart and overview:

## Running locally

1. Copy the provided `.env` file into `./server` (alongside `.env.example`) - 
   this file is necessary to avoid putting API credentials into the repo

2. Start the server from `./server` with `npm i && npm run start`

3. Start the app build/serve with from `./app` with `npm i && npm run start`

4. Visit `http://localhost:3000` in your browser

## Running tests

Both app include some tests. You can run these in both server and app with `npm run test`

## Some notes and limitations

1. Developed on Node 12, also tested on Node 10 (on Mac and Linux), Node 8 not tested.

2. No API auth.

3. No API pagination, filtering and sort is client side.

4. Tests aim to cover a variety of system areas but are not exhaustive.

5. Not productionised - probably won't build for prod yet, and DB is really on dev suitable.

6. DB embeds some JSON (Mongo style) - would probaby use NoSQL in prod but this way (SQLite) keeps everything self contained.

7. UI is desktop only, really - not optimised for mobile at all.