#
 # Build stage
 #

FROM maven:3.6.0-jdk-11-slim AS build
COPY ./src /usr/src/app/src
COPY ./pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

 #
 # Package stage
 #

 # Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

 # Add a volume pointing to /tmp (we created a mount point with path
	# /tmp because this is where the spring boot application
	# creates working directories for Tomcat by default
VOLUME /tmp

 # Make port available to the world outside this container
EXPOSE 8443

 # The application's jar file. JAR_FILE defines a variable with a
	#default value
ARG JAR_FILE=./target/practica_fase4-0.1.0.jar

 # Add the application's jar to the container
ADD target/project-docker.jar project-docker.jar

 # Run the jar file
ENTRYPOINT ["java","-jar","/project-docker.jar"]