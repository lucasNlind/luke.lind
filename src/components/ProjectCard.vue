<template>
    <div class='project-card-root' @click="isOpen = true">
        <div class='project-card-section-top'>
            <div class='project-card-title'>{{ title }}</div>
            <img class='loading-icon' src='../assets/loading-icon.svg'/>
        </div>
        <div class='project-card-sub-title'>{{ year }}</div>
        <div class='project-card-description'>{{ description }}</div>
    </div>
    <div class='project-card-root-mobile'>

    </div>
</template>

<script>

    export default {
        name: 'ProjectCard',
        props: {
            title: { type: String, default: '' },
            year: { type: String, default: '' },
            description: { type: String, default: '' },
        },
        emits: ['isOpen']
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .project-card-root {
            display: none;
        }
    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .project-card-root-mobile {
            display: none;
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

    }

</style>