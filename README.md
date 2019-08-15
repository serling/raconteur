##Getting started##

###Build & Run:###

`now dev` for development

`now` for production

##Config##

###Database:###

https://zeit.co/guides/deploying-a-mongodb-powered-api-with-node-and-now/

Download `MongoDB Community` and `MongoDB Compass Community`.

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#mongodb-as-a-windows-service

Create a `.env` file with a `MONGODB_URI` string for local development database:

`MONGODB_URI=mongodb://[localhost:port]/[database]`

##TODO:##

- game template needs an article grid for `related games` or `articles`
- game template needs a `next game ->` link
- remove heading and add `home` and `menu` as sticky, add mix-blend-mode: difference to the svg.
- front page - top articles needs to be an array of ID's to articles
- lazy load realted articles etc?

- https://www.npmjs.com/package/react-lazy-load-image-component
- now? https://www.npmjs.com/package/next-optimized-images
- https://mongoosejs.com/
