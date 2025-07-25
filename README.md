# Maalima
## App overview

This Project is a React application built to strongly emphasis on functional components and react features. This project mainly focuses on frontend best practices, design and implementation, and frontend testing performed with frontend testing tools like JEST or Cypress. The application integrates with the REST Countries API to fetch up-to-date data on countries, including their name, flag, capital, region, population, and languages, many more.

Users can:
•	Explore countries and a region and language filters.
•	View detailed information about each country.
•	Add countries to their personal favorites list, which is stored locally using the browser's local storage
•	User session storage using local storage
•	Navigate easily across the platform using an intuitive and responsive design.

This application works as a practical demonstration of working with external APIs, managing application state, and implementing user-friendly features like favorites and pagination in a modern frontend framework.


## Setup & run instructions

### ✅ Prerequisites

- Node.js (v18 or later)
- npm (Node package Manager)

1. Clone the repository from the github - git clone https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-pamali-sapunika
2. Move in to the folder directory - cd af-2-pamali-sapunika
3. Run 'npm install'
4. Run 'npm run dev'
5. App will be running at http://localhost:5173.

## Deployment URL 

Hosted App: https://maalima.netlify.app/

## Technologies and Frameworks used

Frontend framework – React
CSS Framework – Chakra UI

Chakra UI was selected as the CSS Framework to enhance user experience, because instead of media queries, chakra UI comes with inbuilt functions that can easily handle Responsiveness. That is the major reason to select infamous framework Chakra UI for this small frontend only application

## API usage
For this project, to fetch and handle data REST Countries API was used and out of all given APIs, APIs used for this specific project in as follows;

    Get All Countries 	https://restcountries.com/v3.1/all

    Search by country name	https://restcountries.com/v3.1/name/{name}

    Search by cca2, ccn3, cca3 or cioc country code	https://restcountries.com/v3.1/alpha/{code}

    Search by language code	https://restcountries.com/v3.1/lang/{language}

    Search by region	https://restcountries.com/v3.1/region/{region} 


## Screenshots

<img width="1728" alt="Screenshot 2025-05-04 at 18 11 23" src="https://github.com/user-attachments/assets/c7a543d9-c1ca-4761-bca9-d98fdef8a325" />
<img width="1728" alt="Screenshot 2025-05-04 at 18 12 17" src="https://github.com/user-attachments/assets/24e43133-f6e3-4208-89a6-f82fa3d26b1b" />


User Login using local storage
<img width="1728" alt="Screenshot 2025-05-04 at 18 12 45" src="https://github.com/user-attachments/assets/7e9dd297-1e0f-4631-a0c8-ef5cf659039f" />
<img width="1728" alt="Screenshot 2025-05-04 at 18 13 28" src="https://github.com/user-attachments/assets/85741d9f-7956-4a93-951d-8a89db0c0e97" />


Color Modes
<img width="1728" alt="Screenshot 2025-05-04 at 18 13 51" src="https://github.com/user-attachments/assets/1a9522ed-a0ad-4930-aeee-f722e8c3d693" />

## Testing Using Cypress
To test the application and it's functionalities, cypress was used to test functionalities including login as well. Cypress test scripts are not included in the git repository

## Challenges faced

Few challenges were encountered and below is a summary of the key issues faced and how they were addressed. Handling those challenges ensured a smooth user experience across various states of the application.

### Challenge #1 - Handling user session in local storage
When implementing user session data, there were some issue rendering the username for the UI. And an issue encountered when trying to create a mock API to create a token. 

### Challenge #2 - Handling User's Favorite Countries
There were issues when getting the favorites list on the UI and since this array is not like other usual arrays, some more implementation was included. And first although the array showed how many favorites were there, it failed to show the details of each country. This was fixed by defining a new array. 

### Challenge #3 - Pagination for Large Datasets
Since the dataset is very large, the application was in a definite need of pagination for all pages. There were some issues encountered when trying to implement . . . – 3 dots in the middle of pagination bar. 
