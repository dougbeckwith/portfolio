import img1 from '../images/phraseHunter.png'
import img2 from '../images/haloMMR.png'
import img3 from '../images/cryptoTracker.png'
import img4 from '../images/golfStats.png'

const projectData = [
  {
    id: 1,
    image: img1,
    name: 'Phrase Hunter',
    description: `This web app is a phrase guessing game. A player continues to select letters until 
      they guess the phrase (and win), or make five incorrect guesses (and lose).`,
    demo: true,
    demoLink: 'https://dougbeckwith.github.io/',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-4',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    problemsSolutions: `My biggest problem in this project was having a good understanding of classes. I was using arrow functions in my game class, which was giving me unexpected results. After some reading on MDN, I learnt that the keyword this in the arrow function was not referring to the game object. I was able to change the arrow functions into a regular function to access the class object.`,
    lessonsLearned: `In this project I learned a good understanding of classes in JavaScript. I now understand how to create classes with methods and variables. I learned the key word this and how to access methods and variables from classes. I learned to use modules to separate my game logic. Along with understanding the need to have descriptive variables and function names and how to leave good comments for other developers and myself. `,
  },

  {
    id: 2,
    image: img2,
    name: 'Halo MMR',
    description: `This app was created to easily help anyone visualize their ranked matchmaking data in Halo Infinite. 
     It helps solve the problem of understanding your CSR and MMR as the ranking system doesn't give players any feedback. Please ask for demo if you don't play halo and have an account to login.
    `,
    demo: true,
    demoLink: 'https://halommr.com',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/mmr-halo-public',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Git'],
    problemsSolutions: `I had issues with promises and async JavaScript. Specifically with making a second API using the data returned from the first API call. I was able to fix this by using promises and chaining .then() method after the first API call. My other problem was the match data returned was always in a random order. I had to learn how to sort the data by using the new Date object and the .sort () method in JavaScript.`,
    lessonsLearned: `This project gave me a great understanding of built-in methods in JavaScript for iterating through Objects and Arrays and working with Async JavaScript. I learned how React useState works and how to pass data through props and create reusable components. I was able to use GitHub to work with other developers.`,
  },

  {
    id: 3,
    image: img3,
    name: 'Crypto Tracker',
    description: `This web app fetches the top 100 cryptocurrency data from an API. 
    It uses the returned data to display information about each cryptocurrency. You can filter cryptocurrencies,
    view charts, and make a watchlist. `,
    demo: true,
    demoLink: 'https://profound-lolly-382242.netlify.app',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/crypto-search',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Git'],
    problemsSolutions: `While working on the watchlist feature of the app my watchlist was getting erased anytime I refreshed the webpage. I was able to learn about local storage and store an array of cryptos to repopulate the DOM on refresh. I also felt my code was getting harder to read with chaining .then methods. So, I learned the async await syntax to make my code more readable.`,
    lessonsLearned: `I was able to better understand local storage and its use cases. I also learned how implement different libraries to help with display data using charts and create spinner icons while data is loading. I also learned about the React Router v6 library for client-side routing.  Made use of useParams() and useNavigate() in React.`,
  },

  {
    id: 4,
    image: img4,
    name: 'Golf Stats',
    description: `I’m Building a full-stack web app that allows users to track their golf club stats. This app uses a RESTful API so users can view create delete update stats on each golf club they own. It uses MongoDB for storing users club data. My next feature on the app will be adding create account and login ability.  
    `,
    demo: true,
    demoLink: 'https://golf-app-v2.herokuapp.com/clubs',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/golf-stats-v2',
    technologies: [
      'Heroku',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Tailwind',
      'Git.',
    ],
    problemsSolutions: `While building a more complex app I was having problems writing too much code in once place. I did some research and found out about the MVC design pattern. This allowed me to create a project that was a lot easier to understand and build.  I also had the problem with keeping my local state and the database in sync. After some reading, I noticed Mongoose has a method that returns the object that was just added. I was able to use this object by adding it to my local state to keep it in sync with the database.`,
    lessonsLearned: `Learning the MVC design pattern allowed me to separate my project in into the model which manages the data. The view which handles what the user will see on their screen. The controller which connects the model and view and receives inputs from the view to update the data in the model. I love the way this splits up the project! I learned different ways to manage state and implemented the useContext and the useReducer hook for updating state instead of useState.`,
  },
]

export default projectData
