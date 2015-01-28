#!/bin/bash

if [ ! $NPM_USERNAME ]; then
  echo "Error: NPM_USERNAME not defined!";
  exit 1;
fi

npm config set //registry.npmjs.org/:_password $NPM_USERNAME
npm config set //registry.npmjs.org/:always-auth false
npm config set //registry.npmjs.org/:email "me@ardel.io"
npm config set //registry.npmjs.org/:username "asceresini"
npm config set init.author.email "me@ardel.io"
npm config set init.author.name "Anthony Sceresini"
npm config set init.author.url "http://ardel.io"

npm publish .

exit $?
