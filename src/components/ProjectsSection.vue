<template>
    <div id='projects' class='projects-section-root'>
        <div class='project-section-header'>
            I'm really into <span class='red'>coding</span> and <span class='blue'>design</span>.
        </div>
        <div class='project-section-sub-header'>
            Here are a few things I'm proud of:
        </div>
        <div class='cards-wrapper'>
            <div class='cards-row'>
                <div class='project-card-root' @click="updateActiveProject(0)">
                    <div class='project-card-section-top'>
                        <div class='project-card-title'>{{ this.projects[0].name }}</div>
                        <img class='loading-icon' src='../assets/icon-loading.svg'/>
                    </div>
                    <div class='project-card-sub-title'>{{ this.projects[0].year }}</div>
                    <div class='project-card-description'>{{ this.projects[0].description }}</div>
                </div>
                <div class='project-card-root' @click="updateActiveProject(1)">
                    <div class='project-card-section-top'>
                        <div class='project-card-title'>{{ this.projects[1].name }}</div>
                        <img class='loading-icon' src='../assets/icon-loading.svg'/>
                    </div>
                    <div class='project-card-sub-title'>{{ this.projects[1].year }}</div>
                    <div class='project-card-description'>{{ this.projects[1].description }}</div>
                </div>
            </div>
            <div class='cards-row'>
                <div class='project-card-root' @click="updateActiveProject(2)">
                    <div class='project-card-section-top'>
                        <div class='project-card-title'>{{ this.projects[2].name }}</div>
                        <img class='loading-icon' src='../assets/icon-loading.svg'/>
                    </div>
                    <div class='project-card-sub-title'>{{ this.projects[2].year }}</div>
                    <div class='project-card-description'>{{ this.projects[2].description }}</div>
                </div>
                <div class='project-card-root' @click="updateActiveProject(3)">
                    <div class='project-card-section-top'>
                        <div class='project-card-title'>{{ this.projects[3].name }}</div>
                        <img class='loading-icon' src='../assets/icon-loading.svg'/>
                    </div>
                    <div class='project-card-sub-title'>{{ this.projects[3].year }}</div>
                    <div class='project-card-description'>{{ this.projects[3].description }}</div>
                </div>
            </div>
            <div class='cards-row'>
                <div class='project-card-root' @click="updateActiveProject(4)">
                    <div class='project-card-section-top'>
                        <div class='project-card-title'>{{ this.projects[4].name }}</div>
                        <img class='loading-icon' src='../assets/icon-loading.svg'/>
                    </div>
                    <div class='project-card-sub-title'>{{ this.projects[4].year }}</div>
                    <div class='project-card-description'>{{ this.projects[4].description }}</div>
                </div>
            </div>
        </div>
        <div v-if='isOpen' class='my-modal'>
            <div class='my-modal-content'>
                <div class='my-modal-content-top'>
                    <div class='my-modal-header'>{{ activeProject.name }}</div>
                    <img class='my-modal-icon-close' src='../assets/icon-close.svg' @click='this.isOpen = false'/>
                </div>
                <div class='my-modal-content-body'>
                    {{ activeProject.bodyParagraphOne }}
                </div>
                <div class='my-modal-content-body'>
                    {{ activeProject.bodyParagraphTwo }}
                </div>
                <div class='my-modal-content-bottom'>
                    <div class='my-modal-content-bottom-body-wrapper'>
                        <div class='my-modal-content-bottom-body'>
                            {{ activeProject.bodyParagraphThree }}
                        </div>
                        <div class='my-modal-content-bottom-body'>
                            {{ activeProject.bodyParagraphFour }}
                        </div>
                        <div class='my-modal-content-bottom-body'>
                            {{ activeProject.bodyParagraphFive }}
                        </div>
                    </div>
                    <img class='my-modal-content-image' v-if='activeProject.id == 0' src='https://storage.googleapis.com/luke-lind-portfolio-assets/ms-trading-ui.png'/>
                    <img class='my-modal-content-image' v-if='activeProject.id == 1' src='https://storage.googleapis.com/luke-lind-portfolio-assets/ms-healthcheck-ui.png'/>
                    <img class='my-modal-content-image' v-if='activeProject.id == 2' src='https://storage.googleapis.com/luke-lind-portfolio-assets/puppy.png'/>
                    <div class='my-modal-content-image-carousel' v-if='activeProject.id == 3'>
                        <img v-if='activeStretchedImage == 1' class='my-modal-content-image'  src='https://storage.googleapis.com/luke-lind-portfolio-assets/stretched-shot-1.png'/>
                        <img v-if='activeStretchedImage == 2' class='my-modal-content-image'  src='https://storage.googleapis.com/luke-lind-portfolio-assets/stretched-shot-2.png'/>
                        <img v-if='activeStretchedImage == 3' class='my-modal-content-image'  src='https://storage.googleapis.com/luke-lind-portfolio-assets/stretched-shot-3.png'/>
                        <div class='my-modal-image-carousel-selection'>
                            <span class='image-carousel-number' @click='activeStretchedImage = 1'>1</span>
                            <span class='image-carousel-number' @click='activeStretchedImage = 2'>2</span>
                            <span class='image-carousel-number' @click='activeStretchedImage = 3'>3</span>
                        </div>
                    </div>
                    <img class='my-modal-content-image' v-if='activeProject.id == 4' src='https://storage.googleapis.com/luke-lind-portfolio-assets/spotify-hero.png'/>
                </div>
            </div>
        </div>
        <img class='ball-graphic' src='../assets/ball-graphic.png'/>
    </div>
    <div class='projects-section-root-mobile'>
        
    </div>
</template>

<script>

    export default {
        name: 'ProjectsSection',
        methods: {
            updateActiveProject(id) {
                this.activeProject = this.projects.find(x => x.id === id);
                console.log(this.activeProject);
                this.isOpen = true;
            }
        },
        data() {
            return {
                activeStretchedImage: 1,
                activeProject: {
                    id: -1,
                    name: '',
                    year: '',
                    description: '',
                    bodyParagraphOne: '',
                    bodyParagraphTwo: '',
                    bodyParagraphThree: '',
                    bodyParagraphFour: '',
                    bodyParagraphFive: '',
                },
                projects: [
                    {
                        id: 0,
                        name: 'Morningstar Case Study',
                        year: '2022',
                        description: 'A live trading simulation to track overconfidence as a preventable investor bias.',
                        bodyParagraphOne: 'An event-driven trading simulation where the user interacts with five stocks during a fixed time period of roughly ten minutes. We track player behavior throughout the game and present the user with an investor bias score at the end of the simulation.',
                        bodyParagraphTwo: ' The project was built with the intent of improving an investor\'s understanding of his or her core biases, and our project won first place in the Summer Case Study competition. Below is a screenshot of the UI, which was designed and built by myself.',
                        bodyParagraphThree: 'I built the frontend using Vue.js, and the charts that you see in the screenshot (stock chart & pie chart) were both built using D3.',
                        bodyParagraphFour: 'The biggest challenge with this project was including a high degree of reactivity with the charts. Though the simulation lasts only about 10 minutes, the in-game equivalent is 120 days - so it moves pretty quickly.',
                        bodyParagraphFive: 'To achieve this, I had to re-render all of the data in the chart each time a day passes in the simulation (every 4 seconds). This gave the player the illusion that the stock chart was continuously updating.'
                    },
                    {
                        id: 1,
                        name: 'API Health Check',
                        year: '2022',
                        description: 'An API health check dashboard designed to track the status of our team’s services.',
                        bodyParagraphOne: 'An API health check dashboard for tracking the status of our team\'s microservices. The status of each API is represented by aggregate - meaning that the overall status of a service is a summary of the last ten calls to the status endpoint of each service.',
                        bodyParagraphTwo: ' The project was built with the intent to create a one-stop location for tracking our team\'s services. It ultimately helped improve our developer\'s ability to debug our repositories, and it provided a historical account for the status of the APIs.',
                        bodyParagraphThree: 'I built the frontend using Vue.js, which was served with a Nest.js BFF (backend for frontend). We stored the status calls in a DynamoDB, and new status call entries are submitted via a Cron type lambda.',
                        bodyParagraphFour: 'The biggest challenge with this project was integrating the serverless infrastructure with the rest of the application. Luckily, I had a fantastic mentor and team member who helped walk me through the implementation. ',
                        bodyParagraphFive: 'Further improvements would have involved more extensive documentation for each service.'
                    },
                    {
                        id: 2,
                        name: 'Society for Cyber Security',
                        year: '2022',
                        description: 'I build and maintain our organization’s website using Vue.js and Github Pages.',
                        bodyParagraphOne: 'I\'m a member of UGA\'s Society for Cyber Security, where I act as both the Vice President for Web Development and an Officer of Operations. My main work involves maintaining our organization\'s website, which I built using Vue.js and GitHub pages.',
                        bodyParagraphTwo: 'The project has given me a great opportunity to explore my love for web development and design, and I had an especially great time designing our mascot!',
                        bodyParagraphThree: 'Part of my work also involves teaching the new VP of Web Development how to maintain the website. The infrastructure is, of course, all in place, but not everyone is familiar with Vue.js.',
                        bodyParagraphFour: 'As officer of operations, I help orchestrate what are known as Hack Hours. We put together weekly events where students can come and learn how to hack, and I attend to help walk students through various concepts.',
                        bodyParagraphFive: 'You can check out our website at https://ugascs.com/'
                    },
                    {
                        id: 3,
                        name: 'Stretched',
                        year: '2020',
                        description: 'A boutique ecommerce platform for secondhand athleisure products.',
                        bodyParagraphOne: 'A boutique e-commerce platform for secondhand athleisure products. A couple years ago, I got in touch with a mutual friend who had an idea to build a peer to peer marketplace for upscale athletic clothing.',
                        bodyParagraphTwo: 'I was put in charge of designing and developing the entire platform from start to finish, and I had a lot of fun overseeing the development. It was my first exposure to front-end development and product management.',
                        bodyParagraphThree: 'To build the actual website I used an open source React.js and Node.js based skeleton developed by a company called Sharetribe. They allow anyone to pull the codebase and modify it according to your specific need.',
                        bodyParagraphFour: 'I was able to implement all of the frontend changes myself, but there was a lot of backend functionality that I simply didn\'t know how to implement. For this, I hired a team of developers to complete the remaining work.',
                        bodyParagraphFive: 'Check out some of the screenshots here:',
                    },
                    {
                        id: 4,
                        name: 'Spotify Playlist Generator',
                        year: '2019',
                        description: 'An application that builds a playlist based on weather at your current location.',
                        bodyParagraphOne: 'A fun little application that builds a curated playlist for you based on weather at your current location. This was my first personal project as well as my first introduction to Python.',
                        bodyParagraphTwo: 'I\'ve always loved music, and weather has always played a significant role in the kind of music that I listen to. I wanted to explore the relationship between weather and music in this project.',
                        bodyParagraphThree: 'To do this, I build a Python application that connected to the Spotify API via the Spotipy package. The Spotipy package was super helpful because it streamlined a lot of the authentication steps required to connect to the API.',
                        bodyParagraphFour: 'To get the user\'s weather data, I used the OpenWeatherMap API and determined the weather based on the response. If the weather was good, the playlist had generally uplifting songs. If the weather was bad, the playlist had more somber tunes.',
                        bodyParagraphFive: ''
                    }
                ],
                isOpen: false,
            }
        }
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .projects-section-root {
            display: none;
        }
    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .projects-section-root-mobile {
            display: none;
        }

        .projects-section-root {
            margin: auto;
            width: 57vw;
            padding-top: 10vh;
        }

        .project-section-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2.5vw;
            margin-bottom: 1vh;
        }

        .project-section-sub-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2vw;
            margin-bottom: 5vh;
        }

        .project-card-wrapper {
            width: 100%;
        }

        .cards-wrapper {
            display: flex;
            flex-direction: column;
        }

        .cards-row {
            display: inline-flex;
            justify-content: space-between;
            margin-bottom: 2vh;
        }

        .card {
            width: 48.5%;
            height: 20vh;
            border: 2px solid #E6E6E6;
            border-radius: 5px;
        }

        .ball-graphic {
            position: relative;
            left: 10vw;
            bottom: 12vh;
            height: 75vh;
        }

        .my-modal {
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.3);
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .my-modal-content {
            margin: auto;
            margin-top: 8vh;
            height: 84vh;
            width: 80vw;
            background-color: white;
        }

        .my-modal-content-top {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
        }

        .my-modal-content-bottom {
            width: 100%;
            display: inline-flex;
        }

        .my-modal-content-bottom-body-wrapper {
            width: 40%;
            display: flex;
            flex-direction: column;
        }

        .my-modal-icon-close {
            cursor: pointer;
            margin-right: 5vh;
            margin-top: 4vh;
            height: 1.5vw;
            width: 1.5vw;
        }

        .my-modal-header {
            text-align: left;
            font-family: avenir next;
            font-size: 2.25vw;
            margin-left: 5vh;
            padding-top: 3vh;
        }

        .my-modal-content-body {
            margin-top: 2vh;
            margin-left: 5vh;
            margin-right: 5vh;
            text-align: left;
            font-size: 1.3vw;
        }

        .my-modal-content-bottom-body {
            margin-top: 2vh;
            margin-left: 5vh;
            margin-right: 5vh;
            text-align: left;
            font-size: 1.3vw;
        }

        .my-modal-content-image {
            height: 50vh;
            margin-right: 5vh;
            margin-top: 2vh;
        }

        .my-modal-content-image-carousel {
            display: flex;
            flex-direction: column;
        }

        .image-carousel-number {
            margin-left: 1vw;
            margin-right: 1vw;
        }

        .my-modal-image-carousel-selection {
            cursor: pointer;
            display: inline-flex;
            margin: auto;
            text-align: center;
            border-top: 1px solid black;
            padding-top: 0.5vh;
            transition: transform 0.4s;
        }

        .my-modal-image-carousel-selection:hover {
            transform: scale(1.01);
        }

        .project-card-root {
            width: 48.5%;
            height: 18vh;
            border: 2px solid #E6E6E6;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            transition: transform 0.4s;
        }

        .project-card-root:hover {
            transform: scale(1.01);
        }

        .project-card-section-top {
            display: inline-flex;
            justify-content: space-between;
        }

        .project-card-title {
            text-align: left;
            margin-left: 1.5vw;
            margin-top: 1.5vh;
            font-size: 1.6vw;
        }

        .loading-icon {
            position: relative;
            top: 2vh;
            height: 1.6vw;
            margin-right: 1.5vw;
            transition: transform 1.5s ease-in-out;
        }

        .loading-icon:hover {
            transform: rotate(360deg);
        }

        .project-card-sub-title {
            text-align: left;
            margin-left: 1.5vw;
            font-size: 1.2vw;
            color: #989898;
        }

        .project-card-description {
            text-align: left;
            margin-left: 1.5vw;
            margin-right: 1.5vw;
            margin-top: 1vh;
            font-size: 1.1vw;
        }


        .red {
            color: #DE5246;
        }

        .blue {
            color: #4285F4;
        }

    }

</style>