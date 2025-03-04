FROM mattermost/mattermost-team-edition:latest

# Switch to root for modifications
USER root

# Copy our custom config
COPY ./config/config.json /mm/config/config.json

# Copy custom CSS file
COPY ./custom.css /mm/client/

# Set proper permissions
RUN chown mattermost:mattermost /mm/config/config.json /mm/client/custom.css

# Set environment variables
ENV MM_SQLSETTINGS_DRIVERNAME=postgres
ENV MM_SQLSETTINGS_DATASOURCE=postgres://mmuser:mmuser_password@consilio-postgres:5432/mattermost?sslmode=disable
ENV MM_LOGSETTINGS_CONSOLELEVEL=DEBUG
ENV MM_CUSTOMSETTINGS_ENABLECUSTOMBRANDING=true
ENV MM_CUSTOMSETTINGS_CUSTOMCSSURL=/custom.css

# Switch back to mattermost user
USER mattermost
WORKDIR /mm

# Start Mattermost
CMD ["./mattermost"] 