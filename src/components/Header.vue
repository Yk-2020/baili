<template>
<div id="Header" :style="{backgroundImage:'url(' + headerData.url + ')',height:height?height+'px':'320px'}" >
    <slot></slot>
</div>
</template>

<script>
export default {
    props: ['headerData', 'height' ],
    data() {
        return {

        }
    },
    methods: {
      
    }
}
</script>

<style>
#Header {
    position: relative;
    height: 600px;
    width: 100%;
    background: #ccc;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#Header h1,#Header p{
    color: #fff;
    text-shadow: 10px 10px 20px rgba(0,0,0,0.5);
}
#Header h1{
    font-size: 40px;
}
#Header p{
    width: 30%;
    font-size: 30px;
    margin:30px 0 ;
}
#Header img {
    height: 400px;
}

#Header .title {
    position: absolute;
    bottom: 20px;
    margin: 0 auto;
}
</style>
