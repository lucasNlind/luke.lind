<template>
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