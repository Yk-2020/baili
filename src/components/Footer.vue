<template>
<div id="Footer">
    <div class="footer-top">
        <span>
            <i class="iconfont icon-icon_facebook" @click="fnLink('http://www.facebook.com')"></i>
            <i class="iconfont icon-tuite" @click="fnLink('http://www.twitter.com/')"></i>
            <i class="iconfont icon-linkedin" @click="fnLink('https://www.linkedin.com/')"></i>
        </span>
        <span>
            <i class="iconfont icon-youjian"></i>
            <span class="email">info@marvelous-outdoor.com</span>
        </span>
        <!-- <h1>Sign up for our Newsletter!</h1>
        <div class="input-box">
            <input type="text" placeholder="Your email address">
            <div class="button">SING UP</div>
        </div> -->
    </div>
    <div class="footer-mid">
        <ul>
            <ol>
                <span>#PACKFORLIFE</span>
                <div></div>
            </ol>
            <li>Home</li>
            <li>Contact</li>
            <li>Products</li>
            <li>Solutions </li>
        </ul>
        <ul>
            <ol>
                <span>ABOUT US</span>
                <li>Our Compay</li>
                <li>Our Heritage</li>
                <li>Our Community</li>
                <li>Retailers</li>
            </ol>
            <p>

            </p>
        </ul>
        <ul>
            <ol>
                <span>SUPPORT</span>
                <div></div>
            </ol>
            <li>Warranties</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
        </ul>
        <ul>
            <ol>
                <span>SINCE 1980</span>
                <div></div>
            </ol>
            <p>
                We are committed to improving users' experience of outdoor activities.
            </p>
            <p>
                We are focused on making outdoor products more safety, comfortable and easy to use.
            </p>
            <p>
                When we say MARVELOUS ,we mean it!
            </p>
        </ul>
    </div>
    <div class="footer-bottom">
        闽ICP备 2020020041号
    </div>
</div>
</template>

<script>
export default {
    methods:{
        fnLink(url){
            window.open(url, '_blank')
        }
    }
}
</script>

<style>
#Footer {
    background: #1f1f1f;
}

#Footer .footer-top {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #F1B11D;
    padding: 0 40px
}
#Footer .footer-top .iconfont{
    font-size: 20px;
    color: #000;
    margin-right: 10px;
}
#Footer .footer-top .email{
    color: #000;
    border-bottom:  1px solid #000;
    margin-left: 5px;
}
#Footer .footer-top h1 {
    font-size: 20px;
    font-weight: bold;
}

#Footer .footer-top .input-box {
    display: flex;
}

#Footer .footer-top .input-box input {
    outline: none;
    border: none;
    background: none;
    width: 180px;
    border-bottom: 2px solid #B98A42;
}

#Footer .footer-top .input-box .button {
    font-size: 10px;
    background: #000;
    color: #fff;
    height: 30px;
    line-height: 30px;
    width: 80px
}

#Footer .footer-mid {
    width: 1200px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
}

#Footer .footer-mid {
    text-align: left;
    display: flex;
    justify-content: space-around;
}

#Footer .footer-mid ul {
    flex: 1;
    padding: 0 20px;
}

#Footer .footer-mid ol {
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;

}

#Footer .footer-mid ol>div {
    width: 30px;
    border-top: 2px solid #ccc;
}

#Footer .footer-mid li {
    font-size: 14px;
    color: #717171;
    margin: 5px 0;
}

#Footer .footer-mid p {
    font-size: 14px;
    color: #717171;
    margin: 5px 0;
    margin-bottom: 10px
}

#Footer .footer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-top: 2px solid #272727;
    color: #ccc;
}
</style>
