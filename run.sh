#!/bin/bash
docker image rm dark_message_user:latest
docker build -t dark_message_user:latest -f production.dockerfile .
docker rm -f dark_message_user
docker run -it -d --name dark_message_user --network apps -p 3005:3005 --env TZ=Asia/Ho_Chi_Minh dark_message_user:latest