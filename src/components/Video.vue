<template>
    <div calss="container">
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions"
        ></video-player>
    </div>
    
</template>

<script>
export default {
    props:['src','height'],
    data() {
         return {
             playerOptions: {
                 height:this._props.height,
                 playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                 autoplay: false, //如果true,浏览器准备好时开始回放。
                 muted: false, // 默认情况下将会消除任何音频。
                 loop: false, // 导致视频一结束就重新开始。
                 preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
               
                fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: "",
                    src: this._props.src //视频url地址
                }],
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                }
            }
        }
    }
}
</script>

<style>
    .container {
        background-color: #efefef;
        min-height: 100%;
    }
</style>