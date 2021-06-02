FROM ubuntu:18.04

# Set the working directory to /app
WORKDIR /app

# Install any needed packages specified in requirements.txt
# COPY src ./src
# COPY package.json ./
# COPY tsconfig.json ./
# COPY development.env ./
# COPY production.env ./

RUN apt update
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN apt install vim -y
RUN apt-get install build-essential -y
RUN npm install pm2 -g
# RUN npm install

# Make port available to the world outside this container
EXPOSE 5010

# rm tsconfig.tsbuildinfo
# rm -r dist
# rm dist.tar.gz
# start cmd
# sudo docker run --name vocabulary-trainer-server -ti -d -p 5010:5010 -v /home/taka/project/deploy/vocabulary-trainer-server:/app/storage -v /home/taka/project/deploy/gtts:/app/gtts vocabulary-server:latest