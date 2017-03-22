#!/bin/sh

echo "mongoimport --db db-quotes --collection quotes --drop --maintainInsertionOrder --file quotes.json"
mongoimport --db db-quotes --collection quotes --drop --maintainInsertionOrder --file quotes.json

exit 0
