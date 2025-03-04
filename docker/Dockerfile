FROM node:16 as webapp-builder

# Install necessary build tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /mattermost-webapp

# Copy the Mattermost webapp source code
COPY mattermost/webapp/ .

# Install dependencies and build the webapp
RUN npm install
RUN npm run build

# Use the official Mattermost image as base for the final image
FROM mattermost/mattermost-team-edition:latest

# Copy the built webapp over the existing one
COPY --from=webapp-builder /mattermost-webapp/dist /mm/client

# Add any custom configurations
COPY ./config/config.json /mm/config/config.json
RUN chown mattermost:mattermost /mm/config/config.json

# Set environment variables
ENV MM_SQLSETTINGS_DRIVERNAME=postgres
ENV MM_SQLSETTINGS_DATASOURCE=postgres://mmuser:mmuser_password@consilio-postgres:5432/mattermost?sslmode=disable
ENV MM_LOGSETTINGS_CONSOLELEVEL=DEBUG

# Expose the default Mattermost port
EXPOSE 8065

# Set the working directory
WORKDIR /mm

# Start Mattermost
CMD ["./mattermost"] 