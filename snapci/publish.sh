#!/bin/bash

if [ ! $NPM_PASSWORD ]; then
  echo "Error: NPM_PASSWORD not defined!";
  exit 1;
fi

npm adduser <<!
asceresini
$NPM_PASSWORD
me@ardel.io
!

npm publish .

exit $?
