# E-Commerce Back End
## Table of Contents
[Description](#description)
[User Story](#user-story)
[Acceptance Criteria](#acceptance-criteria)
[Mock-Up](#mock-up)
[Getting Started](#getting-started)
[Database Models](#database-models)
[Associations](#associations)
[API Routes](#api-routes)
[Seed Data](#seed-data)
[Syncing Models](#syncing-models)
[Video Walkthrough](#video-walkthrough)
[License](#license)
## Description
Welcome to the E-Commerce Back End project! In this application, we have built a robust back end for an e-commerce website using the latest technologies. This project showcases the fundamental architecture required for an e-commerce platform, enabling businesses to compete effectively in the online retail industry.
## User Story
As a manager at an internet retail company, I wanted a powerful back end solution for my e-commerce website. With this application, my company can now compete confidently with other e-commerce giants, providing seamless services to our customers.
## Acceptance Criteria
This project fulfills the following acceptance criteria:

Connects to a MySQL database using the MySQL2 and Sequelize packages.
Secures sensitive data like MySQL username, password, and database name using environment variables through the dotenv package.
Syncs Sequelize models to a MySQL database on server start.
Includes proper column definitions and model associations as per the Challenge instructions.
Provides a unique repository name, adhering to best practices for file structure, naming conventions, and code quality.
Features multiple descriptive commit messages for better understanding of development progress.
Offers a comprehensive readme file containing project description, video walkthrough, and grading criteria.
## Mock-Up
View the following animations to see the application's functionality in action:

Animation 1: GET routes for categories, products, and tags being tested in Insomnia.
Animation 2: GET routes for a single category, a single product, and a single tag being tested in Insomnia.
Animation 3: POST, PUT, and DELETE routes for categories,products, tags being tested in Insomnia.
[Click here to see the animations](https://drive.google.com/file/d/1MClGTJM9JyF1B3gF3RT5fMy0vDdUA2W7/view)

## Getting Started
To set up the project, follow these steps:

Install the required npm packages using `npm install`.
Create your database using the `schema.sql` file in the `db` folder.
Set up environment variables for sensitive data in the `.env` file.
Run the application using `npm start`.
## Database Models
The application includes the following four models, each adhering to specific requirements:

`Category`: Represents product categories.
`Product`: Represents products available for sale.
`Tag`: Represents tags associated with products.
`ProductTag`: Represents the relationship between products and tags.
## Associations
The Sequelize models have the following associations:

`Product` belongs to `Category`, and `Category` has many `Product` models.
`Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models.
## API Routes
The application features RESTful CRUD operations with the following API routes:

`GET` routes for all categories, products, and tags.
`GET` routes for a single category, a single product, and a single tag.
`POST`, `PUT`, and `DELETE` routes for categories, products, and tags.
## Seed Data
Seed your database with initial data by running `npm run seed`. This will provide test data for testing your routes.
## Syncing Models
Sequelize models are automatically synced to the MySQL database on server start. This ensures your database is up to date with the latest changes.
## Video Walkthrough
For a detailed demonstration of the application's functionality, please watch the [Walkthrough Video](#) which showcases the creation of the schema, seeding the database, starting the server, testing API routes, and fulfilling all the acceptance criteria.

## License
This project is licensed under the terms of the [MIT License](LICENSE).
---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.