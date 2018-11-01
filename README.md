# Introduction

**Amenities View Assembly Service**

This project was generated with Java Spring Boot

Table of Contents:

- [Introduction](#introduction)
- [Supported Libraries](#supported-libraries)
- [Install Maven](#install-maven)
- [Download Redis](#download-redis)
- [How to start the project](#how-to-start-the-project)
- [Health Check and Swagger](#health-check-and-swagger)
- [Further Help](#further-help)

## Supported Libraries

|   Maven  |  Java version  | Redis |
|----------|--------|--------|
| 3.3.3   | 8 | 2.8.17 |


## Install Maven

### Steps

1.Download and paste the maven 3.3.3 from here.

2.Unzip it, on a known place for example c:\dev\

3.Set the windows environment variable path for apache maven (in windows 10 is very 
simple, just enter environment on the start menu and search environment as shown on the next link):

[Install Maven in Windows](https://docs.google.com/document/d/1wCpLwV6_6ypIVP0is2JclZqHuhpqJZRbbtm4EEeW5WE/)

## Download Redis

Download redis 2.8.17 from here, unzip it and run redis-server.exe.

## [How to start the project]

The following commands and tasks are available for use during development:

### On cloned repository folder

```bash
mvn clean install
```

### To run the project you need to execute the following command

```bash 
mvn spring-boot:run
```

### For different ports for each project you should run it
```bash 
 mvn spring-boot:run -Dserver.port={port}
```

## Health Check and Swagger

In order to check if the project is correctly running, you can hit the next healthcheck endpoint
[Health check](http://localhost:8090/dcl-amenities-vas/healthcheck)

To see which endpoints have the project and how you could hit them. You can review this information here
[Swagger-UI](http://localhost:8090/dcl-amenities-vas/swagger-ui.html#/)

`Note: If you are running the project in a different port (8090) you must specify the port in previous links`

## Further help

- Slack `#studio-calypso` channel

- [Wiki](https://wiki.wdpro.wdig.com/pages/viewpage.action?pageId=137112339)



