#!/bin/bash

# Exit on error
set -e

# Load environment variables
if [ -f .env ]; then
  source .env
else
  echo "Error: .env file not found. Please create one based on .env.example"
  exit 1
fi

# Pull the latest images
echo "Pulling the latest Docker images..."
docker-compose pull

# Restart the services
echo "Restarting services..."
docker-compose down
docker-compose up -d

# Clean up unused images
echo "Cleaning up unused Docker images..."
docker system prune -af

echo "Deployment completed successfully!" 