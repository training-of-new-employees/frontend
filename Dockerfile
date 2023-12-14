FROM node:18-alpine as builder

ARG REACT_APP_BASE_URL=http://localhost:8080
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25
ENV BACKEND=backend:8080
ENV NGINX_PORT=8080
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
