`
<template>
  <div class="CardPage">
    <header class="clearfix">
      <div class="header-top">
        <div class="header-l"></div>
      </div>
      <div class="header-cont">
        <img src="../../assets/images/CollectingCards/10adad54645464ad.png" alt="">
      </div>
    </header>
    <div class="content">
      <div class="rule clearfix">
        <router-link to="/ctivityRules"><a href="">活动规则&nbsp;<img
          src="../../assets/images/CollectingCards/xiaobaiqianjin2x.png" alt=""></a></router-link>
      </div>
      <div class="content-cent">
        <img style="width: 100%;" :src="ImgUrl" alt="">
      </div>
    </div>
    <footer class="clearfix">
      <div class="bt-mask">
        <div class="bt-mask-cont">
          <div class="bt-mask-top">
            <ul class="clearfix ulList" ref="ulList">
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
            {{cardDescription}}
          </div>
        </div>
      </div>
    </footer>
    <div class="bot-btn" @click="getCard">
      <a href="javascript:void(0)">
        <div><img src="../../assets/images/CollectingCards/adasd654654da.png" alt=""></div>
      </a>
    </div>
    <div class="version" v-if="updateVersion">
      <div class="version-forms">
        <img style="width: 100%" src="../../assets/images/CollectingCards/version-bg.jpg"/>
        <p
          style="font-size: 0.4rem;text-align: left;width: 100%;margin-left: 0.4rem;box-sizing: border-box;margin-bottom: 0.2rem;">
          发现新版本</p>
        <p v-for="(item,index) in versionIntro"
           style="color:#909090;font-size: 0.3rem;text-align: left;width: 100%;margin-left: 0.4rem;box-sizing: border-box"
           :key="index">
          {{index+1}}.{{item}}</p>
        <div
          style="width: 100%;height:0.7rem;position: absolute;bottom: 0;text-align: center;vertical-align:middle;font-size: 0.33rem;background: #ff9966;color: white;line-height: 0.7rem"
          @click="toUpdate">立即更新
        </div>
      </div>
    </div>
    <!--app下载-->
    <div class="version" v-if="download">
      <div class="version-forms">
        <img style="width: 100%" src="../../assets/images/CollectingCards/version-bg.jpg"/>
        <p
          style="font-size: 0.4rem;text-align: left;width: 100%;margin-left: 0.4rem;box-sizing: border-box;margin-bottom: 0.2rem;">
          下载App</p>
        <p
          style="color:#909090;font-size: 0.28rem;text-align: left;width: 100%;padding:0 0.4rem;box-sizing: border-box">
          {{appIntro}}</p>
        <div
          style="width: 100%;height:0.7rem;position: absolute;bottom: 0;text-align: center;vertical-align:middle;font-size: 0.33rem;background: #ff9966;color: white;line-height: 0.7rem"
          @click="toDownload">立即下载
        </div>
      </div>
      <div class="cancel" v-on:click="cancel">
        <img src="../../assets/images/CollectingCards/cancel.png" style="width: 0.4rem;height: auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customerId: "",
        // 卡片描述
        cardDescription: "",
        cardObj: {},
        ImgUrl: "",
        ImgIndex: "",
        browser: {},
        localCustomerId: "",
        cardNo: "",
        visitorId: "",
        download: false,
        appIntro:
          "“分享生活，玩转艺术”，爱艺一款全新的艺术社交平台。分享你的艺术见闻，结识志趣相投的朋友；上传你的艺术作品，记录你的艺术轨迹，让一切有迹可寻。",
        versionIntro: [
          "发现线上艺术周投票活动",
          "发起景德镇瓷博会集卡活动",
          "增加支付宝红包发放功能"
        ],
        updateVersion: false, //是否更新版本弹窗
        containerShow: false,
        version:''
    };
    },
    created() {
      this.customerId = this.$route.query.visitorId;
      if (this.customerId !== undefined &&this.customerId != null &&this.customerId != "") {
        localStorage.setItem("customerId", this.customerId);
      }else{
        this.$router.replace({path: "/appInGet"});
      }
      this.$nextTick(() => {
        this.$ajax.post('/mine/getVersion.app', {
          "customerId": parseInt(this.customerId)
        })
          .then((res) => {
            if (!this.browser.versions.weixin) {
              if (!this.browser.versions.aiyi&&res.data.data!=null&&res.data.data<"2.1.1") {
                this.updateVersion = true;
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      // 检测当前设备
      this.browser = {
        versions: (function () {
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




      // 获取url后面的卡片id
      this.cardNo = this.$route.query.cardNo;

      // *******************如果网址后面有卡片id就进 info接口 根据卡片id请求卡片信息*************************************
      if (this.cardNo != undefined) {
        this.$ajax
          .post("/card/info.app", {
            cardNo: this.cardNo
          })
          .then(res => {
            // console.log(res)
            if (res.data.errcode == "00000") {
              this.cardObj = res.data.data;
              this.ImgUrl = this.cardObj.cardImg;
              this.cardDescription = this.cardObj.cardDesc;
              this.ImgIndex = this.cardObj.cardType;
              // 卡片编号
              localStorage.setItem("cardType", this.cardObj.cardType);
              // 卡片id
              localStorage.setItem("cardId", this.cardObj.id);
              // 卡片图片
              localStorage.setItem("cardImg", this.ImgUrl);
              // 高亮显示
              let ulList = document.querySelectorAll(".ulList li");
              for (var j = 0; j <= ulList.length; j++) {
                ulList[this.ImgIndex - 1].children[0].style.backgroundColor =
                  "#ff9966";
                ulList[this.ImgIndex - 1].children[1].style.color = "#ff9966";
                break;
              }
              if (
                this.updateVersion == false &&
                !this.browser.versions.aiyi &&
                localStorage.getItem("customerId") == undefined
              ) {
                this.$router.replace({path: "/appInGet"});
              }
            } else if (res.data.errcode == "99998") {
              this.$router.replace({path: "/opportunityFinished"});
            } else {
              alert(res.data.errmsg);
            }
          });
      } else {
        // *********************否则就调用 生成卡片接口***********************************
        this.$ajax
          .post("/card/generate.app", {
            customerId: localStorage.getItem("customerId")
          })
          .then(res => {
            console.log(res);
            if (res.data.errcode == "00000") {
              // console.log('生成卡片成功', res.data.data)
              this.cardObj = res.data.data;
              this.ImgUrl = this.cardObj.cardImg;
              this.cardDescription = this.cardObj.cardDesc;
              this.ImgIndex = this.cardObj.cardType;
              localStorage.setItem("cardType", this.cardObj.cardType);
              localStorage.setItem("cardId", this.cardObj.id);
              localStorage.setItem("cardImg", this.ImgUrl);
              localStorage.setItem("cardDescription", this.cardDescription);
              // 高亮显示
              let ulList = document.querySelectorAll(".ulList li");
              for (var j = 0; j <= ulList.length; j++) {
                ulList[this.ImgIndex - 1].children[0].style.backgroundColor =
                  "#ff9966";
                ulList[this.ImgIndex - 1].children[1].style.color = "#ff9966";
                break;
              }
              if (
                this.updateVersion == false &&
                !this.browser.versions.aiyi &&
                localStorage.getItem("customerId") == undefined
              ) {
                this.$router.replace({path: "/appInGet"});
              }
            } else if (res.data.errcode == "99998") {
              this.$router.replace({path: "/opportunityFinished"});
            } else {
              alert(res.data.errmsg);
            }
          });
      }
    },
    mounted() {
    },
    methods: {
      // 领取卡片方法.
      getCard() {
        this.customerId = localStorage.getItem("customerId");
        // console.log(this.customerId)

        this.cardNo = this.$route.query.cardNo;
        console.log(this.cardNo);

        if (this.customerId != undefined) {
          var that = this;
          // ********************************************************

          this.$ajax
            .post("/card/pick.app", {
              customerId: localStorage.getItem("customerId"),
              cardNo: localStorage.getItem("cardId")
            })
            .then(res => {
              console.log(res);
              if (res.data.errcode == "00000") {
                if (!that.browser.versions.aiyi) {
                  that.$router.replace({path: "/getSuccess"});
                  console.log("领取成功");
                } else {
                  that.$router.replace({
                    path: "/index?visitorId=" + localStorage.getItem("customerId")
                  });
                }
              } else {
                this.$router.replace({path: "/WeixinInGet"});
                localStorage.setItem("cardDescription", this.cardDescription);
              }
            });
        } else if (this.customerId == undefined) {
          if (this.browser.versions.aiyi) {
            if (this.browser.versions.ios) {
              window.open("startLogin(123)");
            } else if (this.browser.versions.android) {
              app.startLogin("123");
            }
          }
          this.$router.replace({path: "/appInGet"});
        }
      },
      toUpdate: function () {
        window.open("http://a.app.qq.com/o/simple.jsp?pkgname=com.aiyi.aiyiapp");
      },

      //下载app
      toDownload: function () {
        window.open("http://a.app.qq.com/o/simple.jsp?pkgname=com.aiyi.aiyiapp");
      }
    }
  };
</script>

<style lang="less" scoped>
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
      background: url("../../assets/images/CollectingCards/bg.png") no-repeat center;
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
          padding-left: 95/100rem;
          padding-top: 66/100rem;
          padding-bottom: 66/100rem;
          li {
            color: #fff;
            float: left;
            font-size: 24/100rem;
            margin-right: 72/100rem;
            position: relative;
            span {
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
            p {
              margin-top: 10/100rem;
              font-size: 24/100rem;
              float: left;
            }
            .spactive {
              background-color: #ff9966;
            }
            .pactive {
              color: #ff9966;
            }
            i {
              width: 50/100rem;
              border-top: 1px solid #fff;
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
          width: 170/100rem;
          height: 39/100rem;
          float: left;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          img {
            width: 100%;
          }
        }
      }
    }
    .version {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      box-sizing: border-box;
      z-index: 100;
      background: rgba(0, 0, 0, 0.5);
    }

    /*版本更新 窗体*/
    .version-forms {
      width: 5rem;
      height: 6.6rem;
      background: white;
      position: absolute;
      top: 44%;
      left: 50%;
      margin-top: -3.3rem;
      margin-left: -2.5rem;
      border-radius: 0.2rem;
      overflow: hidden;
    }

    .cancel {
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 50%;
      margin-left: -0.5rem;
      box-sizing: border-box;
      padding-top: 0.3rem;
      margin-top: 10.3rem;
    }
  }
</style>
