# pull current official node image
FROM node:14.13.1-alpine

# set working directry
WORKDIR /app

# install dependencies
COPY package.json ./
COPY package-lock.json ./
COPY .cert ./
RUN npm install
RUN npm install react-scripts@3.4.3 -g

COPY . /app

CMD ["npm", "start"]