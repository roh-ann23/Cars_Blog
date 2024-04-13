# Car Enthusiast Hub : Rohan's Ride Realm

### The Node Car Showroom application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to categories of cars, individual car designs, and user contacts. It provides endpoints to perform CRUD operations for categories, cars, and user contacts.

## Overview

Car Enthusiast Hub is a comprehensive web platform dedicated to providing users with detailed information about various car models, brands, and specifications. Built using Node.js, Express, MongoDB, and EJS, this dynamic website offers a seamless browsing experience for car enthusiasts of all levels.

## Features

- **Extensive Database:** Utilizing MongoDB, the website boasts a vast collection of car models, including details such as year, price, engine type, and available colors.

- **Intuitive Interface:** The user-friendly interface allows visitors to easily navigate through different categories of car brands and explore the models they're interested in.

- **Dynamic Content:** With EJS templating, the website delivers dynamic content, ensuring that users receive up-to-date information on the latest car models and trends.

- **Responsive Design:** Car Enthusiast Hub is designed to be responsive across various devices, providing a seamless experience whether users are browsing on desktop, tablet, or mobile.

- **Search Functionality:** Users can quickly find specific car models or brands using the search functionality, enhancing the overall user experience.

## Technologies Used

- **Node.js:** Backend JavaScript runtime environment.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing car information.
- **EJS:** Templating engine for generating HTML markup with JavaScript.


## Endpoints

### Categories

#### Add a Category:

- **Endpoint:** `POST /category`
- **Description:** Adds a new category to the system with details such as name, image, etc.

#### Get All Categories:

- **Endpoint:** `GET /category`
- **Description:** Retrieves a list of all categories in the system.

#### Get Cars by Category:

- **Endpoint:** `GET /category/:id`
- **Description:** Retrieves a list of cars belonging to a specific category identified by its ID.



### Cars

#### Add a Car:

- **Endpoint:** `POST /car`
- **Description:** Adds a new car design to the system with details such as name, description, image, etc.

#### Get All Cars:

- **Endpoint:** `GET /car`
- **Description:** Retrieves a list of all car designs in the system.

#### Get Car by ID:

- **Endpoint:** `GET /car/:id`
- **Description:** Retrieves details of a specific car design identified by its ID.


### Contacts

#### Add a Contact:

- **Endpoint:** `POST /contact`
- **Description:** Adds a new contact submission to the system with details such as name, email, mobile, message, etc.

#### Get All Contacts:

- **Endpoint:** `GET /contact`
- **Description:** Retrieves a list of all contact submissions in the system.


## Data Models

### Category

The Category data model represents information about different categories of cars.

#### Fields:

- **name:** String (Category name)
- **image:** String (URL/path to category image)

#### Example:

```json
{
  "name": "Audi",
  "image": "/images/suv.jpg"
}
```


### Car

The Car data model represents information about individual car designs.

#### Fields:

- `name`: String (Car name)
- `description`: String (Description of the car design)
- `email`: String (Email address for inquiries)
- `functionality`: Array (Features and functionalities of the car)
- `category`: String (Category of the car, e.g., Audi, Mercedes, etc.)
- `image`: String (URL/path to car image)

#### Example:

```json
{
  "name": "Audi A6",
  "description": "The Audi A6 sets the standard for luxury sedans with its advanced technology, dynamic performance, and sophisticated design.
   Details:
      * Year: 2024
      * Mileage: 23 MPG 
      * Seats: 5 
      * Fuel Type: Electric 
      * Engine Type: 3.0L V6 turbocharged  
      * Price: $55,000  
      * Available Colors: Black, White, Silver",
  "email": "support@audia6.com",
  "functionality": [
    "Advanced Navigation System",
    "Powerful Engine Options",
    "Luxurious Comfort",
    "Top-tier Safety Features",
    "Safety precautions include integrated roll cage, advanced driver assistance systems (ADAS), and adaptive suspension.\n"
  ],
  "category": "Audi",
  "image": "Audi-A6.jpg"
}
```

### Contact

The Contact data model represents information about user contact submissions.

#### Fields:

- `name`: String (User's name)
- `email`: String (User's email address)
- `mobile`: String (User's mobile number)
- `message`: String (User's message)
- `createdAt`: Date (Timestamp of when the contact was submitted)

#### Example:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "123-456-7890",
  "message": "I'm interested in learning more about your car designs."
}
```

### Installation

```bash
#### Clone the repository
git clone <repository-url>

##### Install dependencies
npm install

#### Set up environment variables
#### Create a .env file in the root directory
#### Add the following environment variables:
makefile
MONGO_URL=your-mongodb-uri
SESSION_SECRET=your-session-secret

#### Start the server
npm start
```

### Usage

- Use the provided endpoints to manage categories, cars, and contact submissions.
- Make HTTP requests to the respective endpoints using tools like Postman or integrate them into your front-end application.

