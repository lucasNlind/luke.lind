<template>
    <link rel="stylesheet" href="https://use.typekit.net/tru2emh.css" />
    <div class='navigation-bar-root'>
        <div class='navigation-bar-section-left'>
            <div class='navigation-bar-link-home'>
                <span class='link'>home</span>
            </div>
        </div>
        <div class='navigation-bar-section-right'>
            <div class='navigation-bar-link' @click='scrollToProjects()'>
                <span class='link link-red'>projects</span>
            </div>
            <div class='navigation-bar-link' @click='scrollToWork()'>
                <span class='link link-green'>work</span>
            </div>
            <div class='navigation-bar-link' @click='scrollToTravel()'>
                <span class='link link-blue'>travel</span>
            </div>
            <div class='navigation-bar-link' @click='scrollToMusic()'>
                <span class='link link-yellow'>music</span>
            </div>
        </div>
    </div>
    <div class='navigation-bar-root-mobile'>
        
    </div>
</template>

<script>

    export default {
        name: 'NavigationBar',
        methods: {
            scrollToProjects() {
                window.scrollTo( { top: 700, behavior: 'smooth' } );
            },
            scrollToWork() {
                window.scrollTo( { top: 1925, behavior: 'smooth' } );
            },
            scrollToTravel() {
                window.scrollTo( { top: 2800, behavior: 'smooth' } );
            },
            scrollToMusic() {
                window.scrollTo( { top: 4475, behavior: 'smooth' } );
            }
        }
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .navigation-bar-root {
            display: none;
        }
    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .navigation-bar-root-mobile {
            display: none;
        }

        .navigation-bar-root {
            width: 100%;
            height: 10vh;
            font-family: avenir next;
            line-height: 10vh;
            font-weight: 400;
            font-size: 1.6vw;
            position: sticky;
            top: 0;
            z-index: 1;
            background-color: white;
            opacity: 0.8;
        }

        .navigation-bar-section-left {
            width: 50%;
            display: inline-flex;
            justify-content: left;
        }

        .navigation-bar-section-right {
            width: 50%;
            display: inline-flex;
            justify-content: right;
        }

        .navigation-bar-link-home {
            cursor: pointer;
            padding-left: 3.5vw;
        }

        .navigation-bar-link {
            cursor: pointer;
            height: 20%;
            padding-right: 3.5vw;
        }

        .link {
            padding-bottom: 1vh;
        }

        .link-red:hover {
            color: #DE5246;
        }

        .link-green:hover {
            color: #0F9D58;
        }

        .link-blue:hover {
            color: #4285F4;
        }

        .link-yellow:hover {
            color: #F4B400;
        }
        
    }

    

</style>