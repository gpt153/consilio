# Consilio

Consilio is a custom implementation built on top of Mattermost, providing enhanced collaboration features.

## Repository Structure

This monorepo contains all Consilio components:

- `webapp/`: Web application frontend
- `desktop/`: Desktop application customizations
- `mobile/`: Mobile application customizations
- `shared/`: Shared code, utilities, and components
- `docs/`: Documentation
- `.github/workflows/`: CI/CD pipeline configuration

## CI/CD Pipeline

This repository contains the CI/CD pipeline configuration for the Consilio application. The pipeline automates the process of building Docker containers, pushing them to GitHub Container Registry, and deploying them to the production environment at consilio.cc.

### Development Environment

The development environment is set up using Docker Compose. To start the development environment, run:

```bash
cd consilio-dev
docker-compose up -d
```

### CI/CD Workflow

The CI/CD pipeline is implemented using GitHub Actions. The pipeline consists of two workflows:

1. **Build and Push Docker Image**: This workflow builds the Docker image and pushes it to GitHub Container Registry.
2. **Deploy to Production**: This workflow deploys the Docker image to the production environment.

#### Automated Workflow

The CI/CD pipeline is fully automated:

1. When code is pushed to the `main` branch, the build workflow automatically triggers.
2. After a successful build, the deployment workflow automatically triggers and deploys to production.

#### Manual Workflow

You can also manually trigger the workflows:

1. Go to your GitHub repository.
2. Click on "Actions" > "Build and Push Docker Image".
3. Click on "Run workflow".
4. Enter the tag for the Docker image (e.g., "latest" or a version number).
5. Select the deployment environment (production or staging).
6. Click on "Run workflow".

### Setting Up GitHub Secrets

You need to set up the following secrets in your GitHub repository:

1. `PROD_SSH_USERNAME`: The username for SSH access to the production server.
2. `PROD_SSH_KEY`: The private SSH key for accessing the production server.

To add these secrets:
1. Go to your GitHub repository.
2. Click on "Settings" > "Secrets and variables" > "Actions".
3. Click on "New repository secret" and add each secret.

### Setting Up Production Environment

1. Create the production directory structure:

```bash
mkdir -p /home/samuel/consilio/nginx/{conf.d,ssl,www}
```

2. Copy the production files to the server:

```bash
scp -r consilio-dev/production/* user@consilio.cc:/home/samuel/consilio/
```

3. Create a `.env` file on the production server:

```bash
cp /home/samuel/consilio/.env.example /home/samuel/consilio/.env
```

4. Edit the `.env` file to set your environment variables:

```bash
nano /home/samuel/consilio/.env
```

5. Generate SSL certificates for HTTPS:

```bash
# Using Let's Encrypt
sudo certbot certonly --standalone -d consilio.cc -d www.consilio.cc

# Copy the certificates to the Nginx SSL directory
sudo cp /etc/letsencrypt/live/consilio.cc/fullchain.pem /home/samuel/consilio/nginx/ssl/consilio.cc.crt
sudo cp /etc/letsencrypt/live/consilio.cc/privkey.pem /home/samuel/consilio/nginx/ssl/consilio.cc.key
```

## Triggering the CI/CD Pipeline

To trigger the CI/CD pipeline:

1. Go to your GitHub repository.
2. Click on "Actions" > "Build and Push Docker Image".
3. Click on "Run workflow".
4. Enter the tag for the Docker image (e.g., "latest" or a version number).
5. Select the deployment environment (production or staging).
6. Click on "Run workflow".

The workflow will build the Docker image, push it to GitHub Container Registry, and then automatically deploy it to the production environment if you selected "production" as the deployment environment.

## Manual Deployment

If you need to deploy manually, you can use the deployment script on the production server:

```bash
cd /home/samuel/consilio
./deploy.sh
```

## Monitoring

You can monitor the logs of the running containers using:

```bash
cd /home/samuel/consilio
docker-compose logs -f
```

## Troubleshooting

If you encounter any issues with the deployment, check the following:

1. Make sure the GitHub secrets are correctly set up.
2. Check the GitHub Actions logs for any errors.
3. Check the Docker logs on the production server.
4. Verify that the SSL certificates are correctly configured.

## Getting Started with Development

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Go (1.22+)
- Docker and Docker Compose

### Development Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development environment:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
