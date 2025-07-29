FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma Client and run migrations before building
RUN npx prisma generate
RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]