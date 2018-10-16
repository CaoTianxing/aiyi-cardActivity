<template>
  <div class="weixinReceive">
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
      <div class="rule clearfix"><router-link to="/ctivityRules"><a href="">活动规则&nbsp;<img src="../../assets/images/CollectingCards/xiaobaiqianjin2x.png" alt=""></a></router-link></div>
      <div class="content-cent">
        <img :src="ImgUrl" alt="">
      </div>
      <div class="content-bt">
        <div class="content-bt-cont">
          <img src="../../assets/images/CollectingCards/Someonehasalreadyreceivedalatestep.png" alt="">
        </div>
      </div>
    </div>
    <footer>
      <div class="bt-mask">
        <a href="javascript:void(0)"></a>
        <img src="../../assets/images/CollectingCards/5a4d54da.png" alt="">
        <div class="bt-mask-cont">
          <div class="bt-mask-top">
              <ul class="clearfix ulList">
                <li>
                  <span class="spactive">1</span>
                  <p class="pactive">制泥</p>
                  <i></i>
                </li>
                <li>
                  <span>1</span>
                  <p>拉坯</p>
                  <i></i>
                </li>
                <li>
                  <span>1</span>
                  <p>绘画</p>
                  <i></i>
                </li>
                <li>
                  <span>1</span>
                  <p>施釉</p>
                  <i></i>
                </li>
                <li>
                  <span>1</span>
                  <p>烧窑</p>
                </li>
            </ul>
          </div>
          <div class="bt-mask-in-p clearfix">
            {{cardDescription}}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
   return {
     getUrlData:'',
     cardDescription:'',
     ImgUrl:'',
     ImgIndex:''
   }
  },
  created(){
    if (this.debug) {
      const script = document.createElement('script')
      script.src = '//cdn.jsdelivr.net/npm/eruda'
      document.body.appendChild(script)
      script.onload = function () { window.eruda.init({ tool: ['console', 'network', 'sources','resources'] }) }
    }
    this.ImgUrl = localStorage.getItem('cardImg')
    this.ImgIndex = localStorage.getItem('cardType')
    this.cardDescription = localStorage.getItem('cardDescription')
  },
  mounted(){
    let ulList = document.querySelectorAll(".ulList li")
    for (var j = 0;j<=ulList.length;j++){
      ulList[this.ImgIndex -1 ].children[0].style.backgroundColor = '#ff9966'
      ulList[this.ImgIndex -1 ].children[1].style.color = '#ff9966'
      return
    }
  }
};
</script>

<style lang="less" scoped>
.weixinReceive {
  header {
    .header-top {
      position: fixed;
      z-index: 922;
      top: 0;
      left: 0;
      height: 80/100rem;
      width: 100%;
      > .header-l {
        a {
          width: 19/100rem;
          height: 32/100rem;
          margin-top: 30/100rem;
          margin-left: 30/100rem;
          background: url("../../assets/images/CollectingCards/return.png")
            no-repeat center;
          -webkit-background-size: cover;
          background-size: cover;
          display: block;
        }
      }
    }
    .header-cont {
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
  .content {
    position: relative;
    height: 757/100rem;
    background: url("../../assets/images/CollectingCards/bg.png")
      no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
    .rule {
      height: 26/100rem;
      line-height: 26/100rem;
      margin-top: 32/100rem;
      margin-right: 30/100rem;
      float: right;
      > a {
        font-size: 22/100rem;
        display: block;
        font-weight: 200;
      }
      img {
        height: 25/100rem;
        float: right;
      }
    }
    .content-cent {
      width: 424/100rem;
      height: 566/100rem;
      position: absolute;
      top: 125/100rem;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100%;
        padding: 0;
        margin: 0;
      }
    }
  }
  .content-bt {
    width: 650/100rem;
    height: 400/100rem;
    position: absolute;
    bottom: -355/100rem;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20/100rem;
    background-color: #e6e6e6;
    .content-bt-cont {
      width: 551/100rem;
      height: 93/100rem;
      margin: 43/100rem auto 0;
      img {
        width: 100%;
      }
    }
  }
  footer {
    position: relative;
    .bt-mask {
      width: 100%;
      margin-top: 200/100rem;
      height: 570/100rem;
      position: relative;
      top: 10/100rem;
      z-index: 9999999999999;
      > a {
        width: 140/100rem;
        height: 140/100rem;
        position: absolute;
        left: 50%;
        top: -50/100rem;
        transform: translateX(-50%);
        border-radius: 50%;
        background: url("../../assets/images/CollectingCards/as4d5ad45d.png")
          no-repeat center;
        -webkit-background-size: cover;
        background-size: cover;
      }
      img {
        width: 100%;
      }
    }
    .bt-mask-cont {
      position: absolute;
      width: 100%;
      top: 125/100rem;
      background-color: #000f25;
      /*height: 100%;*/
      margin-top: -5 / rem;
      font-size: 24/100rem;
      z-index: 99999;
      .bt-mask-top{
          padding-left: 95/100rem;
          padding-top: 66/100rem;
          padding-bottom: 66/100rem;
          li {
            color: #fff;
            float: left;
            font-size: 24/100rem;
            margin-right: 72/100rem;
            position: relative;
            span{
              width: 32/100rem;
              height: 32/100rem;
              line-height: 32/100rem;
              background-color: #ccc;
              display: block;
              margin: 0 auto;
              font-size: 24/100rem;
              border-radius: 50%;
              text-align: center;
            }
            p{
              margin-top: 10/100rem;
              font-size: 24/100rem;
              float: left;
            }

            i{
              width: 50/100rem;
              // height: 2/100rem;
              border-top: 1px solid #fff;
              // background-color: #fff;
              display: block;
              position: absolute;
              left: 62/100rem;
              top: 15/100rem;
            }
          }
          li:last-child{
            margin: 0;
          }
        }
      .bt-mask-in-p {
        padding: 0 40/100rem 48/100rem;
        color: #b3b3b3;
        line-height: 50/100rem;
        letter-spacing: 2/100rem;
      }
    }
  }
}
</style>
