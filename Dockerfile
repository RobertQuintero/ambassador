# Step 1: Base Image
FROM node:23.0.0-alpine3.20 AS base

# Install compatibility package
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Step 2: Dependencies Layer
FROM base AS deps

COPY package*.json ./

# Install dependencies
RUN npm ci

# Step 3: Build Layer
FROM base AS builder

WORKDIR /app

# Copy dependencies from previous layer
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the app files
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application
RUN npm run build

# Step 4: Runner Layer
FROM base AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000  # Use port 3000 as per your Cloud Run setup

# Create non-root user and group
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy necessary files for runtime
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
