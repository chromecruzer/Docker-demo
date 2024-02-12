FROM node:lts-alpine
WORKDIR /nitro-app
COPY package*.json . 
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]