FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# production environment
CMD ["npm", "run", "start"]