# Step 1. Rebuild the source code only when needed
FROM node:16.20.2 AS builder

WORKDIR /usr/src/app

# Install dependencies based on the preferred package manager
COPY package*.json  .

RUN npm ci; 

COPY . .
# COPY tsconfig.json .

# Uncomment the following line to disable telemetry at build time
RUN npm run build

# Step 2. Production image, copy all the files and run next
FROM node:16.20.2 AS runner

WORKDIR /usr/src/app


COPY --from=builder /usr/src/app ./

EXPOSE 3000

CMD ["npm", "run" , "serve"]