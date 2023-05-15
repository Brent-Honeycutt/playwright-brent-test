Playwright and React Showcase
=============================

Thank you for checking out my Playwright and React Showcase repository! This project is meant to demonstrate my competency in setting up a React site (written primarily by ChatGPT) with Playwright (NOT written primarily with ChatGPT) and running it in Continuous Integration (CI).

Getting Started
---------------

To get started with this project, please follow the steps below:

1.  Clone the repository to your local machine:

`git clone https://github.com/Brent-Honeycutt/playwright-react-showcase.git`


2.  Navigate into the project directory:

`cd playwright-react-showcase`


3.  Install the necessary dependencies:

`npm install`


4.  Run the development server:

`npm start`


5.  Open your web browser and navigate to [http://localhost:3000](http://localhost:3000/) to view the site.


Running Tests
-------------

This project includes automated tests written with Playwright to ensure that the site is functioning as expected. To run these tests locally, please follow the steps below:

1.  Ensure that the development server is running.

2.  Open a new terminal window and navigate to the project directory.

3.  Run the tests:

`npm test`

This command will launch the Playwright test runner and run all of the tests in the `tests/` directory.


Continuous Integration
----------------------

This project is set up to run in Continuous Integration using GitHub Actions. Whenever changes are pushed to the `main` branch, the CI pipeline will automatically stand up the site and run the tests to ensure that the site is functioning as expected.
