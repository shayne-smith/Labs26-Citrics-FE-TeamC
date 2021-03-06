# Driftly - let's find your next home!

Application deployed at [https://c.citrics.dev/](https://c.citrics.dev/)

## Contributors

|                                                       [Shayne Smith](https://github.com/shayne-smith)                                                        |                                                      [Guillermo Alfaro](https://github.com/galfarotolon)                                                       |                                                       [Nathan Nguyen](https://github.com/NathanNNguyen)                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RTM51V-bf749dc3288f-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RTV5QX-3ba8de22b37c-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012QNUUE6Q-79b5f4d3d5d8-512" width = "200" />](https://github.com/) |
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/shayne-smith)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/galfarotolon)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NathanNNguyen)                           |
|                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/shayne-smith1)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/guillermo-alfaro)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nathannnguyen)                 |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Project Overview

[Product Roadmap](https://www.notion.so/Citrics-Roadmap-98a5614b708745ccae4ca55960ea8e1b)

[UX Design Files](https://www.figma.com/file/SuHUelhKGOOHyHmfgcXPrG/Identity?node-id=0%3A1)

Citrics is a city comparison tool that analyzes data from all over the internet such as poulation, weather, jobs, and COVID-19 data, and allows users to compare cities and find their next home based on user preferences. 

### Basic SPA

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)

## Tech Stack

### Front end built using:

- React
- React Bootstrap
- Plotly JavaScript Graphing Library
- Axios
- Prettier
- Jest
- ESLint
- AWS Amplify
- Styled Components
- Ant Designs
- Okta Authentication
- Google Fonts
- Context API
  - The application's state management uses Context API.

### Key Features

- See a list of approximately 700 cities' statistics about weather, job market, housing, covid cases and more
- Allow user to choose any three cities to compare data
- Provide data visualizations for each city
- Search for city by name
- Search based on user's reference

#### [Back end](http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/#/default) built using FastAPI

Please go through this [Docs](https://github.com/Lambda-School-Labs/Labs26-Citrics-DS-TeamC) for more information about backend.

# Installation Instructions
- Clone this repo by `git clone https://github.com/Lambda-School-Labs/Labs26-Citrics-FE-TeamC`

- Installing the dependencies `npm i`

- Start the app `npm start`

> When using Okta for authentication, the app will need to run locally on port 3000.

## Style Guidelines

### Color Scheme

- Action color: #70C783
  - Used throughout the site to identify elements that we want the user to notice. This includes our login button, data, and menus.

### Font
- Title
  - font-family: "Amatic SC", sans-serif;

- Main Text
  - font-family: "Oswald", sans-serif;

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/#/default) for details on the backend of our project.
