FROM mattermost/mattermost-team-edition:latest

# Create necessary directories
USER root
RUN mkdir -p /mm/customizations
WORKDIR /mm/customizations

# Copy our customization files
COPY ./customizations/ /mm/customizations/

# Copy our custom config
COPY ./config/config.json /mm/config/config.json
RUN chown mattermost:mattermost /mm/config/config.json

# Apply customizations
RUN cp -f /mm/customizations/components/global_header/left_controls/product_menu/product_branding_team_edition/product_branding_team_edition.tsx /mm/client/components/global_header/left_controls/product_menu/product_branding_team_edition/product_branding_team_edition.tsx

# Set environment variables
ENV MM_SQLSETTINGS_DRIVERNAME=postgres
ENV MM_SQLSETTINGS_DATASOURCE=postgres://mmuser:mmuser_password@consilio-postgres:5432/mattermost?sslmode=disable
ENV MM_LOGSETTINGS_CONSOLELEVEL=DEBUG

# Switch back to mattermost user
USER mattermost
WORKDIR /mm

# Start Mattermost
CMD ["./mattermost"] 