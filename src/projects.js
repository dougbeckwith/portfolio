import img1 from './assets/project-one-img-one.png'
import test from './assets/project2.png'

console.log(img1)
console.log(test)

const Projects = [
  {
    id: 1,
    image: { img1 },
    description: `This web app uses Javascript HTML and CSS. It displays the top 100 Cryptocurrency's based on the data returned from the API call
    It also allows a user to filter cryptocurrency's based on the users search input.
    `,
    demo: true,
    demoLink: 'https://dougbeckwith.github.io/',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/dougbeckwith.github.io',
  },
  {
    id: 2,
    image: { img1 },
    description: 'This web app uses Javascript HTML and CSS. I created a phrase guessing game.A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).',
    demo: false,
    demoLink: '',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-4',
  },
  {
    id: 3,
    image: { img1 },
    description: 'Here i used Javascript to help with form validation. It will also display or update information based on user selections',
    demo: false,
    demoLink: '',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-3',
  },
  {
    id: 4,
    image: { img1 },
    description: 'This application takes a large array of 44 students and will only display up to 9 students from the array on the page. Clicking on the button triggers an event and will access different section of students from the array based on the parameters of the function ShowPage.',
    demo: false,
    demoLink: '',
    github: true,
    githubLink: 'https://github.com/dougbeckwith/techdegree-project-2',
  },
]

export default Projects
