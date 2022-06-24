FROM  node:16.13.0-alpine

ENV NODE_ENV production
WORKDIR /app
COPY package.json package.json
COPY . .
RUN npm ci --only=production
CMD ["npm", "start"]
