## Stage 1: build
FROM node:16-alpine as build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install
COPY . .
RUN npm run build --silent -- --prod

## Stage 2: serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/neighborhood-library-ui /usr/share/nginx/html
# optional: copy a simple nginx config (using default is fine)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
