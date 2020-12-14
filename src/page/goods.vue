<template>
  <div id="Goods">
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
        <Header :headerData="headerData">
            <div style="width: 100%;
    height: 100%;" @click="fnHome">
            </div>
        </Header>
        <el-container>
            <el-aside width="200px" >
                <ul class="aside-box">
                    <ol>SHOP</ol>
                    <li>
                        <el-link @click="fnUpload('TENTS')">Tents</el-link><i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <el-link @click="fnUpload('LIGHTING')">Lighting</el-link><i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <el-link @click="fnUpload('CRILLS')">Crills</el-link><i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <el-link @click="fnUpload('COOLERS')">Coolers</el-link><i class="el-icon-arrow-right"></i>
                    </li>
                    <li>
                        <el-link @click="fnUpload('SlEEPINGBAGS')">SleepingBags</el-link><i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <div class="goods-box">
                    <div  v-for="(v,i) in goods" :key="i" class="img-box" @click="fnDetail(v)">
                        <el-image :src="v.goodsFile?JSON.parse(v.goodsFile)[0].path:''" >
                            <div slot="error" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                        <!-- <img  :src="v.goodsFile?JSON.parse(v.goodsFile)[0].path:''" /> -->
                        <h5>{{v.goodsTitle}}</h5>
                        <span>{{v.goodsCompany}}{{(v.goodsPrice-0).toFixed(2)}}</span>
                    </div>
                </div>
                <div class="pagination-box">
                    <el-pagination
                        :hide-on-single-page="pageCount<=10?false:true"
                        layout="prev, pager, next"
                        :total="pageCount"
                        @current-change="pageChange">
                    </el-pagination>
                </div>
                
            </el-main>
        </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components:{Header},
    data(){
        return{
            headerData:{url:require('../assets/images/goodsHeader.jpg')},
            num:'',
            page:1,
            pageCount:0,
            goods:[]
        }
    },

    methods:{
        fnHome(){
            this.$router.push({
                    path: '/'
                })
        },
        fnDetail(data){
            let routeData = this.$router.resolve({
                name: "Detail",
                query:{id:data.goodsId}
            });
            window.open(routeData.href, '_blank');
        },
        pageChange(val){
            this.page=val
        },
        uploadPage(num){
          let _this = this
          
        },
        fnUpload(type,specs){
            let _this = this
            
        }
    },
    watch:{
        page:{
            handler(val){
            this.uploadPage(val)
            },
            immediate:true,
            deep:true
        },
    }
}
</script>

<style>
    .aside-box{
        position: absolute;
        min-height: 800px;
        width: 200px;
    }
    .aside-box ol{
        background: #D2D2D2;
        height: 40px;
        line-height: 40px;
        text-align: left;
        padding: 0 20px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
    }
    .aside-box li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        
    }
    #Goods .el-main{
        margin: 0;padding: 0;
        border-left: 1px solid #ccc;
        min-height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #Goods .goods-box{
        display: flex;
        flex-wrap: wrap;
        padding: 10px
    }
    #Goods .img-box{
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #Goods .img-box img,#Goods .el-image{
        height: 200px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px; 
        background-color: #ccc;   
    }
    #Goods .img-box h5{
        width: 100%;
        text-align: left;
        font-weight: bold;
        color: #888;
        font-size: 20px;
        margin: 3px 0;
    }
    #Goods .img-box span{
        width: 100%;
        text-align: left;
        font-size:14px;
    }
    #Goods .pagination-box{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top:1px solid #ccc;
        padding: 0 20px;
        height: 60px;
    }
</style>