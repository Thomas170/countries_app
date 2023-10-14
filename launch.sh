#!/bin/bash

if ! [ -x "$(command -v docker-compose)" ]; then
  echo "Error: Docker Compose is not installed. Please install it and try again."
  exit 1
fi

docker-compose build
docker-compose up
