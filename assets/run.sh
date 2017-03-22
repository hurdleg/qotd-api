#!/bin/sh

dbdir=db-quotes

mkdir -p $dbdir

echo "mongod --dbpath=$dbdir"
mongod --dbpath=$dbdir

exit 0
