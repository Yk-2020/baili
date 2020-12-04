<template>
  <el-carousel id="Carousel" :interval="4000" type="card" height="480px" style="margin-top: 20px;margin-top: 20px;">
    <el-carousel-item v-for="(item,i) in CarouselList" :key="i">
        <div class="img-box">
            <Video v-if="item.type=='vide'" :height="'480'" :src="item.path"></Video>
            <el-image v-else :src="item.path"></el-image>
        </div>
      
      
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Video from './Video'
export default {
    components:{Video},
    props:['CarouselList']
}
</script>

<style>
    #Carousel .img-box{
        position: relative;
        height: 100%;
    }
    #Carousel div.el-image{
        height: 100%;
    }
</style>