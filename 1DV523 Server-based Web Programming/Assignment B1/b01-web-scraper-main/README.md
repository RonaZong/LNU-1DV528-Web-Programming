# B1 Web Scraper

## Description

This project is a web scraper that automates the workflow of finding a common free day for three friends, checking available movies, and booking a table at their favorite restaurant.

## Installation

```sh
npm install

npm start https://courselab.lnu.se/scraper-site-1
```

## Describe the architecture of your application. How have you structured your code with modules and what are your thoughts behind the architecture?

Modules:
linksScraper.mjs: Handles scraping links from the starting URL.
availableDaysScraper.mjs: Extracts the common available days from the calendar links.
showTimesScraper.mjs: Scrapes movie showtimes based on the common available days.
reservationsScraper.mjs: Finds possible dinner reservations for the common available days.
recommendations.mjs: Combines the scraped data to generate recommendations.

Main Script:
index.mjs: Orchestrates the entire scraping process by calling the above modules in sequence. It uses asynchronous functions to handle the scraping tasks and ensures proper error handling and user feedback.

Thoughts Behind the Architecture:
Separation of Concerns: Each module has a single responsibility, making the code easier to maintain and test.
Reusability: The modular approach allows individual components to be reused or replaced without affecting the rest of the application.
Asynchronous Programming: Since web scraping involves network requests, the use of async/await ensures non-blocking operations and better performance.

## What Node concepts are essential to learn as a new programmer, when diving into Node? What would your recommendations be to a new wanna-be-Node-programmer?

Modules: Learn how to use import/export (ES Modules) or require/module.exports (CommonJS) to structure your code.

Asynchronous Programming: Understand Promises, async/await, and how to handle asynchronous operations effectively.

File System (fs): Learn how to read and write files using Node's fs module.

Process Object: Understand process.argv for handling command-line arguments and process.exit() for terminating the application.

npm: Learn how to manage dependencies and scripts using npm.
Error Handling: Understand how to handle errors gracefully, especially in asynchronous code.

## Are you satisfied with your application? Does it have some improvement areas? What are you especially satisfied with?

Satisfaction:
The modular structure makes the application clean and easy to understand.
The use of async/await ensures smooth handling of asynchronous tasks.
The application provides meaningful feedback to the user at each step.

Improvement Areas:
Error Handling: Add more robust error handling for network failures or invalid data.
Testing: Implement unit tests for each module to ensure reliability.
Configuration: Use a configuration file or environment variables for parameters like user credentials (zeke, coys).

## Ensure that the README.md contains any essential details for grading, installing, starting, configuring your submission.
   
## What is your TIL for this course part?

I learned how to effectively use Node.js and ESM modules to build a web scraper that automates a complex workflow.
I learned how to handle session cookies and analyze HTTP traffic to scrape dynamic content.
I learned how to handle real-world scenarios like combining data from multiple sources to generate meaningful results.