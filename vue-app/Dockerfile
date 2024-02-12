FROM node:lts-alpine
WORKDIR /vue-app
COPY package*.json . 
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "dev" ]