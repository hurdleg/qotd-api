# Quote-of-the-Day Service (QOTD)

## Supported RESTful API

| Title                  | URL                | Request type | Parameters | Expected Responses         |
|------------------------|:------------------:|:------------:|:----------:|:--------------------------:|
| Get all the quotes     | /quotes            | GET          | n/a        | Success: 200, Failure: 404 |
| Get a random quote     | /qotd              | GET          | n/a        | Success: 200, Failure: 404 |

## Installation (localhost)
Grab all of the required node modules for this app.
1. npm install

> This step is done once.

## Usage (localhost)
1. npm start
2. Open a browser
   * http://localhost:3000
   * http://localhost:3000/quotes
   * http://localhost:3000/qotd
3. To stop the Express server, type `control-C`

## Error Handling
1. http://localhost:3000/bogus

   404 - Not Found

## S&G Guys
