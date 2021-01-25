FROM registry.gitlab.com/replatf0rm/debian-nvm:12-bullseye-slim-amd64

RUN apt-get update && apt-get install -y \
#TinaCMS scm
    git \
#TinaCMS sharp libs needed for sharp in arm64
    libpng-dev libvips-dev build-essential curl gnupg apt-utils dh-autoreconf gcc g++ make \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/

COPY [ ".env-ci", "package.json", "yarn.lock", "./" ]
RUN yarn install
ARG BASE_REPO_FULL_NAME
ARG GITHUB_CLIENT_ID
COPY . .
RUN yarn deploy
EXPOSE 4200
EXPOSE 4201
EXPOSE 8080
EXPOSE 8081
ENTRYPOINT ["yarn"]
CMD ["develop"]
