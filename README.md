
# Bolt Bookkeeping

Have you ever wanted to return an item that you've purchased, but couldn't find the receipt? Now, imagine that you've got _hundreds_ of items to return. How will you keep track of your purchases?

**Description**

This application is built for costume designers working in the theatre business and it allows them to keep track of all the purchases that they have made for each production they work on.
It uses React.js as a frontend framework for its ease of DOM manipulation, abstractable component-based architecture, and scalability.
It also relies on MySQL for a relational database structure which allows each 'purchase' entered by the user to be tied to a specific production.


**Future Features**

Future iterations of this project will include...
- Login authentication and authorization for multiple users to store purchasing data
- Search bar filteable by vender, payment type, and date of purchase for purchases table
- A receipt parser that can read information and automatically populate the 'add purchase' form
  - https://www.edenai.co/feature/ocr-receipt-parsing-apis?referral=top-free-receipt-parser-apis-and-open-source-models
  - https://github.com/ReceiptManager/receipt-parser-legacy
  - https://github.com/bhimrazy/receipt-ocr
- Reformatted dates in purchase table
- Ability to generate template for adhesive labels from purchase table
  
## Frontend Design

<img width="984" alt="Screenshot 2024-09-17 at 9 26 56 AM" src="https://github.com/user-attachments/assets/54b6bb28-fd2d-49a4-98bd-4b9557775dc7">


## Used Technologies

Back-end: MySQL, Node, Express

Front-end: React, CSS/HTML, Bootstrap

## Prerequisites

* Node.js
* npm
* MySQL

## Dependencies

* Run `npm install` in the project folder to install dependencies related to Express (the server).
* `cd client` and run `npm install` to install dependencies related to React (the client).

## Database Setup

* Create the database in MySQL: 
	`CREATE DATABASE collab_project;`
* Use the provided _new_db.sql_ file to import the initial database 
* Ensure the tables have been correctly created by running the following in MySQL:
	```USE collab_project;
	SHOW TABLES;
	DESCRIBE productions;
	DESCRIBE purchases;

* Create the .env file to match your personal credentials

## Running the App in the Terminal

**Back-end**

`cd projectfolder`

`npm start`

Postman: http://localhost:4000/

**Front-end**

`cd projectfolder/client`

`npm run dev`

Browser: http://localhost:5173/

*_Replace “projectfolder” with whatever you’ve locally named the project folder_





