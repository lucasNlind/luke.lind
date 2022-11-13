<template>
    <div class='projects-section-root'>
        <div class='project-section-header'>
            I'm really into <span class='red'>coding</span> and <span class='blue'>design</span>.
        </div>
        <div class='project-section-sub-header'>
            Here are a few things I'm proud of:
        </div>
        <div class='cards-wrapper'>
            <div class='cards-row'>
                <ProjectCard
                    :title='this.projects[0].title'
                    :year='this.projects[0].year'
                    :description='this.projects[0].description'
                ></ProjectCard>
                <ProjectCard
                    :title='this.projects[1].title'
                    :year='this.projects[1].year'
                    :description='this.projects[1].description'
                ></ProjectCard>
            </div>
            <div class='cards-row'>
                <ProjectCard
                    :title='this.projects[2].title'
                    :year='this.projects[2].year'
                    :description='this.projects[2].description'
                ></ProjectCard>
                <ProjectCard
                    :title='this.projects[3].title'
                    :year='this.projects[3].year'
                    :description='this.projects[3].description'
                ></ProjectCard>
            </div>
            <div class='cards-row'>
                <ProjectCard
                    :title='this.projects[4].title'
                    :year='this.projects[4].year'
                    :description='this.projects[4].description'
                    @click="updateActiveProject(4)"
                ></ProjectCard>
            </div>
        </div>
        <ModalComponent :open='isOpen' @close="isOpen = false">
            <ModalContent
                :projectName="activeProject.name"
            ></ModalContent>
        </ModalComponent>
        <img class='ball-graphic' src='../assets/ball-graphic.png'/>
    </div>
    <div class='projects-section-root-mobile'>
        
    </div>
</template>

<script>

    import { ref } from 'vue';

    import ProjectCard from './ProjectCard.vue';
    import ModalComponent from './ModalComponent.vue';
    import ModalContent from './ModalContent.vue';

    export default {
        name: 'ProjectsSection',
        components: {
            ProjectCard,
            ModalComponent,
            ModalContent,
        },
        methods: {
            updateActiveProject(id) {
                this.activeProject = this.projects.find(x => x.id === id);
                console.log(this.activeProject)
                this.isOpen = true;
            }
        },
        data() {
            return {
                activeProject: {},
                projects: [
                    {
                        id: 1,
                        title: 'Morningstar Case Study',
                        year: '2022',
                        description: 'A live trading simulation to track overconfidence as a preventable investor bias.'
                    },
                    {
                        id: 2,
                        title: 'API Health Check',
                        year: '2022',
                        description: 'An API health check dashboard designed to track the status of our team’s services.'
                    },
                    {
                        id: 3,
                        title: 'Society for Cyber Security',
                        year: '2022',
                        description: 'I build and maintain our organization’s website using Vue.js and Github Pages.'
                    },
                    {
                        id: 4,
                        title: 'Stretched',
                        year: '2020',
                        description: 'A boutique ecommerce platform for secondhand athleisure products.'
                    },
                    {
                        id: 5,
                        title: 'Spotify Playlist Generator',
                        year: '2019',
                        description: 'An application that builds a playlist based on weather at your current location. '
                    }
                ]
            }
        },
        setup() {
            const isOpen = ref(false);
            return { isOpen };
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
            margin-top: 23vh;
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

        .red {
            color: #DE5246;
        }

        .blue {
            color: #4285F4;
        }

    }

</style>