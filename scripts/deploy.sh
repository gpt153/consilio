#!/bin/bash

# Script to push changes to GitHub and trigger the CI/CD pipeline

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Consilio Deployment Script${NC}"
echo "This script will push your changes to GitHub and trigger the CI/CD pipeline."
echo ""

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: Not in a git repository. Please run this script from the root of the Consilio repository."
  exit 1
fi

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
  echo "No changes to commit. Do you want to push anyway? (y/n)"
  read -r answer
  if [ "$answer" != "y" ]; then
    echo "Deployment cancelled."
    exit 0
  fi
else
  # Show changes
  echo -e "${YELLOW}Changes to be committed:${NC}"
  git status -s
  echo ""
  
  # Ask for commit message
  echo "Enter commit message:"
  read -r commit_message
  
  # Commit changes
  git add .
  git commit -m "$commit_message"
  
  if [ $? -ne 0 ]; then
    echo "Error: Failed to commit changes."
    exit 1
  fi
  
  echo -e "${GREEN}Changes committed successfully.${NC}"
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -ne 0 ]; then
  echo "Error: Failed to push to GitHub."
  exit 1
fi

echo -e "${GREEN}Changes pushed to GitHub successfully.${NC}"
echo "The CI/CD pipeline has been triggered."
echo "You can check the status of the pipeline at: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:\/]\(.*\)\.git/\1/')/actions"

exit 0 