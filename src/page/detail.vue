<template>
  <div id="goods-detail">
      <Header :headerData="headerData"></Header>
      <div class="detail-box">
        <pic-zoom v-if="detail.goodsFile" :file="JSON.parse(detail.goodsFile)"></pic-zoom>
        <div class="right-box">
            <div class='title'>{{detail.goodsTitle}}</div>
            <div><span class="goods-type">{{detail.goodsType}}</span> <span class="goods-id">#{{detail.goodsId}}</span></div>
            <div class="pric">{{detail.goodsCompany}}{{(detail.goodsPrice-0).toFixed(2)}}</div>
             <div class="tabs-box">
        <el-tabs type="card" v-model="activeName">
            <el-tab-pane label="DESCRIPTION" name="DESCRIPTION" :key="'DESCRIPTION'">
                <div class="card-box">
                    <p v-html="detail.goodsDescribe"></p>

                </div>
            </el-tab-pane>
            <el-tab-pane label="PRODUCT DETAILS" name="PRODUCTDETAILS" :key="'PRODUCTDETAILS'">
                <div class="card-box">
                    <p v-html="detail.goodsDetails"></p>
                </div>
            </el-tab-pane>
        </el-tabs>
      </div>
        </div>
      </div>
     
      
  </div>
</template>

<script>
import Header from '@/components/Header'
import PicZoom from '@/components/Piczoom'
import {selectDetail} from '@/request/api'
export default {
    components:{Header,PicZoom},
    data(){
        return{
            headerData:{url:require('../assets/images/Header.jpg')},
            activeName:'DESCRIPTION',
            detail:[]
        }
    },
    mounted(){
        selectDetail({id:this.$route.query.id}).then(res=>{
            console.log(res)
            if(res.isSuccess){
                this.detail = res.data[0];
            }
        })
        
        
    },
    methods:{
    }
}
</script>

<style>
    #goods-detail .detail-box{
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
    }
    #goods-detail .right-box{
        width: 100%;
        margin-left:20px;
        text-align: left;
    }
    #goods-detail .right-box .title{
        font-size: 30px;
        width: 600px;
        font-weight: bold;
        color: #5c5c5c;
        word-wrap:break-word;
    }
    #goods-detail .right-box .goods-id,#goods-detail .right-box .goods-type{
        color: #636363;
        font-size: 14px;
    }
    #goods-detail .right-box .pric{
        margin-top: 40px;
        font-weight: bold;
        font-size: 20px;
    }
    #goods-detail .tabs-box{
        width: 100%;
        margin: 0 auto;
        margin: 20px 0;
        text-align: left;
        min-height: 800px;
    }
    #goods-detail .tabs-box .el-tabs__header{
        margin-bottom: 0;
    }
    #goods-detail .card-box{
        border: 1px solid #E4E7ED;
        border-top: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        min-height: 200px;
        padding: 20px;
    }
    #goods-detail .el-tabs__item.is-active {
        color: #666;
    }   
    #goods-detail .el-tabs__item:hover{
        color: #888;
    }
</style>