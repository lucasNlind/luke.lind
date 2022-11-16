<template>
    <div id='work' class='work-section-root'>
        <div class='work-section-header'>
            Here's where I've worked
        </div>
        <div class='work-section-sub-header'>
            (and where I'm going)
        </div>
        <div class='card-wrapper'>
            <div class='card-row'>
                <a target='_blank' href='https://www.mckinsey.com/'><img src='../assets/logo-mckinsey.png' class='card'/></a>
                <a target='_blank' href='https://www.morningstar.com/'><img src='../assets/logo-morningstar.png' class='card border'/></a>
                <a target='_blank' href='https://junilearning.com/'><img src='../assets/logo-juni.png' class='card'/></a>
            </div>
            <div class='card-row'>
                <a target='_blank' href='https://www.kry.se/en/about/'><img src='../assets/logo-kry.png' class='card border'/></a>
            </div>
        </div>
    </div>
    <div class='work-section-root-mobile'>

    </div>
</template>

<script>

    export default {
        name: 'WorkSection',
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .work-section-root {
            display: none;
        }

    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .work-section-root-mobile {
            display: none;
        }

        .work-section-root {
            margin: auto;
            width: 57vw;
            padding-top: 10vh;
        }

        .work-section-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2.5vw;
            margin-bottom: 1vh;
        }

        .work-section-sub-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2vw;
            margin-bottom: 5vh;
        }

        .card-wrapper {
            display: flex;
            flex-direction: column;
        }

        .card-row {
            display: inline-flex;
        }

        .card {
            cursor: pointer;
            width: 18vw;
            height: 18vw;
            margin-right: 1vw;
            margin-bottom: 1vw;
            border-radius: 10px;
            transition: transform 0.4s;
        }

        .card:hover {
            transform: scale(1.01);
        }

        .border {
            border: 2px solid #cccccc;
            border-radius: 10px;
        }

    }

</style>