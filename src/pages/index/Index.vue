<template>
  <div class="index">
    <header class="clearfix">
      <div class="header-top">
        <div class="header-l">
          <!--<a href=""></a>-->
        </div>
      </div>
      <div class="header-cont">
        <img src="../../assets/images/CollectingCards/10adad54645464ad.png" alt="">
        <div class="status">{{num}}人已集齐，10月22日18:58开奖</div>
      </div>
    </header>
    <div class="content">
      <div class="content-box clearfix">
        <!--<router-link to="/">-->
          <div class="qrCode" @click="sm">
            <a href="javascript:void(0)"></a>
          </div>
        <!--</router-link>-->
        <p class="sm">扫码集卡</p>
      </div>
      <div class="rule clearfix">
        <router-link to="/ctivityRules"><a href="javascript:void(0)">活动规则&nbsp;<img
          src="../../assets/images/CollectingCards/xiaobaiqianjin2x.png" alt=""></a></router-link>
      </div>
      <!------------------------页面中间的当前状态---------------------------->
      <div class="center-obj">
        <img ref="init" src="../../assets/images/CollectingCards/initimg.png" alt="">
        <img style="display: none" ref="znd" data-i='1' src="../../assets/images/CollectingCards/zn1.png" alt="">
        <img style="display: none" ref="lpd" data-i='2' src="../../assets/images/CollectingCards/12165445456456002.png" alt="">
        <img style="display: none" ref="hhd" data-i='3' src="../../assets/images/CollectingCards/4s64d6a4s6da.png" alt="">
        <img style="display: none" ref="syd" data-i='4' src="../../assets/images/CollectingCards/4d5a4d5a4d5d545a.png" alt="">
        <img style="display: none" ref="syk" data-i='5' src="../../assets/images/CollectingCards/5a4sd54545a4d.png" alt="">
      </div>
      <!------------------------页面右边的卡片---------------------------->
      <div class="r-obj">
        <ul>
          <li>
            <img style="display: none" ref="rznd" src="../../assets/images/CollectingCards/zn2x.png" alt="">
          </li>
          <li>
            <img style="display: none" ref="rlpd" src="../../assets/images/CollectingCards/4564544654665462x.png" alt="">
          </li>
          <li>
            <img style="display: none" ref="rhhd" src="../../assets/images/CollectingCards/4das4d6a4das.png" alt="">
          </li>
          <li>
            <img style="display: none" ref="rsyd" src="../../assets/images/CollectingCards/4648ax468a4x6sax462x.png" alt="">
          </li>
          <li>
            <img style="display: none" ref="rsyk" src="../../assets/images/CollectingCards/8as4da465adsa.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!------------------------页面下面的小卡片---------------------------->
    <div class="footer">
      <ul class="clearfix footer-first-ul" v-if="customerId != undefined && customerId != '' && customerId != null">
        <router-link to="/gift/?cardType=1">
          <li><img style="display: none" ref="tznd" src="../../assets/images/CollectingCards/zhini.png" alt=""><span ref="sp1" style="display: none">{{cardNum1}}</span><strong>制泥卡</strong></li>
        </router-link>
        <router-link to="/gift/?cardType=2">
          <li><img style="display: none" ref="tlpd" src="../../assets/images/CollectingCards/456456446546565@2x.png" alt=""><span ref="sp2" style="display: none">{{cardNum2}}</span><strong>拉坯卡</strong></li>
        </router-link>
        <router-link to="/gift/?cardType=3">
          <li><img style="display: none" ref="thhd" src="../../assets/images/CollectingCards/ad4484s68464asd.png" alt=""><span ref="sp3" style="display: none">{{cardNum3}}</span><strong>绘画卡</strong></li>
        </router-link>
        <router-link to="/gift/?cardType=4">
          <li><img style="display: none" ref="tsyd" src="../../assets/images/CollectingCards/456456446546565@2x.png" alt=""><span ref="sp4" style="display: none">{{cardNum4}}</span><strong>施釉卡</strong></li>
        </router-link>
        <router-link to="/gift/?cardType=5">
          <li><img style="display: none" ref="tsyk" src="../../assets/images/CollectingCards/8498495316.png" alt=""><span ref="sp5" style="display: none">{{cardNum5}}</span><strong>烧窑卡</strong></li>
        </router-link>
      </ul>
      <ul class="clearfix footer-first-ul" v-if="customerId == undefined || customerId == null || customerId == ''">
          <li><img style="display: none" ref="tznd" src="../../assets/images/CollectingCards/zhini.png" alt=""><span ref="sp1" style="display: none">{{cardNum1}}</span><strong>制泥卡</strong></li>
          <li><img style="display: none" ref="tlpd" src="../../assets/images/CollectingCards/456456446546565@2x.png" alt=""><span ref="sp2" style="display: none">{{cardNum2}}</span><strong>拉坯卡</strong></li>
          <li><img style="display: none" ref="thhd" src="../../assets/images/CollectingCards/ad4484s68464asd.png" alt=""><span ref="sp3" style="display: none">{{cardNum3}}</span><strong>绘画卡</strong></li>
          <li><img style="display: none" ref="tsyd" src="../../assets/images/CollectingCards/456456446546565@2x.png" alt=""><span ref="sp4" style="display: none">{{cardNum4}}</span><strong>施釉卡</strong></li>
          <li><img style="display: none" ref="tsyk" src="../../assets/images/CollectingCards/8498495316.png" alt=""><span ref="sp5" style="display: none">{{cardNum5}}</span><strong>烧窑卡</strong></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 首页所有卡片
      allCard: [],
      // 用户id
      customerId: "",
      cardList: {},
      cardNum1: "",
      cardNum2: "",
      cardNum3: "",
      cardNum4: "",
      cardNum5: "",
      num: "",
      browser: {}
    };
  },
  created() {
    this.browser = {
      versions: (function() {
        var u = navigator.userAgent;
        var app = navigator.appVersion;
        return {
          //移动终端浏览器版本信息
          trident: u.indexOf("Trident") > -1, //IE内核
          presto: u.indexOf("Presto") > -1, //opera内核
          webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
          gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
          iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf("iPad") > -1, //是否iPad
          webApp: u.indexOf("1Safari") == -1, //是否web应该程序，没有头部与底部
          weixin: u.indexOf("MicroMessenger") > -1, //是否微信中打开
          aiyi: u.indexOf("Aiyi") > -1
        };
      })(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    this.customerId = this.$route.query.visitorId;
    if (
      this.customerId !== undefined &&
      this.customerId != null &&
      this.customerId != ""
    ) {
      localStorage.setItem("customerId", this.customerId);
    }
    this.getAllNum();
    var that = this;
    this.$ajax
      .post("/card/list.app", {
        customerId: this.customerId
      })
      .then(res => {
        // console.log('请求成功', res.data)
        if (res.data.errcode === "00000") {
          this.cardList = res.data.data;

          // *******************循环判断显示右侧*************************************
          // console.log('---------------------------')
          // console.log(this.cardList)
          if (this.cardList.length === 0) {
            this.$refs.init.style.display = "black";
          }
          // console.log('---------------------------')

          for (var i = 0; i <= this.cardList.length - 1; i++) {
            if (this.cardList[i].cardType === 1) {
              that.cardNum1 = this.cardList[i].num;
              this.$refs.rznd.style.display = "block";
              this.$refs.tznd.style.display = "block";
              this.$refs.sp1.style.display = "block";
            } else if (this.cardList[i].cardType === 2) {
              that.cardNum2 = this.cardList[i].num;
              this.$refs.rlpd.style.display = "block";
              this.$refs.tlpd.style.display = "block";
              this.$refs.sp2.style.display = "block";
            } else if (this.cardList[i].cardType === 3) {
              that.cardNum3 = this.cardList[i].num;
              this.$refs.rhhd.style.display = "block";
              this.$refs.thhd.style.display = "block";
              this.$refs.sp3.style.display = "block";
            } else if (this.cardList[i].cardType === 4) {
              that.cardNum4 = this.cardList[i].num;
              this.$refs.rsyd.style.display = "block";
              this.$refs.tsyd.style.display = "block";
              this.$refs.sp4.style.display = "block";
            } else if (this.cardList[i].cardType === 5) {
              that.cardNum5 = this.cardList[i].num;
              this.$refs.rsyk.style.display = "block";
              this.$refs.tsyk.style.display = "block";
              this.$refs.sp5.style.display = "block";
            }
          }
          if (that.cardNum1 > 0) {
            this.$refs.init.style.display = "none";
            if (that.cardNum2 > 0) {
              if (that.cardNum3 > 0) {
                if (that.cardNum4 > 0) {
                  if (that.cardNum5 > 0) {
                    this.$refs.syk.style.display = "block";
                  } else {
                    this.$refs.syd.style.display = "block";
                  }
                } else {
                  this.$refs.hhd.style.display = "block";
                }
              } else {
                this.$refs.lpd.style.display = "block";
              }
            } else {
              this.$refs.znd.style.display = "block";
            }
          } else {
            this.$refs.init.style.display = "block";
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
    sm() {
      if (
        this.customerId == undefined ||
        this.customerId == null ||
        this.customerId == ""
      ) {
        //判断是不是在爱艺app里面
        if (this.browser.versions.aiyi) {
          //如果是在app里面判断是ios 还是安卓
          if (this.browser.versions.ios) {
            //如果是ios  就调用
            window.open("startLogin(123)");
          } else if (this.browser.versions.android) {
            app.startLogin("123");
          }
        }
      } else {
        //说明网址后面有id
        if (this.browser.versions.aiyi) {
          //如果是在app里面判断是ios 还是安卓
          if (this.browser.versions.ios) {
            //如果是ios  就调用
            window.open("scanQrcode()");
          } else if (this.browser.versions.android) {
            app.scanQrcode();
          }
        }
      }
    },
    getAllNum() {
      this.$nextTick(() => {
        this.$ajax
          .post("/card/num.app", {})
          .then(res => {
            if (res.data.errcode === "00000") {
              this.num = res.data.data.data;
              localStorage.setItem("succNum", this.num);
            } else {
              this.num = localStorage.getItem("succNum");
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  }
};
</script>

<style lang="less" scoped>
header {
  .header-top {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    height: 80/100rem;
    width: 100%;
    > .header-l {
      /*<!--a {-->*/
      /*<!--width: 19/100rem;-->*/
      /*<!--height: 32/100rem;-->*/
      /*<!--margin-top: 30/100rem;-->*/
      /*<!--margin-left: 30/100rem;-->*/
      /*<!--background: url("../../assets/images/CollectingCards/return.png") no-repeat center;-->*/
      /*<!-- -webkit-background-size: cover;-->*/
      /*<!--background-size: cover;-->*/
      /*<!--display: block;-->*/
      /*<!--}-->*/
    }
  }
  .header-cont {
    width: 100%;
    float: left;
    position: relative;
    > img {
      width: 100%;
      display: block;
    }
    > .status {
      position: absolute;
      width: 530/100rem;
      height: 50/100rem;
      line-height: 50/100rem;
      border-radius: 25/100rem;
      bottom: 50/100rem;
      left: 112/100rem;
      text-align: center;
      font-size: 28/100rem;
    }
  }
}

.content {
  position: relative;
  height: 757/100rem;
  background: url("../../assets/images/CollectingCards/bg.png") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  .content-box {
    float: left;
    margin-top: 32/100rem;
    margin-left: 33/100rem;
  }
  .qrCode {
    width: 60/100rem;
    height: 60/100rem;
    background: url("../../assets/images/CollectingCards/qrCode.png") no-repeat
      center;
    -webkit-background-size: cover;
    background-size: cover;
    margin: 0 auto;
  }
  .sm {
    width: 100%;
    line-height: 17/100rem;
    color: #fff;
    font-size: 17/100rem;
    margin-top: 10/100rem;
    float: left;
    transform: scale(0.9);
    text-align: center;
  }

  .rule {
    height: 26/100rem;
    line-height: 26/100rem;
    margin-top: 32/100rem;
    margin-right: 30/100rem;
    float: right;
    a {
      font-size: 22/100rem;
      display: block;
      font-weight: 200;
    }
    img {
      height: 25/100rem;
      float: right;
    }
  }
  .center-obj {
    width: 423/100rem;
    height: 577/100rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 100%;
    }
  }
  .r-obj {
    ul {
      position: absolute;
      right: 30/100rem;
      top: 107/100rem;
      li {
        width: 100/100rem;
        height: 100/100rem;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5/100rem;
        border: solid 1/100rem rgba(255, 255, 255, 0.2);
        margin-bottom: 10/100rem;
        padding: 10/100rem;
        > img {
          width: 100%;
        }
      }
    }
  }
}

.footer {
  background-color: #000f25;
  margin-top: 31/100rem;
  margin-bottom: 35/100rem;
  .footer-first-ul {
    padding-left: 46/100rem;
    li {
      width: 90/100rem;
      height: 120/100rem;
      position: relative;
      border-radius: 6/100rem;
      border: solid 2/100rem #ffffff;
      float: left;
      margin-right: 48/100rem;
      img {
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
        color: #000;
        height: 36/100rem;
        font-size: 24/100rem;
        background: url("../../assets/images/CollectingCards/45a4d8d49ad98ax.png")
          no-repeat center;
        -webkit-background-size: cover;
        background-size: cover;
      }
      strong {
        font-size: 22/100rem;
        font-weight: 400;
        color: #fff;
        position: absolute;
        bottom: -45/100rem;
        left: 50%;
        float: left;
        width: 100%;
        text-align: center;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
