# Stage 1: Build application
FROM node:18.13-alpine as build
WORKDIR /app
# Copy all dependencies
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve Angular app 
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]