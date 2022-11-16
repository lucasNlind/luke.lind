<template>
    <div id='travel' class='travel-section-root'>
        <div class='travel-section-header'>
            I'm from <span class='green'>Atlanta</span>,
        </div>
        <div class='travel-section-sub-header'>
            but I'd be silly not to <span class='blue'>explore</span>.
        </div>
        <div class='image-wrapper'>
            <div class='images-row-one'>
                <div class='image-container'>
                    <img class='image-square' src='https://storage.googleapis.com/luke-lind-portfolio-assets/NEGRIL_JAMAICA.png'/>
                    <div class='overlay-square'>
                        <div class='overlay-text'>Negril, Jamaica</div>
                    </div>
                </div>
                <div class='image-container'>
                    <img class='image-landscape' src='https://storage.googleapis.com/luke-lind-portfolio-assets/ATHENS_GEORGIA.png'/>
                    <div class='overlay-landscape'>
                        <div class='overlay-text'>Athens, Georgia</div>
                    </div>
                </div>
            </div>
            <div class='images-row-two'>
                <div class='images-column-one'>
                    <div class='image-container'>
                        <img class='image-square' src='https://storage.googleapis.com/luke-lind-portfolio-assets/BARCELONA_SPAIN.png'/>
                        <div class='overlay-square'>
                            <div class='overlay-text'>Barcelona, Spain</div>
                        </div>
                    </div>
                    <div class='image-container'>
                        <img class='image-square' src='https://storage.googleapis.com/luke-lind-portfolio-assets/MADRID_SPAIN.png'/>
                        <div class='overlay-square'>
                            <div class='overlay-text'>Madrin, Spain</div>
                        </div>
                    </div>
                </div>
                <div class='images-column-two'>
                    <div class='image-container'>
                        <img class='image-portrait' src='https://storage.googleapis.com/luke-lind-portfolio-assets/ARE_SWEDEN.png'/>
                        <div class='overlay-portrait'>
                            <div class='overlay-text'>Åre, Sweden</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='images-row-three'>
                <div class='image-container'>
                    <img class='image-landscape-two' src='https://storage.googleapis.com/luke-lind-portfolio-assets/ILSE_OF_SKYE_SCOTLAND.png'/>
                    <div class='overlay-landscape-two'>
                        <div class='overlay-text'>Isle of Skye, Scotland</div>
                    </div>
                </div>
                <div class='image-container'>
                    <img class='image-square-two' src='https://storage.googleapis.com/luke-lind-portfolio-assets/CABO_SAN_LUCAS_MEXICO.png'/>
                    <div class='overlay-square-two'>
                        <div class='overlay-text'>Cabo San Lucas, Mexico</div>
                    </div>
                </div>
            </div>
        </div>
        <div class='travel-section-header-bottom'>
            ...just to name a few.
        </div>
    </div>
    <div class='travel-section-root-mobile'>

    </div>
</template>

<script>

    export default {
        display: 'TravelSection',
    }

</script>

<style>

    /* Mobile */
    @media screen and (max-width: 640px) {

        .travel-section-root {
            display: none;
        }

    }

    /* Desktop */
    @media screen and (min-width: 641px) {

        .travel-section-root-mobile {
            display: none;
        }

        .travel-section-root {
            margin: auto;
            width: 57vw;
            padding-top: 10vh;
            margin-top: 13vh;
        }

        .travel-section-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2.5vw;
            margin-bottom: 1vh;
        }

        .travel-section-sub-header {
            cursor: default;
            text-align: left;
            font-family: avenir next;
            font-size: 2vw;
            margin-bottom: 5vh;
        }

        .travel-section-header-bottom {
            cursor: default;
            text-align: right;
            font-family: avenir next;
            font-size: 2.5vw;
            margin-bottom: 1vh;
            width: 55vw;
        }

        .image-wrapper {
            display: flex;
            flex-direction: column;
        }

        .images-row-one {
            display: inline-flex;
        }

        .images-row-two {
            display: inline-flex;
        }

        .images-row-three {
            display: inline-flex;
        }

        .images-column-one {
            display: flex;
            flex-direction: column;
        }

        .image-square {
            margin-right: 1vw;
            margin-bottom: 1vw;
            display: block;
            width: 21vw;
            height: 21vw;
        }

        .image-square-two {
            margin-right: 1vw;
            margin-bottom: 1vw;
            display: block;
            width: 22vw;
            height: 23vw;
        }

        .image-landscape {
            margin-bottom: 1vw;
            margin-right: 1vw;
            display: block;
            height: 21vw;
            width: 33vw;
        }

        .image-landscape-two {
            margin-bottom: 1vw;
            margin-right: 1vw;
            display: block;
            height: 23vw;
            width: 32vw;
        }

        .image-portrait {
            margin-bottom: 1vw;
            display: block;
            height: 43vw;
            width: 33vw;
        }

        .image-container {
            position: relative;
        }

        .overlay-square {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 21vw;
            width: 21vw;
            opacity: 0;
            transition: .5s ease;
            background-color: #616161;
        }

        .overlay-square-two {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 23vw;
            width: 22vw;
            opacity: 0;
            transition: .5s ease;
            background-color: #616161;
        }

        .overlay-landscape {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 21vw;
            width: 33vw;
            opacity: 0;
            transition: .5s ease;
            background-color: #616161;
        }

        .overlay-landscape-two {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 23vw;
            width: 32vw;
            opacity: 0;
            transition: .5s ease;
            background-color: #616161;
        }

        .overlay-portrait {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 43vw;
            width: 33vw;
            opacity: 0;
            transition: .5s ease;
            background-color: #616161;
        }

        .image-container:hover .overlay-square {
            opacity: 0.9;
        }

        .image-container:hover .overlay-landscape {
            opacity: 0.9;
        }

        .image-container:hover .overlay-portrait {
            opacity: 0.9;
        }

        .image-container:hover .overlay-square-two {
            opacity: 0.9;
        }

        .image-container:hover .overlay-landscape-two {
            opacity: 0.9;
        }

        .overlay-text {
            color: white;
            font-size: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .green {
            color: #0F9D58;
        }

        .blue {
            color: #4285F4;
        }

    }

</style>