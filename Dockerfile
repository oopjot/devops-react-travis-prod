FROM node:alpine AS builder
WORKDIR /opt/pizza-app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=builder /opt/pizza-app/build/ /usr/share/nginx/html
EXPOSE 3000
