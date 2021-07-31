FROM node:12-alpine
WORKDIR /var/www/app
EXPOSE 4200
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]