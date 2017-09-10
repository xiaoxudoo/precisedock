<template>
  <div id="video_wrapper" :class="{'video-alert': true, 'video_alert_show': show}">
    <div class="close" @click="close">关闭</div>
    <div id="myvideo"></div>
  </div>
</template>

<script>
module.exports = {
    props: {
        data: {
            type: Object,
            required: true,
            validator: function (value) {
                if (toString.call(value) != "[object Object]") {
                    console.error('c-video must have a data param like this:', JSON.stringify({
                        show: false
                    }));
                    return -1;
                }
                return value;
            }
        },
        gameid: [String, Number]
    },
    data() {
        var that = this;
        return {
            show: that.data.show
        };
    },
    methods: {
        /**
         * @desc 播放视频
         * @param source
         *        {
         *          src: "", 视频资源
         *          poster: "", //封面
         *          autoplay: true || false // 不传默认为false
         *        }
         */
        popVideo: function(source) {
            var _this = this
            var video = $('#myvideo'),
                container = $('.video-alert');
            var w = video.width(),
                h = null;
            if (util.sys.isAndroid() && (util.app.isMIBrowser() || util.app.isQQ() || util.app.isWeixin())) {
                var $va = container.addClass('mibrower');
                video.css('height',($va.height()-$va.find('.close').height())+'px');
                h = video.height();
            } else {
                h = container.height();
            }

            var player = jwplayer('myvideo').setup({
                width: w,
                height: h,
                file: source.src,
                image: source.poster,
                controls: true,
                events: {
                    onComplete: function () {

                    },
                    onStop: function () {

                    },
                    onReady: function () {

                    },
                    onPlay: function () {
                    },
                    onPause: function () {
                      _this.$store.dispatch('sendStatistic', {fuid: 'click-videoPause', curpageid: _this.gameid});
                    },
                    onBuffer: function () {
                    },
                    onDisplayClick: function () {
                    },
                    onBufferChange: function () {
                    },
                    onBufferFull: function () {
                    }
                }
            });
            if (source.autoplay) {
                player.play();
            }
            container.addClass('video_alert_show');
            // _this.OpenMask()
        },
        // 关闭视频按钮监听
        close: function() {
            var _this = this
            $('#video_wrapper').removeClass('video_alert_show');
            $('#myvideo').children().remove();
            // _this.CloseMask()
        }
        // handler: function() {
        //   event.preventDefault();
        //   event.stopPropagation();
        // },
        // OpenMask: function() {
        //   var _this = this
        //   document.body.addEventListener('touchmove', _this.handler, false);
        //   document.body.addEventListener('wheel', _this.handler, false);
        // },
        // CloseMask: function() {
        //   var _this = this
        //   document.body.removeEventListener('touchmove', _this.handler, false);
        //   document.body.removeEventListener('wheel', _this.handler, false);
        // }
    },
    created: function () {
      var _this = this
      this.$root.eventHub.$on('popVideo', (source)=>{
          _this.popVideo(source)
      })
    },
    destroyed: function() {
      // this.CloseMask()
      console.log('destroyed')
    }
}
</script>

<style scoped lang="scss">
  @import "../../sass/base.scss";
  .video-alert {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -100000;
    opacity: 0;
    background: #060606;
  }

  .video_alert_show {
    z-index: 100000;
    opacity: 1;
  }
  #myvideo {
    position: absolute;
    width: 100%;
    height: 100%;
    
    bottom: 0;
  }

  .close {
    color: #fff;
    font-size: 0.5rem;
    width: 20%;
    text-align: center;
    position: absolute;
    right: 0;
    padding: 5% 0;
    z-index:1;
  }
  .video-alert.mibrower #myvideo{
    position:relative;
    height:80%;
    top: 0;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }
  .video-alert.mibrower .close{
    position:relative;
    width:100%;
    text-align:right;
    padding:5%;
    box-sizing:border-box;
  }

  .jwfullscreen {
    display: none !important;
  }

  .jwplayer #myvideo_display_button_buffer {
    background-image: url("data:image/png;base64,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") !important;
    animation: loading_video 1s linear infinite;
    -webkit-animation: loading_video 1s linear infinite;
  }

  .jwplayer #myvideo_display_button_replay {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAADOElEQVR4Ae2VUWhbVRjH/0nqdk0m0eTGITVZNsmiZCLTlooNPoWlbk27lzmGSIeyh7YgFSYaGO2yDZk4GMi65kG9d6kkbfCuyf1bqZmmlsYxCK51KwxkrpM4qBRla18cIngvw0qgN7ea1/z+L4fDn4/vO+c730G9NGjQQIALj8CKumn+afjIQWyDHRbUxTO/8w/Ojux9Bc0Q6gn27B3eoRZM5Zm2l7EVm/5bMAsEiPAjiFiFun7hXa5MjJ7Y1gI3mjYaxA5vZzSdmJeWlfvqz/xHFd7jr5+fP+rYgU0wpQlibE8peV+9yyVWeJuLVapwleU4tsCEh9B8sn8lt8SbBprJvHUEXrOMmuCVj61o9h81fXEhEY/GHAf09QOVlaF3N4fgNDsjCzxnBn7jDU3T2TfexE64IeC5G9Q1lz/7/vY2iBs5aHtndCm/wAXmUtvb8ShsD/pogdf46bm2CJ7Qr16THY87t0Iwzsf77ch1/sBCdmcYjrVuaZ4813UAPjwMC3SXsztS+ujqWTxp1E9CV8ct9Sq/56EeOGGpemtb1t6a9bXdq7nbvKV2dRjlJKaOl1lm+gICsME47x1jsu5LHYeIdfEXpCu8wsE43KiFezCu+woS/FiX4KxSYon7YhBQC2FfTPfNKghiXUIldYYzdLfChlpYxRbd952KkEGgr9Uii3z6JbNAnhbd941hoOBF5RIv8WC3SWmbuzt130XD0vyfSFOc4gfvwIVauD48qvs+Njxs8URikpOckmtevw2Br2Tdd9Lw+oVIR15VeZl91Q1Z3UXOvp7LVJlXI4YNaYHvdHKCE7ye3fXvE6l2OHaFr43rntNJ+IxHrj0czeQVFjifCrbDCRuqi3IG2+dTBSrM5MNR2GuOkcMD48xymotZrcAAXBBghQ0C3Aj09Sxmp5nlOA8PwAOLyWDrPZbhGL/kMufkkff2xx5rferFQ/vPx+fkZW13jBn2D8KrOc1H7av9ci7NNIu8yVX+xT95T1sVqe/J+dffhldzYUPD/4U9Q8lR9TNWa5RDyeej8BhkY/Qd7Y72Jk5Jw4qkSuqwckrqTbTuhc/44zb/IEOagtpK/N8fdoMGDf4G6kd7103/csoAAAAASUVORK5CYII=") !important;
  }

  @keyframes loading_video {
    0% {
      transform: rotate(0deg);
    }

    20% {
      transform: rotate(72deg);
    }

    40% {
      transform: rotate(144deg);
    }

    60% {
      transform: rotate(216deg);
    }

    80% {
      transform: rotate(288deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loading_video {
    0% {
      -webkit-transform: rotate(0deg);
    }

    20% {
      -webkit-transform: rotate(72deg);
    }

    40% {
      -webkit-transform: rotate(144deg);
    }

    60% {
      -webkit-transform: rotate(216deg);
    }

    80% {
      -webkit-transform: rotate(288deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

/* 视频样式end */
</style>
