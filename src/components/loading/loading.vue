<template>
    <div class="yq-loading-mask" :class="[customClass,{'is-fullscreen':fullscreen}]">
        <div class="yq-loading-spinner">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
            <p v-if="text" class="yq-loading-text">{{text}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                text: null,
                fullscreen: true,
                customClass: ""

            };
        }
    };
</script>
<style>
    .yq-loading-mask {
        position: absolute;
        z-index: 10000;
        background-color: hsla(0,0%,100%,.9);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .yq-loading-mask.is-fullscreen {
        position: fixed
    }

    .yq-loading-mask.is-fullscreen .yq-loading-spinner {
        margin-top: -25px
    }

    .yq-loading-mask.is-fullscreen .yq-loading-spinner .circular {
        width: 50px
    }

    .yq-loading-spinner {
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute
    }

    .yq-loading-spinner .yq-loading-text {
        color: #20a0ff;
        margin: 3px 0;
        font-size: 14px
    }

    .yq-loading-spinner .circular {
        width: 42px;
        animation: rotate 2s linear infinite;
    }

    .yq-loading-spinner .path {
        animation: dash 1.5s ease-in-out infinite;
        stroke-dasharray: 1,100;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #20a0ff;
        stroke-linecap: round;
    }
    @keyframes rotate {
        to {
            transform: rotate(1turn)
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1,150;
            stroke-dashoffset: 0
        }

        50% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -35
        }

        to {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -124
        }
    }
</style>
