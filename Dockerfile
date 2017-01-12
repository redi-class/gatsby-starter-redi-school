FROM node:7
MAINTAINER Mat <ultrmat@gmail.com> 

ENV NPM_CONFIG_LOGLEVEL warn

# Install missing packages
RUN apt-get update && apt install -y \
  apt-utils \
  vim

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY package.json /src
RUN npm install

# Bundle app source
#COPY . /src
#this happens via volume and git

EXPOSE 8000
CMD [ "npm", "run", "develop" ]
