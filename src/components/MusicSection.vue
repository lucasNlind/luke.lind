<template>
    <div id='music' class='music-section-root'>
        <div class='music-section-header'>
            I also make <span class='yellow'>music</span>.
        </div>
        <div class='music-section-sub-header'>
            It’s actually not terrible. Check it out:
        </div>
        <div class='album-image-container'>
            <a target='_blank' href='https://open.spotify.com/album/0rSpEnVXirPKcltA2Gzlkw?si=Nt3KsjIkSae5zKRk7WAcpg'><img class='album-cover' src='https://storage.googleapis.com/luke-lind-portfolio-assets/heaven-cover.png'/></a>
            <a target='_blank' href='https://open.spotify.com/album/0a497HzTX1MGOMx4ZPTvRC?si=cqwAw2StTO281XN1gbz7aw'><img class='album-cover' src='https://storage.googleapis.com/luke-lind-portfolio-assets/lean-on-cover.jpg'/></a>
        </div>
        <div class='music-section-sub-header'>
            Playlists too :)
        </div>
        <div class='album-image-container'>
            <a target='_blank' href='https://open.spotify.com/playlist/2vYyygpxkEk4tWvl7KKyQC?si=1cea777200354b4d'>
                <img class='album-cover' src='https://storage.googleapis.com/luke-lind-portfolio-assets/pool-vibes-cover.jpg'/>
            </a>
            <a target='_blank' href='https://open.spotify.com/playlist/54EYacoUI4h4qNeRtetvUP?si=0ae8cc0919e04e8a'>
                <img class='album-cover' src='https://storage.googleapis.com/luke-lind-portfolio-assets/haus-covevr.jpg'/>
            </a>
            <a target='_blank' href='https://open.spotify.com/playlist/4T9lkk2VoVxL1B3MdXtzvd?si=4af8e9e19eaa4f00'>
                <img class='album-cover' src='https://storage.googleapis.com/luke-lind-portfolio-assets/smooth-cover.JPG'/>
            </a>
        </div>
    </div>
    <div class='music-section-root-mobile'>

    </div>
</template>

<script>

    export default {
        name: 'MusicSection',
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .music-section-root {
            display: none;
        }

    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .music-section-root-mobile {
            display: none;
        }

        .music-section-root {
            margin: auto;
            padding-top: 10vh;
            margin-top: 13vh;
            width: 57vw;
        }

        .music-section-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2.5vw;
            margin-bottom: 1vh;
        }

        .music-section-sub-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2vw;
            margin-bottom: 3vh;
        }

        .album-image-container {
            width: 57vw;
            display: inline-flex;
            justify-content: left;
            margin-bottom: 2vh;
        }

        .album-cover {
            width: 18vw;
            height: 18vw;
            margin-right: 1vw;
            transition: transform 0.4s;
        }

        .album-cover:hover {
            transform: scale(1.01);
        }

        .yellow {
            color: #F4B400;
        }

    }

</style>