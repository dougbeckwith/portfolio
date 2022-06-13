import img1 from './assets/project1.png'
import img2 from './assets/project2.png'
import img3 from './assets/project3.png'
import img4 from './assets/project4.png'
import img5 from './assets/project5.png'
import img6 from './assets/project6.png'

const Projects = [
  {
    id: 1,
    image: img1,
    description: `This web app fetches the top 100 cryptocurrency data from an API. 
    It uses the returned data to display information about each cryptocurrency. You can filter cryptocurrencies,
    view charts, and make a watchlist. `,
    demo: true,
    demoLink: 'https://profound-lolly-382242.netlify.app',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/crypto-search',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Git'],
  },
  {
    id: 6,
    image: img6,
    description: `Work in progress: Building a full-stack web app that allows users to track their golf stats. 
    Users can add their golf clubs in their bag and easily view all clubs. 
    User can create, update or delete current stats for each golf club. 
    `,
    demo: true,
    demoLink: 'https://golf-app-v2.herokuapp.com/clubs',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/golf-stats-v2',
    technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind', 'Git'],
  },
  {
    id: 5,
    image: img5,
    description: `This app was created to easily help anyone visualize their MMR and CSR data in Halo Infinite. 
     It helps solve the problem of understanding your CSR and MMR as the ranking system doesn't give players any feedback. Please ask for demo if you don't play halo and have an account to login.
    `,
    demo: true,
    demoLink: 'https://halommr.com',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/mmr-halo-public',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Git'],
  },
  {
    id: 4,
    image: img4,
    description: `Built a landing page that can be used to get
     clients interested in investing and to sign up for an account.`,
    demo: true,
    demoLink: 'https://meek-granita-53a799.netlify.app/',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/landing-page',
    technologies: ['React', 'JavaScript', 'HTML', 'Tailwind', 'Git'],
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
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
  {
    id: 3,
    image: img3,
    description: `This web app is a sign up form for a user attending an event. 
      It uses form validation and updates the display based on user inputs.`,
    demo: true,
    demoLink: 'https://celebrated-bublanina-91730b.netlify.app/',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-3',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
]

export default Projects
