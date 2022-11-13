<template>
    <div class='footer-section-root'>
        <div class='footer-balls-container'>
            <div class='ball-red ball-margin-right'></div>
            <div class='ball-yellow ball-margin-right'></div>
            <div class='ball-green ball-margin-right'></div>
            <div class='ball-blue'></div>
        </div>
        <div class='footer-section-header'>Thanks for making it to the bottom!</div>
        <div class='footer-section-sub-header'>I'm glad you made it. Let's <a target='_blank' href='https://www.linkedin.com/in/lucas-lind-a7197a1b4/' class='linked-in-link'>connect</a>.</div>
    </div>
    <div class='footer-section-root-mobile'>

    </div>
</template>

<script>

    export default {
        name: 'FooterSection',
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .footer-section-root {
            display: none;
        }

    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .footer-section-root-mobile {
            display: none;
        }

        .footer-balls-container {
            width: 57vw;
            display: inline-flex;
            margin-bottom: 1vw;
        }

        .ball-margin-right {
            margin-right: 1vw;
        }

        .ball-red {
            background-color: #DE5246;
            height: 3vw;
            width: 3vw;
            border-radius: 50%;
        }

        .ball-yellow {
            background-color: #F4B400;
            height: 3vw;
            width: 3vw;
            border-radius: 50%;
        }

        .ball-blue {
            background-color: #4285F4;
            height: 3vw;
            width: 3vw;
            border-radius: 50%;
        }

        .ball-green {
            background-color: #0F9D58;
            height: 3vw;
            width: 3vw;
            border-radius: 50%;
        }

        .footer-section-root {
            margin: auto;
            margin-top: 23vh;
            width: 57vw;
        }

        .footer-section-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2.5vw;
            margin-bottom: 1vh;
        }

        .footer-section-sub-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2vw;
            margin-bottom: 3vh;
        }

        .linked-in-link {
            text-decoration: none;
            color: #4285F4;
            cursor: pointer;
        }

    }

</style>