import img1 from "../images/phraseHunter.png";
import img2 from "../images/haloMMR.png";
import img3 from "../images/cryptoTracker.png";
import img4 from "../images/golfStats.png";

const projectData = [
  {
    id: 1,
    image: img1,
    name: "Phrase Hunter",
    description: `This web app is a phrase-guessing game. Players select letters until they either guess the phrase (win) or make five incorrect guesses (lose).`,
    demo: true,
    demoLink: "https://dougbeckwith.github.io/",
    github: true,
    githubLink: "https://github.com/dougbeckwith/techdegree-project-4",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
    problemsSolutions: `My biggest challenge in this project was understanding classes. I was using arrow functions inside my game class, which caused unexpected results. After reading documentation on MDN, I learned that the 'this' keyword in arrow functions does not refer to the class instance. I fixed this by converting the arrow functions into regular functions.`,
    lessonsLearned: `In this project, I gained a solid understanding of classes in JavaScript. I learned how to create classes with methods and properties, how the 'this' keyword works, and how to structure code using modules. I also improved my ability to write clear variable names, functions, and comments.`
  },

  {
    id: 2,
    image: img2,
    name: "Halo MMR",
    description: `This app was built to help users visualize their matchmaking rating (MMR) and competitive skill rating (CSR) in Halo Infinite. It addresses the lack of clear feedback in the game's ranking system. At its peak, the site received around 1,000 unique users per day and over 10,000 page views daily. Although the game is no longer active for us, and the app has been taken down, the GitHub repository is still available.`,
    demo: false,
    demoLink: "https://halommr.com",
    github: true,
    githubLink: "https://github.com/dougbeckwith/mmr-halo-public",
    technologies: ["React", "JavaScript", "Tailwind", "Git"],
    problemsSolutions: `I encountered challenges with promises and asynchronous JavaScript, particularly when making a second API call using data from the first. I resolved this by chaining promises using .then(). Another issue was that match data was returned in a random order. I solved this by sorting the data using the Date object and the .sort() method.`,
    lessonsLearned: `This project strengthened my understanding of JavaScript methods for working with objects and arrays, as well as asynchronous programming. I also learned how React's useState works, how to pass data through props, and how to build reusable components. Additionally, I gained experience collaborating with other developers using GitHub.`
  },

  {
    id: 3,
    image: img3,
    name: "Crypto Tracker",
    description: `This web app fetches data for the top 100 cryptocurrencies from an API and displays key information about each one. Users can filter cryptocurrencies, view charts, and create a watchlist.`,
    demo: false,
    demoLink: "https://profound-lolly-382242.netlify.app",
    github: true,
    githubLink: "https://github.com/dougbeckwith/crypto-search",
    technologies: ["React", "JavaScript", "Tailwind", "Git"],
    problemsSolutions: `While building the watchlist feature, I ran into an issue where the list would reset on page refresh. I solved this by using local storage to persist the data. I also found that chaining .then() methods made my code harder to read, so I learned and implemented async/await for better readability.`,
    lessonsLearned: `I improved my understanding of local storage and its practical use cases. I also learned how to integrate third-party libraries for charts and loading indicators. Additionally, I gained experience using React Router v6 for client-side routing.`
  },

  {
    id: 4,
    image: img4,
    name: "Golf Stats",
    description: `This is a full-stack web app that allows users to track their golf statistics. It uses a RESTful API to create, read, update, and delete data for each golf club. MongoDB is used to store user data. 
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
    problemsSolutions: `While building a more complex application, I struggled with having too much code in a single place. After researching best practices, I learned about the MVC design pattern, which helped me better organize the project and improve maintainability.`,
    lessonsLearned: `I learned the importance of planning a project’s structure and features before development. I gained a better understanding of the MVC design pattern and how to design RESTful API endpoints. I also learned the basics of authentication and authorization.`
  }
];

export default projectData;
