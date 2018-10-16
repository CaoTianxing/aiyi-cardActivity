<template>
  <div class="getSuccess">
    <header class="clearfix">
      <div class="header-top">
        <div class="header-l">
          <!--<a href="jsvascript:void(0)"></a>-->
        </div>
      </div>
      <div class="header-cont">
        <img src="../../assets/images/CollectingCards/10adad54645464ad.png" alt="">
      </div>
    </header>
    <div class="content">
      <div class="rule"><router-link to="/ctivityRules"><a href="">活动规则 <span></span></a></router-link></div>
      <div class="content-cent">
        <div class="content-cent-mask"><img src="../../assets/images/CollectingCards/0181010105236.png" alt=""></div>
      </div>
    </div>
    <div class="footer">
    </div>
    <div class="bot-btn">
      <p>活动期间单个用户每天有10次领卡机会，卡片随机生成；
        点击上方已领取的卡片，可将该工艺卡赠送给好友。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    created(){
      if (this.debug) {
        const script = document.createElement('script')
        script.src = '//cdn.jsdelivr.net/npm/eruda'
        document.body.appendChild(script)
        script.onload = function () { window.eruda.init({ tool: ['console', 'network', 'sources','resources'] }) }
      }
    }
  }
</script>

<style lang="less" scoped>
  .getSuccess{
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
      position: relative;
      height: 757/100rem;
      background: url('../../assets/images/CollectingCards/bg.png') no-repeat center;
      -webkit-background-size: cover;
      background-size: cover;
      .rule{
        width: 150/100rem;
        height: 26/100rem;
        line-height: 26/100rem;
        margin-top: 32/100rem;
        margin-right: 30/100rem;
        float: right;
        > a {
          font-size: 22/100rem;
          display: block;
          float: right;
          font-weight: 200;
        }
        span{
          width: 12/100rem;
          height: 22/100rem;
          display: block;
          float: right;
          background: url("../../assets/images/CollectingCards/xiaobaiqianjin2x.png") no-repeat center;
          -webkit-background-size: cover;
          background-size: cover;
          margin-top: 2/100rem;
          margin-left: 10/100rem;
        }
      }
      .content-cent{
        width: 424/100rem;
        height: 566/100rem;
        position: absolute;
        top: 125/100rem;
        left: 50%;
        transform: translateX(-50%);
        img{
          width: 100%;
          padding: 0;
          margin: 0;
        }
        .content-cent-mask{
          width: 424/100rem;
          position: absolute;
          top: 0;
          height: 566/100rem;
          z-index: 99999;
        }
      }
    }
    .footer{
      background-color: #000f25;
      ul{
        /*<!--padding-top: 73/100rem ;-->*/
        padding-top: 32/100rem ;
        padding-left: 46/100rem;
        li {
          width: 90/100rem;
          height: 120/100rem;
          position: relative;
          border-radius: 6/100rem;
          border: solid 2/100rem #ffffff;
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
          p{
            color: #fff;
            font-size: 21/100rem;
            text-align: center;
          }
        }
      }
    }
    .bot-btn{
      bottom: 0;
      width: 100%;
      padding: 90/100rem 40/100rem 50/100rem 49/100rem;
      text-align: left;
      float: left;
      p{
        font-size: 24/100rem;
        color: #fff;
        text-align: left;
        float: left;
        letter-spacing:1/100rem;
        line-height: 40/100rem;
      }
    }
  }
</style>
