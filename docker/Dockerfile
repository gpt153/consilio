FROM golang:1.21 as builder

# Install necessary build tools
RUN apt-get update && apt-get install -y \
    build-essential \
    jq \
    nodejs \
    npm \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set up Node.js
RUN npm install -g yarn

# Set working directory
WORKDIR /mattermost-src

# Copy the Mattermost source code
# Note: This will be copied from the build context during the GitHub Actions workflow
COPY mattermost/ .

# Build Mattermost
RUN make build-linux

# Final stage
FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    jq \
    && rm -rf /var/lib/apt/lists/*

# Create mattermost user and group
RUN groupadd -r mattermost && useradd -r -g mattermost mattermost

# Create necessary directories with proper permissions
RUN mkdir -p /mm/data /mm/logs /mm/config /mm/plugins /mm/client/plugins \
    && chown -R mattermost:mattermost /mm

# Copy built artifacts from builder stage
COPY --from=builder /mattermost-src/bin/mattermost /mm/
COPY --from=builder /mattermost-src/config/config.json /mm/config/
COPY --from=builder /mattermost-src/i18n /mm/i18n/
COPY --from=builder /mattermost-src/fonts /mm/fonts/
COPY --from=builder /mattermost-src/templates /mm/templates/
COPY --from=builder /mattermost-src/client /mm/client/

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

# Switch to mattermost user
USER mattermost

# Start Mattermost
CMD ["./mattermost"] 