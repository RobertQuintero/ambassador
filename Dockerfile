# This Dockerfile is used to build and run a Node.js application using multiple stages.
# It leverages the multi-stage build feature to optimize the final image size and separate dependencies, build, and runtime environments.

# Step 1: Base image
# Use the official Node.js image based on Alpine Linux for a lightweight base image.
# Tag this stage as 'base'.
# FROM node:23.0.0-alpine3.20 AS base

# Step 2: Dependencies stage
# Create a new stage 'deps' based on the 'base' image.
# Install necessary packages and dependencies.
# RUN apk add --no-cache libc6-compat
# Set the working directory to /app.
# WORKDIR /app
# Copy package.json and package-lock.json to the working directory.
# COPY package*.json ./
# Install Node.js dependencies using npm ci.
# RUN npm ci

# Step 3: Build stage
# Create a new stage 'builder' based on the 'base' image.
# Set the working directory to /app.
# WORKDIR /app
# Copy the node_modules from the 'deps' stage.
# COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application code to the working directory.
# COPY . .
# Disable Next.js telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
# Build the application using npm run build.
# RUN npm run build

# Step 4: Runtime stage
# Create a new stage 'runner' based on the 'base' image.
# Set the working directory to /app.
# WORKDIR /app
# Set the environment to production.
# ENV NODE_ENV production
# Disable Next.js telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
# Create a system group and user for running the application.
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs
# Copy the public directory from the 'builder' stage.
# COPY --from=builder /app/public ./public
# Copy the .next directory from the 'builder' stage with appropriate ownership.
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# Copy the node_modules from the 'builder' stage.
# COPY --from=builder /app/node_modules ./node_modules
# Copy the package.json from the 'builder' stage.
# COPY --from=builder /app/package.json ./package.json
# Switch to the nextjs user.
# USER nextjs
# Expose port 3000 for the application.
# EXPOSE 3000
# Set the PORT environment variable to 3000.
# ENV PORT 3000
# Define the command to run the application.
# CMD ["npm", "start"]
# Step 1: Build the application
FROM node:22.5.1-alpine3.20 AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

