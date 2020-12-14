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
                        <h1><i class="el-icon-s-custom"></i>+</h1>
                        <div class="link">More</div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <el-row class="item-2">
        <el-col :span="6" class="item-box" @click="fnLink('CRILLS')">
            <img src="../assets/images/Coffee_maker.jpg" alt="">
            <span class="title">Coffee maker</span>
        </el-col>
        <el-col :span="6" class="item-box" @click="fnLink('COOLERS')">

            <img src="../assets/images/Grill.png" alt="">
            <span class="title">Grill</span>
        </el-col>
        <el-col :span="6" class="item-box" @click="fnLink('COOLERS')">

            <img src="../assets/images/Table_Chair.jpg" alt="">
            <span class="title">Table & Chair</span>
        </el-col>
        <el-col :span="6" class="item-box" @click="fnLink('COOLERS')">

            <img src="../assets/images/Hammock.jpg" alt="">
            <span class="title">Hammock</span>
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
        <h2>WHY CUSTOMER CHOOSE<span>“MARVELOUS”</span></h2>
        <div class="link"></div>
        <div>
            <el-col :span="6" v-for="(v,i) in scene" :key="i" class="col"><img :src="v.path" alt=""></el-col>
        </div>
    </el-row>
    <el-row class="item-5">
        
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

export default {
    data() {
        return {
            scene:[
                {path:require('../assets/images/Footimg1.png')},
                {path:require('../assets/images/Footimg2.jpg')},
                {path:require('../assets/images/Footimg3.jpg')},
                {path:require('../assets/images/Footimg4.jpg')}

            ],
            testimonials: [
                {testimonials:`
                    <h4>YEARS  PRODUCTION  EXPERIENCE</h4>
                    <p>We have many years experience for camping products production and marketing, all of our staffs and sales team also have rich experience to make sure we can meet any requirement from our customers.</p>
                `},
                {testimonials:`
                    <h4>R&D ABILITY</h4>
                    <p>We have our own R&D department for developing new products, we welcome any new design or new products type from our customers.</p>
                `},
                {testimonials:`
                    <h4>HIGH QAULITY PRODUCTS</h4>
                    <p>We always keep our eye on the products quality and packing safety, we have inspection team for inspecting every products to make sure we can offer high quality camping products.</p>
                `},
                {testimonials:`
                    <h4>HIGH QAULITY PRODUCTS</h4>
                    <p>We always keep our eye on the products quality and packing safety, we have inspection team for inspecting every products to make sure we can offer high quality camping products.</p>
                `},
                {testimonials:`
                    <h4>GOOD COMMUNICATION</h4>
                    <p>Our sales team have rich experience on camping products, we can exactly understand what our customer want and what should we do for them. Customer satisfaction is our biggest priority</p>
                `},
                {testimonials:`
                    <h4>GOOD After SERVICE</h4>
                    <p>We offer our good after sell service , not only on camping products but also on any requirement raise by the customers.</p>
                `},
            ],
            
            estimonialsAction: 0
        }
    },
    mounted() {
        
        
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
    width: 90%;
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
    margin-bottom:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
#main .item-4 .link{
    border-bottom: 1px solid #ccc;
    position: absolute;
    width: 100%;
    height: 1px;
    top: 10px;
}
#main .item-4 h2 {
    margin-bottom: 20px;
    font-size: 20px;
    background: #fff;
    z-index: 9;
    padding: 0 10px;
}

#main .item-4 h2 span {
    color: #A1415A
}

#main .item-4 .col img {
    width:99%;
    height: 223px;
}

#main .item-5 .carousel-box {
    display: flex;
    justify-content: space-around;
    position: relative;
    height: 140px;
}

#main .item-5 .carousel-item {
    width: 33%;
    padding: 10px;
    height: 100%;
}
#main .item-5 .carousel-item p{
    font-size: 12px;
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
@media screen and (max-width: 1200px) {
    #main {
        padding: 30px;
        width: 999px;
        margin: 0 auto;
    }
    #main .item-3 {
    height: 350px;
    }
}

@media screen and (max-width: 1870px) {
    #main {
    padding: 30px;
    width: 1414px;
    margin: 0 auto;
    }
    #main .item-1, #main .item-3 {
        height: 350px;
    }
    #main .item-box img {
        height: 300px;
    }
}
@media screen and (max-width: 1654px) {
    #main {
    padding: 30px;
    width: 1198px;
    margin: 0 auto;
    }
    #main .item-1, #main .item-3 {
        height: 450px;
    }
    #main .item-box img {
        height: 260px;
    }
}
@media screen and (max-width: 1200px) {
    #main {
        padding: 30px;
        width: 999px;
        margin: 0 auto;
    }
    #main .item-1, #main .item-3 {
        height: 350px;
    }
    #main .item-box img {
        height: 220px;
    }
    
}
</style>
