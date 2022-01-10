# EventTrackerProject


## Overview
This project will serve as a RESTful API allowing interactions with RESTful web services.
The project will be built over 3 weekends as an Event Tracker to record the workouts of a user. The first step was building a database using MySQL and creating RESTful endpoints with Spring Data JPA to manipulate the database entity. This provides the connection we need for the user. The front-end will be worked on in the coming weeks.


### REST API
Go to http://3.131.19.110:8080/FitnessForever/api/users

### HTML/JavaScript Front End
Go to http://3.131.19.110:8080/FitnessForever/index.html

### Angular Front End

## How to Run
Use the following RESTful endpoints to pull data from the MySQL Database.

## REST API Reference
|Return Type      | HTTP Method | URI             | Request Body |  Purpose   |
|-----------------|-------------|-----------------|--------------|------------|
| List\<Workout\> | GET         | /api/users      |              |  List      |
| Workout         | GET         | /api/users/{id} |              |  Retrieve  |
| Workout         | POST        | /api/users      |  User JSON   |  Create    |
| Workout         | PUT         | /api/users      |  User JSON   |  Update    |
| Workout         | DELETE      | /api/users/{id} |              |  Delete    |
## Technologies Used
Spring DATA JPA, Gradle, MySQL Workbench, Java, Postman, JSON, TOMCAT, GIT and GitHub
## Lessons Learned
This was my first dive into RESTful services. I learned how to implement full CRUD with Spring Data JPA. This means I can access entities within the relational database, retrieve the data, add data, update data and delete data. I also learned how to use JSON to push data between endpoints with Postman.

### Relational DB Table
<p>
<img src="tables.jpg" alt="DB Table" align="center"/>
</p>
