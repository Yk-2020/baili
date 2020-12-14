<template>
    <div calss="container">
          
    </div>
    
</template>

<script>
export default {
    props:['src','height','isPlayer','Id'],
    data() {
         return {
            
        }
    },
    computed:{
        _isPlayer(){
            return this.isPlayer
        },
        player() {
            return this.$refs['videoPlayer'+this.Id].player
        }
    },
    mounted(){
            const myplayer = this.$refs['videoPlayer'+this._props.Id].player
            this.play(myplayer)
    },
    methods: {
        Pause(){
            const player = this.$refs['videoPlayer'+this._props.Id].player
            player.Pause()
        },
        play(player){
            player.play()  
        },
       
    },
    watch:{
        _isPlayer:{
            handler:function(flag){
                if(flag){
                    console.log(111)
                }else{

                }
            },
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