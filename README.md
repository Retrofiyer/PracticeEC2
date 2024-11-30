# Hello World on Javascript with EC2

## About The Project

This project demonstrates the deployment of a simple Node.js application using Docker and CI/CD pipelines.

## Table of Contents

<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-project">Running the service</a></li>
        <li><a href="#running-with-docker">Running with docker</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
</ol>

## Overview

The Hello World CI/CD project combines the simplicity of a "Hello World" application with a robust DevOps pipeline. It uses Docker to containerize the application and GitHub Actions to automate the Continuous Integration (CI) and Continuous Deployment (CD) processes.

## Features

<div>
  <ul>
      <li> <b>Automated CI/CD:</b>  A complete pipeline built with GitHub Actions to automate the testing, building, and deployment of the application.</li>
      <li> <b>EC2 Deployment:</b> The application is deployed to an EC2 instance for reliable cloud hosting.</li>
      <li> <b>Fast and Lightweight:</b> A minimal Node.js app ensures quick startup and low resource usage.</li>
  </ul>
</div>

## Built With

[![Node.js][nodejs.com]][nodejs-url]
[![Docker][docker.com]][docker-url]

## Getting Started

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js 18.20.4 or higher** - [Download Node](https://nodejs.org/en/download/package-manager)
- **Docker (optional)** - [Install Docker](https://www.docker.com/get-started/)

## Installation

1.- Clone the repository:
   ```sh
   git clone https://github.com/Retrofiyer/PracticeEC2.git
   cd PracticeEC2
   ```

2.- Build project using node.js
 ```sh
   npm install
   ```
## Running the project

  ```sh
    npm start
   ```

Open any browser and type

 ```sh
   localhost:8080
   ```

## Running with docker

1. Making Docker Pull or Build docker image

 ```sh
   docker pull retroandre/appnode-pipeline:latest
   ```
```sh
   docker build -t <any-name> .
   ```
2. Last make a docker run

 ```sh
   docker run -p 8080:8080 retroandre/appnode-pipeline:latest # or any-name
   ```
3. Open any browser and type

 ```sh
   localhost:8080
   ```

## Contributing

I would like you to contribute to this project. Whether it's fixing a bug, adding a new feature or improving the documentation, your help is always welcome. Please email me at `sebitas5225@gmail.com` with all the details for improvement.

<!-- LINKS & IMAGES -->

[docker.com]: https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[nodejs.com]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/