FROM node:7
MAINTAINER Mat <ultrmat@gmail.com> 

ENV NPM_CONFIG_LOGLEVEL warn

# add 
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.4 main" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list

# Install missing packages
RUN apt-get update && apt-get install -y \
  apt-utils \
  mongodb-org-shell \
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
