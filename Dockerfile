# Build stage
FROM node:17-alpine3.12 as builder
WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=dev
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# Execution stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build ./