<template>
  <div class="getSuccess">
    <header class="clearfix">
      <div class="header-top">
        <div class="header-l">
          <!--<a href=""></a>-->
        </div>
      </div>
      <div class="header-cont">
        <img src="../../assets/images/CollectingCards/10adad54645464ad.png" alt="">
      </div>
    </header>
    <div class="content">
      <p>1、扫描瓷博会现场将放置“制泥、拉坯、绘画、施釉、烧窑”五种卡片的二维码，领取青花瓷主要制作工艺卡片；</p>
      <p>2、工艺卡片除扫描集卡二维码外，也可以通过好友赠送获得；</p>
      <p>3、所有在10月22日18:58集齐五种工艺卡片，就完成了“烧成青花瓷瓶”的任务，参与平均分配爱艺APP提供的10万人民币现金；</p>
      <p>4、用户所得奖金，在10月22日19:00分将以支付宝现金红包的形式在爱艺APP内发放。</p>
      <p>*本次活动最终解释权归南京爱艺电子商务有限公司所有</p>
    </div>
    <div class="footer">
      <ul class="">
        <li>
          <img src="../../assets/images/CollectingCards/zhini.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/CollectingCards/456456446546565@2x.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/CollectingCards/ad4484s68464asd.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/CollectingCards/asaa6sd45ad64a2x.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/CollectingCards/8498495316.png" alt="">
        </li>
      </ul>
    </div>
    <div class="bot-btn" ref="dkapp" style="display: none">
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.aiyi.aiyiapp">
        <img src="../../assets/images/CollectingCards/appck.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "weiXinInGet",
    created(){
      
      this.browser = {
        versions: function () {
          var u = navigator.userAgent;
          var app = navigator.appVersion;
          return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('1Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信中打开
            aiyi: u.indexOf('Aiyi') > -1
          };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
      }

    },
    mounted(){
      if(!this.browser.versions.aiyi){
        this.$refs.dkapp.style.display = 'block'
      }
    }
  }
</script>

<style lang="less" scoped>
  .getSuccess{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #ffffff;
    header{
      .header-top{
        position:fixed;
        z-index: 922;
        top: 0;
        left: 0;
        height: 80/100rem;
        width: 100%;
        > .header-l{
          a{
            width: 19/100rem;
            height: 32/100rem;
            margin-top:30/100rem;
            margin-left: 30/100rem;
            background: url("../../assets/images/CollectingCards/return.png") no-repeat center;
            -webkit-background-size: cover;
            background-size: cover;
            display: block;
          }

        }
      }
      .header-cont{
        width: 100%;
        height: 270/100rem;
        overflow: hidden;
        float: left;
        position: relative;
        > img {
          width: 100%;
          display: block;
        }
      }
    }
    .content{
      background-color: #fff;
      font-size: 30/100rem;
      color: #333333;
      padding: 15/100rem 48/100rem 110/100rem 49/100rem;
      p {
        line-height: 50/100rem;
        font-size: 28/100rem;
      }
      p:last-child{
        float: right;
        margin-top: 60/100rem;
        font-size: 22/100rem;
      }
    }
    .footer{
      height: 244/100rem;
      margin-top: -2/100rem;
      background-color: #fff;
      width: 100%;
      float: left;
      box-sizing: content-box;
      // padding-bottom: 150/100rem;
      ul{
        padding-top: 40/100rem;
        padding-left: 46/100rem;
        li {
          width: 90/100rem;
          height: 120/100rem;
          position: relative;
          border-radius: 6/100rem;
          border: solid 2/100rem #fff;
          float: left;
          margin-right: 48/100rem;
          img{
            width: 100%;
            height: 100%;
            vertical-align: text-top;
          }
          span {
            position: absolute;
            right: -20/100rem;
            top: -20/100rem;
            width: 36/100rem;
            text-align: center;
            line-height: 36/100rem;
            height: 36/100rem;
            font-size: 24/100rem;
            background: url("../../assets/images/CollectingCards/45a4d8d49ad98ax.png") no-repeat center;
            -webkit-background-size: cover;
            background-size: cover;
          }
        }
      }
    }
    .bot-btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 90/100rem;
      background-color: #f2f2f2;
      padding: 26/100rem 206/100rem 24/100rem 207/100rem;
      a{
        display: block;
        width: 100%;
        height: 100%;
      }
      img{
        width: 100%;
      }
    }
  }
</style>
