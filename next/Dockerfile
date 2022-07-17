FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
RUN npm run build
CMD ["npm", "start"]
