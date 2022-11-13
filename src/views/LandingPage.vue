<template>
    <div class='landing-page-root'>
        
    </div>
    <div class='landing-page-root-mobile'>

    </div>
</template>

<script>

    export default {
        name: 'LandingPage',
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .landing-page-root {
            display: none;
        }
    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .landing-page-root-mobile {
            display: none;
        }
    }

</style>