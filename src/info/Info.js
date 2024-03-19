import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Patrick",
    lastName: "Ward",
    initials: "pw", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: "/PatrickWardPortfolio/static/media/self.84c4f90888242195ef2a.png", // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "Full Stack Developer at Initech Global"
        },
        {
            emoji: "📧",
            text: "wardp4@udayton.edu"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/patrickjohnward/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/Patward22/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://instagram.com/patward22/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Patrick. I'm a full stack developer for Initech Global. I am studying Mangement Information Systems at the University of Dayton and I am graduating in May 2024. I am interested in being hired for a full time development or security based job to apply all that I have learned in and outside the classroom! I love watching the Chicago Bears, playing videogames, and hanging out with my friends. Feel free to send me an email at wardp4@udayton.edu! Enjoy my portfolio!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'SQL', 'Java'],
            exposedTo: ['nodejs', 'python', 'ASP.NET']
        }
    ,
    hobbies: [
        {
            label: 'Working for the express payments team on both frontend and backend. Working within React developing user interfaces for notifications regarding their payments. Wrote in IntelliJ working mostly on bugs within the express payments software. Worked with APIs within Spring Boot Framework to help bring in new invoicing descriptions for customers invoices.',
            emoji: 'Full Stack Developer - Initech Global(August 2023-Current)'
        },
        {
            label: 'Served as the Scrum Master for the software development team. Aided developers with blockers so they could continue their work. Led Scrum ceremonies in-person and remotely. Created a new interface tracking database action items to help aid our team in reaching target release dates on time. Worked with developers on bug tickets in test environments before production.',
            emoji: 'Scrum Master - Alticor(May 2023-August 2023)'
        },
        {
            label: 'Assisted in transferring over data to a new database. Cleaned up data from the old database so that it could be used in the new database. Provided day-to-day IT support for full-time staff. Worked on streamlining technology within the office by finding solutions to existing technological problems. Worked with onboarding new employees and adding them to our domain. Collaborated with full-time staff on special projects',
            emoji: 'IT Intern - National Retail Federation(June 2022-August 2022)'
        },
        {
            label: 'Working as the Call Center Lead at the University of Dayton IT Service Center. Help over 11,000 students, faculty, and alumni with technology issues that they are experiencing. Responsible for the employees of the call center and the service that they provide to customers. Perform daily auditing and stats on employees within the center to help improve operations and efficiency.',
            emoji: 'Call Center Lead - University of Dayton(August 2021-August 2023)'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Euchre Counter",
            live: "https://patward22.github.io/euchre-counter/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Patward22/euchre-counter", // this should be a link to the **repository** of the project, where the code is hosted.
            image: "/PatrickWardPortfolio/static/media/mock1.b0b3fa3c425baf4b350f.png"
        },
        {
            title: "Text Editor",
            source: "https://github.com/Patward22/JavaTextEditor",
            image: "/PatrickWardPortfolio/static/media/mock2.02a14b5aad81cc77bb3f.png"
        },
        {
            title: "Summoners Grid - Features Added(Grid Outline and autoFocus in searchModal)",
            live: "https://summonersgrid.com/",
            source: "https://github.com/Mickers247/SummonersGrid",
            image: "/PatrickWardPortfolio/static/media/mock3.4dde9b665d959b013bf8.png"
        },
    ]
}