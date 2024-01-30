FROM node:18-alpine as builder

ARG REACT_APP_BASE_URL=http://localhost:8080
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25
ENV SERVER_NAME=localhost
ENV LISTEN_PORT=8080
ENV BACKEND=localhost:${LISTEN_PORT}
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY ./nginx/default.conf.template /etc/nginx/templates/
COPY --from=builder /app/build /usr/share/nginx/html
COPY  ./src/images/ui/Logo.png /usr/share/nginx/html/logo.png
EXPOSE 8080

