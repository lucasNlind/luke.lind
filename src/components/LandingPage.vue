<template>
    <link rel="stylesheet" href="https://use.typekit.net/tru2emh.css" />
    <div id='landing-page' class='hero-section-root'>
        <Transition name="fade">
            <span class='header-text-wrapper'>Hej, I'm</span>
        </Transition>
        <div class='circles-wrapper'>
            <PieChart 
                class='circle-wrapper'
                :key="pieKey"
                :chartColor="redHex" 
                :percentageColor="pieData[0].percentageColor" 
                :percentageWhite="pieData[0].percentageWhite" 
                :rotation="pieData[0].rotation"
                :isResponsive="pieData[0].isResponsive"
            ></PieChart>
            <PieChart 
                class='circle-wrapper' 
                :key="pieKey"
                :chartColor="yellowHex" 
                :percentageColor="pieData[1].percentageColor" 
                :percentageWhite="pieData[1].percentageWhite" 
                :rotation="pieData[1].rotation"
                :isResponsive="pieData[1].isResponsive"
            ></PieChart>
            <PieChart 
                class='circle-wrapper'
                :key="pieKey"
                :chartColor="greenHex" 
                :percentageColor="pieData[2].percentageColor" 
                :percentageWhite="pieData[2].percentageWhite"
                :rotation="pieData[2].rotation"
                :isResponsive="pieData[2].isResponsive"
            ></PieChart>
            <PieChart 
                class='circle-wrapper'
                :key="pieKey"
                :chartColor="blueHex" 
                :percentageColor="pieData[3].percentageColor" 
                :percentageWhite="pieData[3].percentageWhite"
                :rotation="pieData[3].rotation"
                :isResponsive="pieData[3].isResponsive"
            ></PieChart>
        </div>
        <Transition>
            <div v-if='showName' class='big-letter-wrapper'>
                <span class='big-letter'>L</span>
                <span class='big-letter'>U</span>
                <span class='big-letter'>K</span>
                <span class='big-letter'>E</span>
            </div>
        </Transition>
        <Transition name='fade'>
            <div v-if='showHeaderTwo' class='sub-header-text-wrapper'>
                That's Swedish for hi. I'm half viking <img class='flag-icon' src='../assets/flag-sweden.png'/>
            </div>
        </Transition>
        <Transition>
            <ProjectsSection v-if='showProjectsSection'></ProjectsSection>
        </Transition>
        <Transition>
            <WorkSection v-if='showProjectsSection'></WorkSection>
        </Transition>
        <Transition>
            <TravelSection v-if='showProjectsSection'></TravelSection>
        </Transition>
        <Transition>
            <MusicSection v-if='showProjectsSection'></MusicSection>
        </Transition>
        <Transition>
            <FooterSection v-if='showProjectsSection'></FooterSection>
        </Transition>
    </div>
    <div class='hero-section-root-mobile'>
        <div class='hero-section-mobile-wrapper'>
            <div class='hero-section-mobile-header-wrapper'>
                <div class='hero-section-mobile-header'>Hey!</div>
                <div class='hero-section-mobile-sub-header'>I'm Luke.</div>
            </div>
            <img class='ball-graphic-mobile' src='../assets/ball-graphic.png'/>
        </div>
        <div class='section-mobile'>
            <div class='mobile-header'>
                I'm really into <span class='red'>coding</span> and <span class='blue'>design</span>.
            </div>
            <div class='mobile-sub-header'>
                Here are a few things I'm proud of:
            </div>
            <div class='project-card-mobile'>
                <div class='project-card-mobile-header'>
                    Morningstar Case Study
                </div>
                <div class='project-card-mobile-sub-header'>
                    2022
                </div>
                <div class='project-card-mobile-body'>
                    A live trading simulation to track overconfidence as a preventable investor bias.
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>Vue.js</div>
                    <div class='project-card-mobile-tech-bubble'>D3</div>
                    <div class='project-card-mobile-tech-bubble'>GitHub Pages</div>
                </div>
            </div>
            <div class='project-card-mobile'>
                <div class='project-card-mobile-header'>
                    API Health Check
                </div>
                <div class='project-card-mobile-sub-header'>
                    2022
                </div>
                <div class='project-card-mobile-body'>
                    An API health check dashboard designed to track the status of our team’s services.
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>Vue.js</div>
                    <div class='project-card-mobile-tech-bubble'>Nest.js</div>
                    <div class='project-card-mobile-tech-bubble'>DynamoDB</div>
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>AWS Lambda</div>
                </div>
            </div>
            <div class='project-card-mobile'>
                <div class='project-card-mobile-header'>
                    Society for Cyber Security
                </div>
                <div class='project-card-mobile-sub-header'>
                    2022
                </div>
                <div class='project-card-mobile-body'>
                    I build and maintain our organization’s website using Vue.js and Github Pages.
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>Vue.js</div>
                    <div class='project-card-mobile-tech-bubble'>GitHub Pages</div>
                </div>
            </div>
            <div class='project-card-mobile'>
                <div class='project-card-mobile-header'>
                    Stretched
                </div>
                <div class='project-card-mobile-sub-header'>
                    2020
                </div>
                <div class='project-card-mobile-body'>
                    A boutique e-commerce platform for secondhand athleisure products.
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>React.js</div>
                    <div class='project-card-mobile-tech-bubble'>Node.js</div>
                    <div class='project-card-mobile-tech-bubble'>PM</div>
                </div>
            </div>
            <div class='project-card-mobile'>
                <div class='project-card-mobile-header'>
                    Spotify Playlist Generator
                </div>
                <div class='project-card-mobile-sub-header'>
                    2019
                </div>
                <div class='project-card-mobile-body'>
                    An application that builds a playlist based on weather at your current location. 
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>Python</div>
                    <div class='project-card-mobile-tech-bubble'>Spotify API</div>
                </div>
                <div class='project-card-mobile-tech-bubble-wrapper'>
                    <div class='project-card-mobile-tech-bubble'>OpenWeatherMap API</div>
                </div>
            </div>
        </div>
        <div class='section-mobile'>
            <div class='mobile-header'>
                Here's where I've worked.
            </div>
            <div class='mobile-sub-header'>
                (and where I'm going)
            </div>
            <div class='work-section-mobile-company-wrapper'>
                <img src='../assets/logo-mckinsey.png' class='work-section-mobile-company-image-mckinsey'/>
                <div class='ball-red'></div>
                <img src='../assets/logo-morningstar.png' class='work-section-mobile-company-image-morningstar'/>
                <div class='ball-yellow'></div>
                <img src='../assets/logo-juni.png' class='work-section-mobile-company-image-juni'/>
                <div class='ball-green'></div>
                <img src='../assets/logo-kry.png' class='work-section-mobile-company-image-kry'/>
            </div>
        </div>
        <div class='section-music-mobile'>
            <div class='mobile-header'>
                I also make <span class='yellow'>music</span>.
            </div>
            <div class='mobile-sub-header'>
                It's actually not terrible. Check it out:
            </div>
            <div class='section-music-mobile-image-wrapper'>
                <a target='_blank' href='https://open.spotify.com/album/0rSpEnVXirPKcltA2Gzlkw?si=Nt3KsjIkSae5zKRk7WAcpg'>
                    <img src='https://storage.googleapis.com/luke-lind-portfolio-assets/heaven-cover.png' class='section-music-mobile-image'/>
                </a>
                <a target='_blank' href='https://open.spotify.com/album/0a497HzTX1MGOMx4ZPTvRC?si=cqwAw2StTO281XN1gbz7aw'>
                    <img src='https://storage.googleapis.com/luke-lind-portfolio-assets/lean-on-cover.jpg' class='section-music-mobile-image'/>
                </a>
            </div>
        </div>
        <div class='section-footer-mobile'>
            <div class='section-footer-balls-mobile'>
                <div class='footer-ball background-red'></div>
                <div class='footer-ball background-yellow'></div>
                <div class='footer-ball background-green'></div>
                <div class='footer-ball background-blue'></div>
            </div>
            <div class='mobile-header'>
                Thanks for making it to the bottom!
            </div>
            <div class='mobile-sub-header'>
                I'm glad you made it. Let's <a target='_blank' href='https://www.linkedin.com/in/lucas-lind-a7197a1b4/' class='linked-in-link'>connect</a>.
            </div>
        </div>
    </div>
</template>

<script>

    import PieChart from './PieChart.vue';
    import ProjectsSection from './ProjectsSection.vue';
    import WorkSection from './WorkSection.vue';
    import TravelSection from './TravelSection.vue';
    import MusicSection from './MusicSection.vue';
    import FooterSection from './FooterSection.vue';

    export default {
        name: 'LandingPage',
        components: {
            PieChart,
            ProjectsSection,
            WorkSection,
            TravelSection,
            MusicSection,
            FooterSection
        },
        data() {
            return {
                showHeaderOne: false,
                showName: false,
                showHeaderTwo: false,
                showProjectsSection: false,
                redHex: '#DE5246',
                greenHex: '#0F9D58',
                blueHex: '#4285F4',
                yellowHex: '#F4B400',
                pieKey: 0,
                pieData: [
                    {
                        percentageColor: 100,
                        percentageWhite: 0,
                        rotation: 4.71239,
                        isResponsive: false
                    },
                    {
                        percentageColor: 100,
                        percentageWhite: 0,
                        rotation: 4.71239,
                        isResponsive: false
                    },
                    {
                        percentageColor: 100,
                        percentageWhite: 0,
                        rotation: 4.71239,
                        isResponsive: false
                    },
                    {
                        percentageColor: 100,
                        percentageWhite: 0,
                        rotation: 4.71239,
                        isResponsive: false
                    }
                ]
            }
        },
        methods: {
            updatePies() {

                if (this.pieKey >= 1) {
                    return;
                }

                const newPieData = [
                {
                        percentageColor: 75,
                        percentageWhite: 25,
                        rotation: 4.71239,
                        isResponsive: true,
                    },
                    {
                        percentageColor: 75,
                        percentageWhite: 25,
                        rotation: 3.92699,
                        isResponsive: true,
                    },
                    {
                        percentageColor: 62.5,
                        percentageWhite: 37.5,
                        rotation: 2.35619,
                        isResponsive: true,
                    },
                    {
                        percentageColor: 75,
                        percentageWhite: 25,
                        rotation: 2.35619,
                        isResponsive: true,
                    }
                ];

                this.pieData = newPieData;
                this.pieKey += 1;
            },
            triggerIntro() {

            }
        },
        mounted() {
            setTimeout(() => {
                this.updatePies();
                this.showName = true;
            }, 2000);

            setTimeout(() => {
                this.showHeaderTwo = true;
            }, 3250);

            setTimeout(() => {
                this.showProjectsSection = true;
            }, 5000);
        }
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .hero-section-root {
            display: none;
        }

        .hero-section-mobile-wrapper {
            display: inline-flex;
            text-align: left;
        }

        .hero-section-mobile-header-wrapper {
            display: flex;
            flex-direction: column;
        }

        .hero-section-mobile-header {
            font-size: 14vw;
            position: relative;
            left: 10vw;
            top: 10vh;
        }

        .hero-section-mobile-sub-header {
            font-size: 8vw;
            position: relative;
            left: 10vw;
            top: 10vh;
        }

        .ball-graphic-mobile {
            position: relative;
            right: 10vw;
            height: 45vh;
            margin-top: 10vh;
        }

        .section-mobile {
            display: flex;
            flex-direction: column;
            margin-top: 15vh;
            margin-right: 10vw;
            margin-left: 10vw;
            text-align: left;
        }

        .section-music-mobile {
            position: relative;
            bottom: 40vw;
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-left: 10vw;
            margin-right: 10vw;
        }

        .section-footer-mobile {
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-left: 10vw;
            margin-right: 10vw;
            margin-bottom: 10vw;
        }

        .section-footer-balls-mobile {
            display: inline-flex;
            margin-bottom: 2vh;
        }

        .section-music-mobile-image-wrapper {
            margin-top: 4vw;
            display: inline-flex;
        }

        .section-music-mobile-image {
            height: 30vw;
            width: 30vw;
            margin-right: 6vw;
        }

        .mobile-header {
            font-size: 8.25vw;
        }

        .mobile-sub-header {
            font-size: 6vw;
            margin-top: 1vh;
        }

        .project-card-mobile {
            display: inline-block;
            padding-bottom: 2vh;
            padding-right: 2vw;
            margin-top: 3vh;
            border: 2px solid #E6E6E6;
            border-radius: 5%;
            width: 75vw;
        }

        .project-card-mobile-header {
            font-size: 5.25vw;
            margin-top: 4vw;
            margin-left: 4vw;
        }

        .project-card-mobile-sub-header {
            font-size: 4.5vw;
            margin-left: 4vw;
            color: #989898;
        }

        .project-card-mobile-body {
            font-size: 4vw;
            margin-left: 4vw;
            margin-top: 1vw;
        }

        .project-card-mobile-tech-bubble-wrapper {
            margin-top: 1vh;
            margin-left: 4vw;
        }

        .project-card-mobile-tech-bubble {
            background-color: #4285F4;
            display: inline-block;
            padding: 1vw 1.5vw 1vw 1.5vw;
            border-radius: 5px;
            color: white;
            margin-right: 3vw;
        }

        .work-section-mobile-company-wrapper {
            display: flex;
            flex-direction: column;
            margin-top: 3vh;
        }

        .work-section-mobile-company-image-mckinsey {
            border-radius: 25px;
            height: 50vw;
            width: 50vw;
            z-index: 5;
        }

        .work-section-mobile-company-image-morningstar {
            border: 2px solid #E6E6E6;
            margin-left: 20vw;
            position: relative;
            bottom: 13vh;
            border-radius: 25px;
            height: 50vw;
            width: 50vw;
            z-index: 5;
        }

        .work-section-mobile-company-image-juni {
            border-radius: 25px;
            position: relative;
            height: 50vw;
            width: 50vw;
            z-index: 5;
            bottom: 56vw;
            left: 6vw;
        }

        .work-section-mobile-company-image-kry {
            border: 2px solid #E6E6E6;
            border-radius: 25px;
            position: relative;
            height: 50vw;
            width: 50vw;
            z-index: 5;
            bottom: 85vw;
            margin-left: 20vw;
        }

        .ball-red {
            position: relative;
            bottom: 20vw;
            left: 30vw;
            border-radius: 50%;
            background-color: #DE5246;
            height: 35vw;
            width: 35vw;
            z-index: 1;
        }

        .footer-ball {
            border-radius: 50%;
            margin-right: 2vw;
            height: 10vw;
            width: 10vw;
        }

        .ball-yellow {
            position: relative;
            bottom: 40vw;
            border-radius: 50%;
            background-color: #F4B400;
            height: 35vw;
            width: 35vw;
            z-index: 1;
        }

        .ball-green {
            position: relative;
            border-radius: 50%;
            background-color:#0F9D58;
            bottom: 75vw;
            left: 35vw;
            height: 35vw;
            width: 35vw;
            z-index: 1;
        }

        .linked-in-link {
            text-decoration: none;
            color: #4285F4;
            cursor: pointer;
        }

        .red {
            color: #DE5246;
        }

        .background-red {
            background-color: #DE5246;
        }

        .blue {
            color: #4285F4;
        }

        .background-blue {
            background-color: #4285F4;
        }

        .yellow {
            color: #F4B400;
        }

        .background-yellow {
            background-color: #F4B400;
        }

        .green {
            color: #0F9D58;
        }

        .background-green {
            background-color: #0F9D58;
        }
    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .hero-section-root-mobile {
            display: none;
        }

        .hero-section-root {
            margin-top: 20vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            font-size: 1.6vw;
            cursor: default;
            scroll-behavior: smooth;
        }

        .circles-wrapper {
            display: inline-flex;
            margin-left: 2vw;
            margin-right: 2vw;
            margin: auto;
        }

        .circle-wrapper {
            width: 13vw;
            margin-left: 1vw;
            margin-right: 1vw;
        }

        .big-letter-wrapper {
            width: 13vw;
            margin: auto;
            display: inline-flex;
            font-family: avenir next;
            line-height: 10vh;
            font-weight: 500;
            font-size: 8vw;
            position: relative;
            bottom: 16vh;
            right: 23.1vw;
            animation: fadeIn 5s;
        }

        .big-letter {
            margin-left: 5vw;
            margin-right: 5vw;
        }

        .header-text-wrapper {
            margin: auto;
            width: 57vw;
            text-align: left;
            margin-bottom: 2vh;
            font-family: avenir next;
            font-size: 2vw;
            animation-name: fadeIn;
            animation-duration: 5s;
        }

        .sub-header-text-wrapper {
            display: inline-flex;
            position: relative;
            bottom: 5vh;
            margin: auto;
            width: 57vw;
            text-align: left;
            margin-bottom: 2vh;
            font-family: avenir next;
            font-size: 2vw;
            animation-name: fadeIn;
            animation-duration: 5s;
            margin-bottom: 23vh;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            50% { opacity: 1; }
        }

        .flag-icon {
            position: relative;
            top: 0.25vh;
            margin-left: 1vw;
            width: 2.75vw;
            height: 4vh;
        }

    }

</style>