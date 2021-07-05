# Password Generator

> Outline a brief description of your project.
> Live demo [_here_](https://kabaothao.github.io/Password-Generator/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- This project is designed to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected..
- What is the purpose of your project?
  The purpose of this project is to create strong passwords within a web application.
- Why did you undertake it?
  To ensure this project will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

- HTML5
- CSS
- Javascript
- Visual Studio

## Features

List the ready features here:

- Provided with starter code

## Screenshots

![Example screenshot](./Assets/03-javascript-homework-demo.png)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

- The URL of the deployed application.
- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Usage

How does one go about using it?

- To allow user interface to select a password between eight characters and no more than 128 characters.

For example:

let generatePassword = function () {
let passwordLength = prompt(
"Input 8 characters and no more than 128 characters",
"8"
);

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
alert("Input is invalid. Start over.");
return "";
}

## Acknowledgements

- This project was inspired by Trilogy Education.
- Many thanks to Trilogy Education.

## Contact

Created by [@kabaothao](https://github.com/kabaothao) - feel free to contact me!
