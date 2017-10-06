---
title: Dockerizing Your Local Rails Databases
subtitle: Getting up and running quickly with docker-compose
date: "2017-04-24"
---

[Docker](https://www.docker.com/) has proven to be an invaluable tool for myself and the team around me in our efforts to reduce headaches in local development. I've dealt with maintaining a legacy .NET app with build times easily over 5 minutes only runnable when connected to a remote database over VPN, and I don't want to experience anything like that again. Using Docker, we've been able to greatly improve developer experience and ensure that all developers are working in a consistent, portable local environment.

One of the ways we utilize Docker is running local database servers for our Node and Rails applications. In this post, I'll show you how we use [Docker Compose](https://github.com/docker/compose) to get up and running quickly with a Rails application.

Docker Compose allows you to quickly spin up local Docker containers by reading a set of instructions and parameters from a `.yml` file. You can enumerate what images you want to use, what environment variables you want to pass to your containers, execute arbitrary scripts on startup, and more. Anything you can do with the Docker CLI, you can more than likely accomplish as well through Docker Compose.

For example, if I have a Rails app that I'm going to deploy to [Heroku](https://www.heroku.com/), I'll most likely want to run [Postgres](https://www.postgresql.org/) locally, since that's the database of choice for Heroku's Rails platform. Before Docker, I would just install Postgres via Homebrew on my Mac, and run the service locally. Not a huge deal or much of a process - it's mostly painless. For other developers, though, they may be running a different operating system or be missing dependencies or they may already be running an outdated version of Postgres. Running that local database through a Docker container though, you gain benefits like ensuring the Postgres version across all developer machines is identical and ensuring cross platform functionality. Here's a `docker-compose.yml` file you can use to run two Postgres databases locally - one for your Rails app's `development` environment, and one for its `test` environment.

```yml
version: '2'

services: 
  db_dev:
    image: postgres:9.6
    environment:
      - POSTGRES_USER=rails_app_user
      - POSTGRES_PASSWORD=rails_app_password
      - POSTGRES_DB=rails_app
    ports:
      - "5432:5432"
  db_test:
    image: postgres:9.6
    environment:
      - POSTGRES_USER=rails_app_user
      - POSTGRES_PASSWORD=rails_app_password
      - POSTGRES_DB=rails_app
    ports: 
      - "5433:5432"
```

When we run `docker-compose up` with this config defined, Docker will fetch the [Postgres image](https://hub.docker.com/_/postgres/), build it, and pass the environment variables we defined to it on startup.

One thing you'll notice is that, since we're running two separate Postgres servers here, they get assigned to different ports on your local machine. The `development` database with listen on `5432` as is standard for Postgres, but the `test` database will listen on `5433`. In more traditional Rails configurations, developers will just use a separate database schema for each environment. Don't worry though, these containers are lightweight, and running an extra Postgres server isn't too heavy of a task. Also notice that Postgres is locked to version 9.6, which is the current default for Heroku's free [Postgres addon](https://elements.heroku.com/addons/heroku-postgresql).

With this `docker-compose.yml` file at the root of our Rails project, we can simply run `docker-compose up` to start both containers simultaneously.

In terms of configuring your Rails project, here's a sample `config/database.yml` file that matches the configuration above.

```yml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: rails_app_user
  password: rails_app_password
  database: rails_app_password
  host: 127.0.0.1

development:
  <<: *default
  port: 5432

test:
  <<: *default
  port: 5433

production:
  <<: *default
  database: rails_app
  username: rails_app_user
  password: <%= ENV['RAILS_APP_DATABASE_PASSWORD'] %>
```

By putting most of our rules in our `default` definition, we can simply define the two separate ports for the Postgres instances running in Docker containers, and we are good to start writing our application. Any other developer could clone your application, install dependencies, and start the docker containers and be in a near identical state, ready to work offline. This kind of consistency makes Docker very powerful for development teams, and the convenience of just setting up a config file and running a single command has proven to be a very pleasant experience for me as a developer. I use a setup similar to this one whether I'm using Node and MySQL, Rails and Postgres, Redis, or any other combination of services. Check out [Docker Hub](https://hub.docker.com/explore/) for a massive list of free, official Docker images for all your favorite services.