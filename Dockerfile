FROM node:alpine as build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Serve with nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx","-g","deamon off;" ]

