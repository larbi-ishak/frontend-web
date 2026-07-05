FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN adduser -D nodeuser
USER nodeuser
EXPOSE 3000
CMD ["npm", "start"]
