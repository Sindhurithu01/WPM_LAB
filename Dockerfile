# Use official Nginx image to serve static files
FROM nginx:alpine

# Copy all files from current directory to Nginx's public directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
