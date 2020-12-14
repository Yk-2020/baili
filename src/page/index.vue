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
        <Header :headerData="headerData" :height="800" >
            <h1>
                The Trails Are Calling
            </h1>
            <p>Cool weather, fall foliage, and more time to spend outside with your crew? Sounds like the perfect time to take a hike.</p>
            <el-button @click="fnHome" >Explore More</el-button>
        </Header>
        <Menu :Data="menus" :backgroundColor="'#2d2926'" :activeTextColor="'#FFF'"></Menu>
        <Carousel :CarouselList="CarouselList"></Carousel> 
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
import Menu from '@/components/Menu'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
    components:{Header,Carousel,Main,Footer,Menu},
    data(){
        return{
            headerData:{url:require('../assets/images/Header.jpg')},
            CarouselList:[
                {id:0,path:require('../assets/vide/vide1.mp4'),type:'vide',isPlayer:false},
                {id:1,path:require('../assets/vide/vide1.mp4'),type:'vide',isPlayer:false},
                {id:2,path:require('../assets/vide/vide1.mp4'),type:'vide',isPlayer:false},
                {id:3,path:require('../assets/vide/vide2.mp4'),type:'vide',isPlayer:false},
                {id:4,path:require('../assets/vide/vide2.mp4'),type:'vide',isPlayer:false},
                {id:5,path:require('../assets/vide/vide2.mp4'),type:'vide',isPlayer:false},
                {id:6,path:require('../assets/vide/vide2.mp4'),type:'vide',isPlayer:false},     
            ],
            menus : [
                {
                    "path": "/func1",     
                    "title": "CAMPING TENT ",     
                    "children":[
                    {
                        "path": "/func11",
                        "title": "Car Rooftop Tent",
                        "children":[
                            {
                                "path": "/func111",
                                "title": "Soft Roof Tent(2-3)",
                                "children":[]
                            },
                            {
                                "path": "/func112",
                                "title": "Hard Roof Tent",
                                "children":[]
                            },
                            {
                                "path": "/func113",
                                "title": "New Hard Roof Tent (2-3)",
                                "children":[]
                            },
                            {
                                "path": "/func114",
                                "title": "Extensional Hard Roof Ten",
                                "children":[]
                            },
                        ]
                    },
                    {
                        "path": "/func12",
                        "title": "Camping roof top tent",
                        "children":[]
                    },
                    {
                        "path": "/func13",
                        "title": "Pet tent",
                        "children":[]
                    },
                    {
                        "path": "/func14",
                        "title": "Kid Tent",
                        "children":[]
                    },
                    ]     
                },
                {
                    "path": "/func2",
                    "title": "CAMPING FACILITY",
                    "children":[
                    {
                        "path": "/func21",
                        "title": "Portable coffee maker",
                        "children":[]
                    },
                    {
                        "path": "/func22",
                        "title": "Camping light",
                        "children":[]
                    },
                    {
                        "path": "/func23",
                        "title": "Outdoor barbeques ",
                        "children":[]
                    },
                    {
                        "path": "/func24",
                        "title": "Table and Chairs",
                        "children":[]
                    },
                    ]
                },
                {
                    "path": "/func3",
                    "title": "OTHER SUPPORTING",
                    "children": [
                    {
                        "path": "/func31",
                        "title": "Sleeping bag and Pillow",
                        "children":[]
                    },
                    {
                        "path": "/func32",
                        "title": "Yoga mat ",
                        "children":[]
                    },
                    {
                        "path": "/func33",
                        "title": "Camping tarp shelter ",
                        "children":[]
                    },
                    {
                        "path": "/func34",
                        "title": "Accessories",
                        "children":[]
                    },
                    ]
                },
                {
                    "path": "/func4",
                    "title": "MARVELOUS DIY PRODUCTS",
                    "children":[

                    ]
                },
                {
                    "path": "/INTRODUCE",
                    "title": "WHO WE ARE",
                    "children":[]
                },
                {
                    "path": "/func6",
                    "title": "CONTACT US",
                    "children":[]
                }
            ]
                    
        }
    },
    mounted(){
        
    },
    methods:{
        fnHome() {
            this.$router.push({
                    name: 'Goods'
                })
        }
    }
}
</script>

<style>

</style>