<template>
    <div class="piczoom-box">
        <div class="box">
            <pic-zoom :url="imgurl" :scale="3" :scroll="true" :show-eidt="true"></pic-zoom>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item,index) in file" 
                    :key="index" 
                    @mouseenter="changeImage(index,item.path)"
                    :style="imgAction==index?'border-bottom:5px solid #ccc':'' "
                >
                    <img :src="item.path" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import PicZoom from "vue-piczoom"
export default {
    props:['file'],
    data(){
            return{
              imgurl:this._props.file[0].path,
              imagesList:[
                 
              ],
              imgAction:0
            }
         },
        components:{
          PicZoom
        },
      methods:{
        changeImage:function (index,path) {
             this.imgAction = index
             this.imgurl=path;
        }
      }
}
</script>

<style>
.piczoom-box .box{
  width: 600px;
  height: 450px;
}
.piczoom-box .list{
  width: 600px;
  height: 150px;
}
.piczoom-box .list ul{
    width: 600px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
}
.piczoom-box .list ul li{
    width:200px;
    height: 150px;
    background-color: white;
    margin-top: 15px;
    margin-right: 15px;
  }
.piczoom-box .list ul li img{
    width: 200px;
    height: 150px;
  }
</style>