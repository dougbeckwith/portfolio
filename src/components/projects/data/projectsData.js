import img1 from "../images/phraseHunter.png";
import img2 from "../images/haloMMR.png";
import img3 from "../images/cryptoTracker.png";
import img4 from "../images/golfStats.png";

const projectData = [
  {
    id: 1,
    image: img1,
    name: "Phrase Hunter",
    description: `This web app is a phrase guessing game. A player continues to select letters until 
      they guess the phrase (and win), or make five incorrect guesses (and lose).`,
    demo: true,
    demoLink: "https://dougbeckwith.github.io/",
    github: true,
    githubLink: "https://github.com/dougbeckwith/techdegree-project-4",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
    problemsSolutions: `My biggest problem in this project was having a good understanding of classes. I was using arrow functions in my game class, which was giving me unexpected results. After some reading on MDN, I learned that the keyword (this) in the arrow function was not referring to the game object. I was able to change the arrow functions into a regular function to access the class object.`,
    lessonsLearned: `In this project I learned a good understanding of classes in JavaScript. I now understand how to create classes with methods and variables. I learned the keyword (this) and how to access methods and variables from classes. I learned to use modules to separate my game logic, along with the need to have descriptive variables, function names and how to leave good comments for other developers and myself.`
  },

  {
    id: 2,
    image: img2,
    name: "Halo MMR",
    description: `This app was built to help anyone visualize their match making rating and competitive skill rating data in Halo Infinite. 
    It helps solve the problem of understanding your ratings as the ranking system does not give players good feedback. When the website was live it got around 1000 unique users per day and over 10,000 page loads a day.
    Although the game has become inactive and we no longer play it, we have taken it down. However, the GitHub repository is still accessible.
    `,
    demo: false,
    demoLink: "https://halommr.com",
    github: true,
    githubLink: "https://github.com/dougbeckwith/mmr-halo-public",
    technologies: ["React", "JavaScript", "Tailwind", "Git"],
    problemsSolutions: `I had issues with promises and async JavaScript. Specifically, with making a second API using the data returned from the first API call. I was able to fix this by using promises and chaining the .then() method after the first API call. My other problem was the match data returned was always in a random order. I had to learn how to sort the data by using the new Date object and the .sort() method in JavaScript.`,
    lessonsLearned: `This project gave me a great understanding of built-in methods in JavaScript for iterating through Objects and Arrays and working with async JavaScript. I learned how React useState works and how to pass data through props and create reusable components. I was able to use GitHub to work with other developers.`
  },

  {
    id: 3,
    image: img3,
    name: "Crypto Tracker",
    description: `This web app fetches the top 100 cryptocurrency data from an API. 
    It uses the returned data to display information about each cryptocurrency. You can filter cryptocurrencies,
    view charts, and make a watchlist.`,
    demo: true,
    demoLink: "https://profound-lolly-382242.netlify.app",
    github: true,
    githubLink: "https://github.com/dougbeckwith/crypto-search",
    technologies: ["React", "JavaScript", "Tailwind", "Git"],
    problemsSolutions: `While working on the watchlist feature of the app my watchlist was getting erased anytime I refreshed the webpage. I was able to learn about local storage and store an array of cryptos to repopulate the DOM on refresh. I also felt my code was getting harder to read with chaining .then() methods. So, I learned the async await syntax to make my code more readable.`,
    lessonsLearned: `I was able to better understand local storage and its use cases. I also learned how to implement different libraries to help with displaying data using charts and spinner icons for when data is loading. I learned about the React Router v6 library for client-side routing.`
  },

  {
    id: 4,
    image: img4,
    name: "Golf Stats",
    description: `I am Building a full-stack web app that allows users to track their golf stats. This app uses a RESTful API so users can view create delete update stats on each golf club they own and more. It uses MongoDB for storing users golf data. 
    `,
    demo: true,
    demoLink: "https://amazing-fenglisu-529860.netlify.app/",
    github: true,
    githubLink: "https://github.com/dougbeckwith/golf-app",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind",
      "Git."
    ],
    problemsSolutions: `While building a more complex app I was having problems writing too much code in once place. I did some research and found out about the MVC design pattern. This allowed me to create a project that was a lot easier to understand and build. `,
    lessonsLearned: `I learned that having a strong project design and feature plan before starting can save development time. I understand now the need to break the project up into multiple sections using The MVC design pattern. I learned how to build my API end points using the RESTful API design. I also had to learn about Authentication and Authorization.`
  }
];

export default projectData;
