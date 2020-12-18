<template>
  <div class="introduce-box">
    <ul class="navs">
      <li :class="{active: active===0}"  @click="scrollTo(0)">
        INTRODUCE IN BRIEF
      </li>
      <li :class="{active: active===1}"  @click="scrollTo(1)">
        OUR HISTORY
      </li>
      <li :class="{active: active===2}"  @click="scrollTo(2)">
        OUR COMPANY
      </li>
      <li :class="{active: active===3}"  @click="scrollTo(3)">
        OUR DREAM
      </li>
    </ul>
    <!-- 内容区域 -->
    <div class="content">
      <div id="0">
        <h1>INTRODUCE IN BRIEF</h1>
        <img src="../assets/images/introduce1.png" alt="">
        <p>
          “MARVELOUS” is an outdoor products factory with a long history and innovative ideas .We are committed to the camping safety, comfort and easily use of all our products,we have professional partners and distributors in every country of the world.
        </p>
        <p>
          “MARVELOUS”s goal is to make our products available in most parts of the world and make 
        </p>
        <p>
          MARVELOUS products available to all our customers for their joy and freedom!
        </p>
      </div>
      <div id="1">
        <h4>OUR HISTORY</h4>
         <img src="../assets/images/introduce2.png" alt="">
        <p>
          “MARVELOUS” is a family owned business that specializes in the design and production of outdoor tents since 1980.
        </p>
        <br/>
        <p>
          Brand founder Mr. DAVID is a aficionado of outdoor sports and camping activity. One day,he decided to have one own company to share his outdoor experience and camping equipment, and he also decide to improve the traditional tent by himself to make them more comfortable and safety......
After decades of development, from a small factory with only a few square meters, it has developed to thousands of square factories in China.
        </p>
      </div>
      <div id="2">
        <h4>OUR COMPANY</h4>
         <h5>REARCH & DEVELOPMENT</h5>
          <p>
            We have a 5-8 people design team in Factory, our products will be from the appearance design, structural design to the raw materials choosing , color matching, and to safety testing, environmental testing...every necessary parts are all strictly controlled by our design team.
          </p>
        <h5>SALES CHANNELS</h5>
          <p>
            We sell our products through our product sales team and overseas distributors.
We hope and welcome more customers to establish in-depth cooperation with us, we will give the biggest supporting , to create a win-win situation with our partners.
          </p>
      </div>
      <div id="3">
        <h4>OUR DREAM</h4>
        <p>“CUSTOMER FIRST”</p>
        <p>    
Marvelous will always put customers' demanding and camping experience in the first place. In the future, Marvelous will devote ourselves to more new camping products R&D and innovation to spread our brand to every corner of the world.
At the same time, provide more value service to our partners and make WIN-WIN cooperation.
        </p>
      </div>
    </div>   
  </div>
</template>

<script>


export default {

  props: {},
  data() {
    return {
      active: 0 // 当前激活的导航索引
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, false)
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.content div')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      
    },
    // 跳转到指定索引的元素
    scrollTo(index) {
      this.active = index
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.getElementById(index).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style scoped>
  .introduce-box{
      display: flex;
      justify-content: flex-end;
      width: 600px;
      margin: 0 auto;
  }
  /* 内容区的样式 */
  .content {
    background-color: white;
    
  }
  .content div {
    width: 100%;
    font-size: 16px;
    padding: 20px;
    
  }
  .content h1,.content h4,.content p{
    color: #000;
  }
  .content h1{
    font-family:Arial,Verdana,Sans-serif;
    font-weight:900;
    text-align: center;
    margin-bottom: 10px;
  }
  .content h4{
      margin-bottom: 10px;
      text-align: left;
  }
  .content h5{
      text-align: left;
      color:blue;
      margin-bottom: 10px;
      margin-left: 20px;
  }
  .content p{
    text-align: left;
    padding:0 30px;
    margin-bottom: 10px;
    font-size: 12px;
  }
  .content img{
    width: 300px;
    margin: 20px 0;
  }
  /* 导航栏的样式 */
  .navs {
    padding: 10px 0;
    position: fixed;
    left: calc(50% - 550px);
    height: 100%;
    width: 220px;
    color: #000;
    background: #FFF;
    
  }
  .navs li {
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 16px;
    font-family: Calibri;
    font-weight: bold;
  }
  /* 当导航被点亮后改变颜色 */
  .navs .active{
    color: #000;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background: rgba(199, 198, 198, 0.034);
    border-radius: 30px;
  }
</style>