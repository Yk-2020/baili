<template>
  <el-menu
    id="myMenu"
    class="el-menu-demo"
    mode="horizontal"
   
    :background-color="backgroundColor"
    text-color="#fff"
    :active-text-color="activeTextColor">
    <div class="log-box">
        <img  src="../../assets/images/log.png" alt="">
    </div>
    <menu-item v-for="menu in Data" :key="menu.path" :item="menu" />
    </el-menu>
</template>

<script>
import MenuItem from './MenuItem'
export default {
    props:[
        'backgroundColor',
        'activeTextColor',
        'Data'
    ],
    components: { MenuItem },
}
</script>

<style>
    #myMenu{
        display: flex;
    }
    #myMenu .el-submenu__icon-arrow{
        display: none;
    }
   .log-box{
       width: 100px;
       height: 50px;
       margin: 3px 40px;
       border-radius: 50%;
        background: #FFF;
        display: flex;
       align-items: center;
       justify-content: center;
   }
   .log-box img{
       width: 56px;
       height: 56px;
       
      
   }
</style>