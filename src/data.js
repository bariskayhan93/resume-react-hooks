import React from "react";
import {  FaCodepen, FaLinkedin, FaTwitter,FaGithub } from "react-icons/fa";
export const social = [

  {
    id: 2,
    url: "https://www.twitter.com/bariskayhan1",
    icon: <FaTwitter />,
  },
  {
    id: 1,
    url: "https://codepen.io/bariskayhan93",
    icon: <FaCodepen />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/baris-kayhan/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://github.com/bariskayhan93",
    icon: <FaGithub />,
  }
];

const people = [
  {
    id: 0,
    image:
      "https://user-images.githubusercontent.com/83955254/144126342-c3c179f3-9b22-4971-8de1-53177f04ef78.png",
    name: "Bird Tracking App",
    title: "MERN Project",
    quote: `By logging in as a user, you can pin on the map the bird photos you 
    have taken, and you can also see the photos pinned by other users.
     -React-Hooks, Node JS, Express JS, Mongo DB, HEROKU`,
    source: "https://github.com/bariskayhan93/bird-tracking-app",
    deploy: "https://bird-tracking.herokuapp.com",
  },
  {
    id: 1,
    image: "https://i.stack.imgur.com/emvz0.png",
    name: "Question-Answer Api",
    title: "node js, express js project",
    quote:
      "It's a restful api with async await structure on Node JS. Used Express.js and mongoose. Includes CRUID Operations with authorization using JWT and admin/user parameters. Includes Image Upload proccess also.",
    source: "https://github.com/bariskayhan93/Question-Answer-API",
    deploy: "https://baris-kayhan-portfolio.netlify.app",
  },
  {
    id: 2,
    image: "https://user-images.githubusercontent.com/83955254/143498459-cbbf19d3-84b0-48be-b578-2c387f325b9c.png",
    name: "Cocktails Menu App",
    title: "react-hooks project",
    quote:
      "Utilizes a third party API to retrieve Cocktails. Can select a specific Cocktail to view detailed information.",
    source: "https://github.com/bariskayhan93/fetch-data-react-hooks",
    deploy: "https://cocktail-react-hooks.netlify.app",
  },
  {
    id: 3,
    image: "https://user-images.githubusercontent.com/83955254/143496713-8215d5f4-2010-4ab2-a396-d9b925fe7964.png",
    name: "Personal Portfolio",
    title: "react-hooks project",
    quote:
      "Portfolio using React JS to display my projects, skills, and previous work experience for front end development. Ability to directly contact via email and access to download my latest resume.",
    source: "https://github.com/bariskayhan93/resume-react-hooks",
    deploy: "https://baris-kayhan-portfolio.netlify.app",
  },
  {
    id: 4,
    image:
      "https://user-images.githubusercontent.com/83955254/143462421-85816fb3-5946-4001-a390-7c0089c395ac.png",
    name: "Northwind Shopping App",
    title: "react-redux project",
    quote: `A Shopping Application using React JS and Redux-Thunk that allow the user to select products, add them to the cart, and then remove them. It is possible to add new products to database through the application.`,
    source: "https://github.com/bariskayhan93/Northwind-Redux",
    deploy: "https://shopping-redux.netlify.app",
  },
];

export default people;
