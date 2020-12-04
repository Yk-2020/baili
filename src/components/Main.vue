<template>
<div id="main">
    <el-row class="item-1">
        <el-col :span="14" class="left-item">
            <div class="title-box" @click="fnLink('TENTS')">
                <h1>Tents</h1>
                <p>stay dry and comfy matter what autumn winds bring</p>
                <span class="link">SHOP NOW</span>
            </div>
        </el-col>
        <el-col :span="10" class="right-item">
            <el-row class="right-row">
                <el-col :span="12" class="right-col" >
                    <div  @click="fnLink('TENTS','2-3')">
                        <h1>2-3<i class="el-icon-s-custom"></i></h1>
                        <div class="link" >show for 2-3</div>
                    </div>
                </el-col>
                <el-col :span="12" class="right-col" >
                    <div @click="fnLink('TENTS','4-5')">
                        <h1>4-5<i class="el-icon-s-custom"></i></h1>
                        <div class="link">show for 4-5</div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="right-row">
                <el-col :span="12" class="right-col" >
                    <div @click="fnLink('TENTS','6')">
                        <h1>6<i class="el-icon-s-custom"></i></h1>
                        <div class="link">show for 6</div>
                    </div>
                </el-col>
                <el-col :span="12" class="right-col" >
                    <div @click="fnLink('TENTS','7+')">
                        <h1>7+<i class="el-icon-s-custom"></i></h1>
                        <div class="link">show for 7+</div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <el-row class="item-2">
        <el-col :span="8" class="item-box" @click="fnLink('LIGHTING')">
            <img src="../assets/images/LIGHTING.jpg" alt="">
            <span class="title">LIGHTING</span>
        </el-col>
        <el-col :span="8" class="item-box" @click="fnLink('CRILLS')">
            <img src="../assets/images/CRILLS.jpg" alt="">
            <span class="title">CRILLS</span>
        </el-col>
        <el-col :span="8" class="item-box" @click="fnLink('COOLERS')">

            <img src="../assets/images/COOLERS.jpg" alt="">
            <span class="title">COOLERS</span>
        </el-col>
    </el-row>
    <el-row class="item-3">
        <el-col :span="10" class="left-item">
            <div class="title-box" @click="fnLink('SlEEPINGBAGS')">
                <h1>Sleeping Bags</h1>
                <p>Enjoy all-night coziness from head to toe</p>
                <span class="link" >SHOP NOW</span>
            </div>
        </el-col>
        <el-col :span="14" class="right-item"></el-col>
    </el-row>
    <el-row class="item-4">
        <h1>Show Us you Campsite<span>#GetOutdoors</span></h1>
        <div>
            <el-col :span="6" v-for="(v,i) in scene" :key="i" class="col"><img :src="v.path" alt=""></el-col>
        </div>
    </el-row>
    <el-row class="item-5">
        <h2>#PACKFORLIFE</h2>
        <h1>
            TESTIMONIALS
        </h1>
        <div class="carousel-box">
            <div class="carousel-item" v-for="(v,i) in testimonials" v-show="i>=estimonialsAction*3&&i<(estimonialsAction+1)*3" :key="i">
                <div v-html="v.testimonials">
                </div>
            </div>
            <div class="btn-box">
                <span v-for="i in Math.ceil(testimonials.length/3)" :class="{'Action':i-1==estimonialsAction}" :key="i" @click="fnTestimonialsAction(i)"></span>
            </div>
        </div>
    </el-row>
</div>
</template>

<script>
import {
    selectTestimonials,
    selectScene
} from '@/request/api'
export default {
    data() {
        return {
            testimonials: [],
            scene: [],
            estimonialsAction: 0
        }
    },
    mounted() {
        selectTestimonials({}).then(res => {
            if (res.isSuccess) {
                this.testimonials = res.data
            }
        })
        selectScene({}).then(res => {
            if (res.isSuccess) {
                this.scene = JSON.parse(res.data[0].scene)
            }
        })
    },
    methods: {
        fnLink(type, specs) {
            console.log(111)
            this.$router.push({
                name: 'Goods',
                params: {
                    type: type,
                    specs: specs
                }
            })
        },
        fnTestimonialsAction(index) {
            this.estimonialsAction = index - 1
        }
    }
}
</script>

<style>
#main {
    padding: 30px;
    width: 1800px;
    margin: 0 auto;
}

#main .item-box {
    display: flex;
    justify-content: flex-start;
}

#main .img {
    width: 100%;
}

#main .item-1,
#main .item-3 {
    height: 550px;
}

#main .item-1 .left-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: url('../assets/images/Tents.jpg') center;
    background-size: 100% 100%;
    box-sizing: border-box;
    border-right: 10px solid #fff;
    cursor:pointer;
}

#main .item-1 .left-item:hover .title-box {
    text-shadow: 0 0 50px #ccc;
}

#main .item-1 .right-item {
    height: 100%;
}

#main .item-1 .right-item .right-col:hover {
    cursor:pointer;
    background: rgb(220, 220, 220)
}


#main .item-1 .left-item .title-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 50%;
    color: #fff;
}

#main .item-1 .left-item .title-box h1 {
    font-size: 40px;
}

#main .item-1 .left-item .title-box .link {
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #fff;
}

#main .right-row {
    height: 50%;

}

#main .right-row:nth-child(1) {
    border-bottom: 5px solid #fff;
}

#main .right-row:nth-child(2) {
    border-top: 5px solid #fff;
}
#main .right-col{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1
}
#main .right-col >div{
    padding: 80px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#main .right-col:nth-child(1) {
    border-right: 5px solid #fff;
}

#main .right-col:nth-child(2) {
    border-left: 5px solid #fff;
}

#main .right-col h1 {
    font-size: 36px
}

#main .right-col .link {
    font-size: 24px;
    border-bottom: 1px solid #000;
    font-weight: bold;
}

#main .item-2 {
    margin-top: 20px;

}

#main .item-box img {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
}

#main .item-box {
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}

#main .item-box:last-child {
    padding: 0
}

#main .item-box .title {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid rgba(0, 0, 0, 0)
}

#main .item-box:hover .title {
    border-bottom: 2px solid #000
}

#main .item-3 {
    margin-top: 20px;
}

#main .item-3 .left-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgb(241, 241, 241)
}

#main .item-3 .title-box {
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#main .item-3 .link {
    border-bottom: 2px solid rgba(0, 0, 0, 0)
}

#main .item-3:hover .link {
    border-bottom: 2px solid #000
}

#main .item-3 .right-item {
    height: 100%;
    background: url('../assets/images/Sleep.jpg') center no-repeat;
    background-size: 100% 100%;
}

#main .item-4 {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#main .item-4 h1 {
    margin-bottom: 20px;
    font-size: 20px;
}

#main .item-4 h1 span {
    color: #A1415A
}

#main .item-4 .col img {
    width: 100%;
    height: 223px;
}

#main .item-5 .carousel-box {
    display: flex;
    justify-content: space-around;
    position: relative;
    height: 200px;
}

#main .item-5 .carousel-item {
    width: 33%;
    padding: 10px;
    height: 100%;
}

#main .item-5 .carousel-box .btn-box {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

#main .item-5 .carousel-box .btn-box span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .3);
    display: block;
    margin: 3px;
    text-align: center;
}

#main .item-5 .carousel-box .btn-box .Action {
    background: #000;
}
</style>
