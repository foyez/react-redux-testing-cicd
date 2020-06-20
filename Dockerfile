# Use small slim Linux image
FROM node:12.16.1-buster-slim

LABEL maintainer="foyezar@gmail.com"

# set environment variables
ENV PORT=3000

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# RUN yarn cache clean --force
# RUN yarn --silent
RUN yarn

COPY ./ ./


# Build production client side React application
# RUN yarn run build

# Expose port for Node
EXPOSE $PORT

# Start Node server
# ENTRYPOINT yarn start
# CMD ["/bin/bash"]
CMD [ "yarn", "start" ]
