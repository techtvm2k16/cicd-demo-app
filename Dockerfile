# Use official Node.js LTS (small alpine image)
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the app
COPY . .

# App listens on port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
