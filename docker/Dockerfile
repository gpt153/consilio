FROM mattermost/mattermost-team-edition:latest

# Add any custom configurations or plugins here
COPY ./config/config.json /mm/config/config.json

# Set environment variables
ENV MM_SQLSETTINGS_DRIVERNAME=postgres
ENV MM_SQLSETTINGS_DATASOURCE=postgres://mmuser:mmuser_password@consilio-postgres:5432/mattermost?sslmode=disable
ENV MM_LOGSETTINGS_CONSOLELEVEL=DEBUG

# Expose the default Mattermost port
EXPOSE 8065

# Set the working directory
WORKDIR /mm

# Start Mattermost
CMD ["mattermost", "server"] 