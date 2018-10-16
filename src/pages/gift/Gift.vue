<template>
  <div class="CardPage">
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
      <div class="pendingBox">待好友领取 <span>{{pending}} </span>张, 共有 <span>{{currentCardList.length}} </span>张</div>
      <div class="rule"><router-link to="/ctivityRules"><a href="">活动规则 <span></span></a></router-link></div>
      <div class="content-cent">
        <div class="swiper-container">
          <div class="swiper-wrapper" ref="swiper">
            <div class="swiper-slide" v-for="(item,index) in currentCardList" :key="index" :data-id="item.cardNo">
              <img :src="item.cardImg" class="main-img">
              <span v-show="item.status === 2" class="ds"><img src="../../assets/images/CollectingCards/daishouqu.png" alt=""></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="clearfix">
      <div class="bt-mask">
        <div class="bt-mask-cont">
          <div class="bt-mask-top">
            <ul class="clearfix ulList">
              <li>
                <span>1</span>
                <p>制泥</p>
                <i></i>
              </li>
              <li>
                <span>2</span>
                <p>拉坯</p>
                <i></i>
              </li>
              <li>
                <span>3</span>
                <p>绘画</p>
                <i></i>
              </li>
              <li>
                <span>4</span>
                <p>施釉</p>
                <i></i>
              </li>
              <li>
                <span>5</span>
                <p>烧窑</p>
              </li>
            </ul>
          </div>
          <div class="bt-mask-in-p">
            <!--制泥：景德镇专用术语。见《景德镇陶录》。指瓷器作坯之前的一道工序。其过程是把泥入水池内浸泡。用木楸不断翻搅，漂去浮渣，筛以马尾细箩，沉淀后用细绢袋装浆渗水，放无底木匣内，上用石压，去水成泥，然后用锹反复反转，使之纯精结实。-->
            {{activeP}}
          </div>
        </div>
      </div>
    </footer>
    <div class="bot-btn"  @click="gift">
      <a href="javascript:void(0)">
        <div><img src="../../assets/images/CollectingCards/songhaoyouyiz.png" alt=""></div>
      </a>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      // url后面的数据
      getUrlData: "",
      currentCardList: "",
      temporary: [],
      // 待领取数量1是正常，2是待领取
      pending: 0,
      cardNo: "",
      activeP: "",
      browser: {},
      index: "",
      title: "",
      shareImgUrl: "",
      Thumbnails: ""
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
    // ********************************************************

    // 获取网址后面的数据
    this.getUrlData = this.$route.query.cardType;
    // 在页面初始化的时候获取卡片图片
    this.getAllcard();
  },
  mounted() {
    var that = this;
    window["share"] = function() {
      that.visitorId =
        that.$route.query.visitorId == undefined ||
        that.$route.query.visitorId == "" ||
        that.$route.query.visitorId == null
          ? 0
          : that.$route.query.visitorId;
      var param = JSON.stringify({
        customerId: that.visitorId,
        id: 4,
        type: 12
      });
      that.$ajax({
        method: "post",
        url: "/base/share.app",
        data: param,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
    };
    var This = this;

    this.initSwper();
    window["share"] = function() {
      var swperActive = document.querySelector(".swiper-slide-active");
      // 卡片id
      // this.cardNo = swperActive.getAttribute("data-id")
      return {
        isShare: true,
        img: This.shareImgUrl, // 分享显示的缩略图地址
        url:
          "https://m.app.artmkt.com/card/#/?cardNo=" +
          swperActive.getAttribute("data-id"), // 分享地址
        summary:
          "集齐五种工艺卡的用户，就已完成“烧成青花瓷瓶”的活动任务，参与平均分配爱艺APP提供的10万人民币支付宝现金红包。！", // 分享描述
        title: This.title + "-烧成青花瓷瓶瓜分10万", // 分享标题
        thumbImg: This.Thumbnails, //略缩图
        miniId: null,
        miniPath: null
      };
    };
  },
  methods: {
    // ************************点击调用赠送接口********************************
    gift() {
      if (this.browser.versions.aiyi) {
        if (this.browser.versions.ios) {
          window.open("openShare()");
        } else if (this.browser.versions.android) {
          app.OpenShare();
        }
      }
      var swperActive = document.querySelector(".swiper-slide-active");
      // 卡片id
      this.cardNo = swperActive.getAttribute("data-id");
      console.log(this.cardNo)
      if (swperActive.querySelector("span").style.display == "none") {
        this.$ajax
          .post("/card/give.app", {
            customerId: localStorage.getItem("customerId"),
            cardNo: this.cardNo
          })
          .then(res => {
            console.log('赠送好友成功',res)
            if (res.data.errcode === "00000") {
              this.getAllcard();
            }
          })
          .catch(error => {
            // console.log(error);
          });
      }
    },
    // ******************获取所有卡片**************************************
    getAllcard() {
      // console.log()
      this.pending = 0;
      this.$ajax
        .post("/card/list.app", {
          customerId: localStorage.getItem("customerId"),
          cardType: this.getUrlData
        })
        .then(res => {
          console.log("请求成功", res.data);
          if (res.data.errcode === "00000") {
            this.currentCardList = res.data.data;
            this.index = this.currentCardList[0].cardType;
            console.log(this.index);
            if (this.index == "1") {
              this.title = "制泥卡";
              this.shareImgUrl = "https://img.artmkt.cn/1539509357005.jpg";
              this.Thumbnails = "https://img.artmkt.cn/1539588255577.jpg";
            } else if (this.index == "2") {
              this.title = "拉坯卡";
              this.shareImgUrl = "https://img.artmkt.cn/1539509354405.jpg";
              this.Thumbnails = "https://img.artmkt.cn/1539588255189.jpg";
            } else if (this.index == "3") {
              this.title = "绘画卡";
              this.shareImgUrl = "https://img.artmkt.cn/1539509353997.jpg";
              this.Thumbnails = "https://img.artmkt.cn/1539588255450.jpg";
            } else if (this.index == "4") {
              this.title = "施釉卡";
              this.shareImgUrl = "https://img.artmkt.cn/1539509355881.jpg";
              this.Thumbnails = "https://img.artmkt.cn/1539588254927.jpg";
            } else if (this.index == "5") {
              this.title = "烧窑卡";
              this.shareImgUrl = "https://img.artmkt.cn/1539509355146.jpg";
              this.Thumbnails = "https://img.artmkt.cn/1539588255322.jpg";
            }
            console.log(this.title);
            for (var i = 0; i < this.currentCardList.length; i++) {
              this.activeP = this.currentCardList[i].cardDesc;
              // *************************获取所有待领取数量*******************************
              if (this.currentCardList[i].status === 2) {
                this.pending++;
              }
            }
            // 高亮显示
            let ulList = document.querySelectorAll(".ulList li");
            for (var j = 0; j < ulList.length; j++) {
              ulList[this.getUrlData - 1].children[0].style.backgroundColor =
                "#ff9966";
              ulList[this.getUrlData - 1].children[1].style.color = "#ff9966";
              return;
            }
            // console.log(this.temporary)
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // ********************************************************
    initSwper() {
      var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        centeredSlides: true,
        watchSlidesProgress: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../static/swiper.min.css";
.CardPage {
  header {
    .header-top {
      position: fixed;
      z-index: 922;
      top: 0;
      left: 0;
      height: 80/100rem;
      width: 100%;
      > .header-l {
        /*<!--a{-->*/
        /*<!--width: 19/100rem;-->*/
        /*<!--height: 32/100rem;-->*/
        /*<!--margin-top:30/100rem;-->*/
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
    background: url("../../assets/images/CollectingCards/bg.png") no-repeat
      center;
    -webkit-background-size: cover;
    background-size: cover;
    .rule {
      position: absolute;
      width: 150/100rem;
      right: 0;
      height: 26/100rem;
      line-height: 26/100rem;
      margin-top: 32/100rem;
      margin-right: 30/100rem;
      > a {
        font-size: 22/100rem;
        display: block;
        float: right;
        font-weight: 200;
      }
      span {
        width: 12/100rem;
        height: 22/100rem;
        display: block;
        float: right;
        background: url("../../assets/images/CollectingCards/xiaobaiqianjin2x.png")
          no-repeat center;
        -webkit-background-size: cover;
        background-size: cover;
        margin-top: 2/100rem;
        margin-left: 10/100rem;
      }
    }
    .content-cent {
      width: 100%;
      overflow: hidden;
      .swiper-container {
        margin-top: 170/100rem;
      }
      .swiper-slide {
        width: 420/100rem;
        position: relative;
        height: 566/100rem;
        .ds {
          font-size: 24/100rem;
          position: absolute;
          text-align: right;
          color: #fff;
          top: 28/100rem;
          right: 28/100rem;
          width: 130/100rem;
          height: 130/100rem;
        }
      }
      .swiper-slide .main-img {
        width: 404/100rem;
        margin: 0 auto;
        display: block;
      }
      .swiper-slide-prev img {
        width: 85% !important;
        margin-top: 70/100rem !important;
        position: absolute;
        right: -10px;
        transition: all 0.3s;
      }
      .swiper-slide-next img {
        width: 85% !important;
        margin-top: 70/100rem !important;
        position: absolute;
        left: -10px;
        transition: all 0.3s;
      }
      .swiper-slide-active img {
        width: 100% !important;
        transition: all 0.3s;
      }
    }
    .pendingBox {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60/100rem;
      font-size: 28/100rem;
      letter-spacing: 1/100rem;
      font-weight: 500;
      color: #fff;
      text-align: center;
    }
  }
  footer {
    position: relative;
    .bt-mask {
      width: 100%;
    }
    .bt-mask-cont {
      width: 100%;
      background-color: #000f25;
      font-size: 24/100rem;
      z-index: 99999;
      .bt-mask-top {
        width: 550/100rem;
        margin: 66/100rem auto;
        height: 65 / rem;
        li {
          width: 47 / rem;
          height: 65 / rem;
          color: #fff;
          float: left;
          font-size: 24/100rem;
          margin-right: 72/100rem;
          position: relative;
          span {
            width: 32/100rem;
            height: 32/100rem;
            background-color: #ccc;
            display: block;
            line-height: 32/100rem;
            margin: 0 auto;
            font-size: 24/100rem;
            border-radius: 50%;
            text-align: center;
          }
          p {
            margin-top: 10/100rem;
            font-size: 24/100rem;
            float: left;
          }
          i {
            width: 50/100rem;
            height: 2/100rem;
            background-color: #fff;
            display: block;
            position: absolute;
            left: 62/100rem;
            top: 15/100rem;
          }
        }
        li:last-child {
          margin: 0;
        }
      }
      .bt-mask-in-p {
        padding: 0 40/100rem 100/100rem;
        color: #b3b3b3;
        line-height: 50/100rem;
        letter-spacing: 2/100rem;
      }
    }
  }
  .bot-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    a {
      height: 90/100rem;
      display: block;
      width: 100%;
      background-color: #f2f2f2;
      > div {
        width: 255/100rem;
        height: 40/100rem;
        float: left;
        position: absolute;
        top: 50%;
        left: 50%;
        color: #000;
        font-size: 30/100rem;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
