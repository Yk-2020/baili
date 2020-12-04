<template>
    <div>
        <el-backtop :right="0"   :bottom="300">
            <div
            style="{
                height: 100%;
                width: 100%;
                background-color: #5A5A5A;
                text-align: center;
                line-height: 40px;
                color: #fff;
                border-radius:5px
            }"
            class="el-icon-caret-top"
            >
            
            </div>
        </el-backtop>
        <Header :headerData="headerData" :height="800" :link="'Goods'"></Header>
        <Carousel :CarouselList="CarouselList"></Carousel> 
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
    components:{Header,Carousel,Main,Footer},
    data(){
        return{
            headerData:{url:require('../assets/images/Header.jpg')},
            CarouselList:[
                {path:require('../assets/images/Carouse1.jpg'),type:'img'},
                {path:require('../assets/images/Carouse2.jpg'),type:'img'},
                {path:require('../assets/images/Carouse3.jpg'),type:'img'},
                {path:require('../assets/images/Carouse4.jpg'),type:'img'},
                {path:require('../assets/images/Carouse5.jpg'),type:'img'},
            ],
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>