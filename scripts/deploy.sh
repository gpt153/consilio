#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    echo -e "${2}${1}${NC}"
}

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_message "Error: Not a git repository. Please run this script from the root of the consilio-dev repository." "$RED"
    exit 1
fi

# Check if there are changes to commit
if [ -z "$(git status --porcelain)" ]; then
    print_message "No changes to commit. Exiting." "$YELLOW"
    exit 0
fi

# Show the changes that will be committed
print_message "The following changes will be committed:" "$GREEN"
git status --short

# Ask for confirmation
read -p "Do you want to continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_message "Deployment cancelled." "$YELLOW"
    exit 0
fi

# Ask for commit message
echo
read -p "Enter commit message: " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update Consilio branding"
fi

# Add all changes
print_message "Adding changes..." "$GREEN"
git add .

# Commit changes
print_message "Committing changes..." "$GREEN"
git commit -m "$commit_message"

# Push to GitHub
print_message "Pushing to GitHub..." "$GREEN"
if git push origin main; then
    print_message "Successfully pushed to GitHub!" "$GREEN"
    print_message "Check the CI/CD pipeline status at: https://github.com/gpt153/consilio/actions" "$GREEN"
    print_message "Your changes will be deployed automatically once the pipeline completes." "$GREEN"
else
    print_message "Failed to push to GitHub. Please check your connection and try again." "$RED"
    exit 1
fi

exit 0 