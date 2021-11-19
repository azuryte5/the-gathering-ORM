# the-gathering-ORM
13. Object-Relational Mapping (ORM) Challenge: E-commerce Back End
# Table of Contents
1. [Links](#links)
1. [Usage](#usage)
1. [Tech used](#tech-used)
1. [Assignment Details](#assignment-details)
    1. [User Story](#user-story)
    1. [Acceptance Criteria](#acceptance-criteria)
1. [Credits](#credits)

## Links
The URL of the GitHub repository: https://github.com/azuryte5/the-gathering-ORM

The link to the Screencastify video: https://watch.screencastify.com/v/Zlhyf3RflR9giD1Gaiom

-----
## Usage
This is a back end application for storing inventory for an e-commerce  site. Using express, API routes are fetched and  processed through Sequelize to interact with a MySQL database. Use Insomnia to track various changes to the database as this application does not have a front end.

Begin by launching mysql and running ```SOURCE db/schema.sql``` then freely ``` quit ``` mysql
then in node.js run ```npm run seed``` to fill database with predetermined data.

To start app run:  ```npm start```

For examples to interact with database checkout the Screencastify video and follow along with Insomnia 

![Insomnia interface](https://user-images.githubusercontent.com/85147307/142677794-82fe037c-b15a-492d-b800-49d8a5ebfdd5.png) 
![VS code Routes & Model](https://user-images.githubusercontent.com/85147307/142677911-63ce71ee-085b-4561-b8b3-8f1eeefbce4d.png)
 
-----
## Tech Used 

- Node js
- sequelize
- mysql2
- dotenv
- Insomnia

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
[✔️]THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
[✔️]THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
[✔️]THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
[✔️]THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
[✔️]THEN I am able to successfully create, update, and delete data in my database
```

----
## Credits
Made by Andrew Lefebvre 🔧🤲🏗️🛑🤏

-----
