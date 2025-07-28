# Etapa 1: build da aplicação Angular
FROM node:20.19-slim as build

WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app .
RUN npm run build -- --configuration production

CMD ["npm", "start", "--", "--host", "0.0.0.0"]