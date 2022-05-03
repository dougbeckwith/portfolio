import img1 from './assets/project1.png'
import img2 from './assets/project2.png'
import img3 from './assets/project3.png'
import img4 from './assets/project4.png'

const Projects = [
  {
    id: 1,
    image: img1,
    description: `This web app fetch's the top 100 cryptocurrency data from an API. 
    It uses the returned data to display information about each crypto. `,
    demo: true,
    demoLink: 'https://profound-lolly-382242.netlify.app',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/crypto-search',
  },
  {
    id: 2,
    image: img2,
    description: `This web app is a phrase guessing game. A player continues to select letters until 
      they guess the phrase (and win), or make five incorrect guesses (and lose).`,
    demo: true,
    demoLink: 'https://dougbeckwith.github.io/',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-4',
  },
  {
    id: 3,
    image: img3,
    description: `This web app is a sign up form for a user attending an event. 
      It uses form validation and updates the display based on user inputs.`,
    demo: false,
    demoLink: '',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-3',
  },
  {
    id: 4,
    image: img4,
    description: `This application takes an array of students and will only display up to 9 students 
    from the array on the page. Clicking on the navigation buttons triggers an event and 
    will access a different page of 9 students.`,
    demo: false,
    demoLink: '',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-2',
  },
]

export default Projects
