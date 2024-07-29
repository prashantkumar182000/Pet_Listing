# Pet Listing Website

## Introduction
This project is a Pet Listing website built using React.js. It incorporates error handling and state management while following best coding practices, including the use of ESLint and Webpack/Vite for code quality and project bundling.

Website walkthrough video: [Click Here](https://drive.google.com/file/d/1MNuDgZ5qxaSicDYoIjDcQ3Fulotf2RpB/view?usp=drive_link)

## Table of Contents
- [Introduction](#introduction)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [APIs](#apis)
- [Implementation Tasks](#implementation-tasks)
- [Best Coding Practices](#best-coding-practices)
- [Bonus Tasks](#bonus-tasks)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

### Prerequisites
- Node.js and npm installed
- Git installed
- GitHub account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pet-listing-website.git
   


2. Navigate to the project directory:
   ```bash

   cd pet-listing-website
   
3. Install the dependencies:
   ```bash

   npm install

## Running the Project


4. In the project directory, you can run:
   ```bash

   npm start
  
### Project Structure
The project is organized into meaningful directories for better maintainability:

pet-listing-website/
├── public/
├── src/
│   ├── components/
│   │   ├── PetList.jsx
│   │   ├── PetDetails.jsx
│   │   ├── SearchForm.jsx
│   │   └── ErrorBoundary.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── PetDetailsPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   ├── apiUtils.js
│   │   └── errorUtils.js
│   ├── App.js
│   ├── index.js
│   └── .env
├── .eslintrc.js
├── .prettierrc
├── package.json
├── README.md
└── webpack.config.js (or vite.config.js)


## APIs

1. List of Pets:
URL: [http://pets-v2.dev-apis.com/pets
](http://pets-v2.dev-apis.com/pets
) to fetch a list of pets.

2. Pets by ID:
URL: [http://pets-v2.dev-apis.com/pets?id=${id}](http://pets-v2.dev-apis.com/pets?id=${id}) to fetch a pet's details by its ID.

3. Breed by Animal Type:
URL: [http://pets-v2.dev-apis.com/breeds?animal=${animal}
](http://pets-v2.dev-apis.com/breeds?animal=${animal}
) to fetch breeds for a specific animal type.

4. Search API:
URL: [http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
](http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
) to search for pets based on animal type, location, and breed.


### Implementation Tasks

1. ## Setting Up State Management:

Use React's useState, useContext, useEffect, etc. for managing component state.
Implement context or a state management library like Redux for global state management if needed.

2. ## Creating Components:

PetList: Displays a list of pets.
PetDetails: Displays details of a selected pet.
SearchForm: Allows users to search for pets based on animal type, location, and breed.
ErrorBoundary: Catches and displays errors gracefully.

3. ## Fetching Data:

Create a service layer for making API calls.
Use axios or fetch for HTTP requests.
Implement error handling for API calls.

4. ## Routing:

Use React Router for navigation between pages (e.g., home, pet details).

5. ## Error Handling:

Display user-friendly error messages for failed API requests.
Implement a fallback UI using an ErrorBoundary component.

6. ## State Handling:

Ensure proper loading states using conditional rendering (e.g., spinners).
Handle empty states gracefully (e.g., display a message when no pets are found).
