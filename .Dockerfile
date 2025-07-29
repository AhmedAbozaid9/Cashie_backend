FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose port (Railway will override this)
EXPOSE 8080

# Run migrations and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]