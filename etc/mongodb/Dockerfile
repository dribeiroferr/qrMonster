FROM mongo:latest

WORKDIR /app

# Copy the .env file containing .env vars
COPY ../../.dev.env.sh /app/.dev.env.sh

#Set the environment variables by sourcing the .env file
RUN source /app/.dev.env.sh
