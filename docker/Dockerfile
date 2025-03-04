FROM mattermost/mattermost-team-edition:latest

# Switch to root for modifications
USER root

# Copy custom CSS file
COPY ./custom.css /mm/client/

# Copy custom logo files
COPY ./webapp-src/components/common/svg_images_components/consilio_logo.tsx /mm/client/components/common/svg_images_components/
COPY ./webapp-src/components/global_header/left_controls/product_menu/product_branding_team_edition/product_branding_team_edition.tsx /mm/client/components/global_header/left_controls/product_menu/product_branding_team_edition/

# Set proper permissions
RUN chown -R mattermost:mattermost /mm/client/

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