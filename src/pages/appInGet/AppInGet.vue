<template>
  <div class="AppInGet">
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
        <div class="content-bt-form">
          <div class="first-ipt">
            <input type="text" placeholder="请输入参与手机号" v-model="phone" onkeyup="this.value=this.value.replace(/[^0-9]+/,'');">
          </div>
          <div class="last-ipt">
            <input type="text" placeholder="请输入短信验证码" v-model="VerificationCode" onkeyup="this.value=this.value.replace(/[^0-9]+/,'');">
            <button @click="getVerification" ref="countDown">获取验证码 <span style="display: none" ref="dnumj">({{dnum}})</span></button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="bt-mask">
        <span @click="login"></span>
        <img src="../../assets/images/CollectingCards/5a4d54da.png" alt="">
        <div class="bt-mask-cont">
          <div class="bt-mask-top"><ul class="clearfix ulList">
            <li>
              <span>1</span>
              <p>制泥</p>
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
          </ul></div>
          <div class="bt-mask-in-p clearfix">
            <!--制泥：景德镇专用术语。见《景德镇陶录》。指瓷器作坯之前的一道工序。其过程是把泥入水池内浸泡。用木楸不断翻搅，漂去浮渣，筛以马尾细箩，沉淀后用细绢袋装浆渗水，放无底木匣内，上用石压，去水成泥，然后用锹反复反转，使之纯精结实。-->
            {{cardDescription}}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 获取手机号
      phone: "",
      // 获取验证码
      VerificationCode: "",
      customerId: "",
      // 卡片描述
      cardDescription: "",
      ImgUrl: "",
      ImgIndex: "",
      cardType: "",
      dnum: 60
    };
  },
  created() {

    this.cardDescription = localStorage.getItem("cardDescription");
    this.ImgUrl = localStorage.getItem("cardImg");
    this.ImgIndex = localStorage.getItem("cardType");
    this.cardType = localStorage.getItem("cardType");
  },
  mounted() {
    let ulList = document.querySelectorAll(".ulList li");
    for (var j = 0; j <= ulList.length; j++) {
      ulList[this.ImgIndex - 1].children[0].style.backgroundColor = "#ff9966";
      ulList[this.ImgIndex - 1].children[1].style.color = "#ff9966";
      return;
    }
  },
  methods: {
    getVerification() {
      this.dnum = 60;
      var This = this;
      if (this.phone !== "" && this.phone.length >= 11) {
        this.$nextTick(() => {
          this.$ajax
            .post("sms/code.app", {
              mobile: this.phone
            })
            .then(res => {
              console.log(res);
              if (res.data.errcode == "00000") {
                Toast("短信验证码发送成功，请注意查收");
                this.$refs.countDown.disabled = true;
                this.$refs.countDown.style.color = "#ccc";
                this.$refs.dnumj.style.display = "inline-block";
                var dsq = setInterval(() => {
                  if (This.dnum <= 0) {
                    clearInterval(dsq);
                    console.log(This.$refs.countDown)
                    This.$refs.countDown.disabled = false;
                    This.$refs.countDown.style.color = "#f96";
                    This.$refs.dnumj.style.display = "none";
                  }
                  This.dnum--;
                }, 1000);
              } else {
                MessageBox("温馨提示", res.data.errmsg);
              }
            });
        });
      } else {
        MessageBox("温馨提示", "请输入正确的手机号");
      }
    },
    login() {
      if(this.phone !== "" && this.phone.length >= 11){
        this.$nextTick(() => {
          this.$ajax
            .post("customer/thirdLoginRegister.app", {
              phone: this.phone,
              codeReg: this.VerificationCode,
              loginType: "3"
            })
            .then(res => {
              console.log(res);
              if (res.data.errcode == "00000") {
                localStorage.setItem("customerId", res.data.data.customerId);
                this.getCard();
              } else {
                if ((res.data.errcode = "10102")) {
                  MessageBox("温馨提示", res.data.errmsg);
                }
              }
            });
        });
      }else {
        MessageBox("温馨提示", "请输入正确的手机号");
      }

    },
    getCard() {
      this.$ajax
        .post("/card/pick.app", {
          customerId: localStorage.getItem("customerId"),
          cardNo: localStorage.getItem("cardId")
        })
        .then(res => {
          console.log(res);
          if (res.data.errcode === "00000") {
            console.log("领取成功");
            this.$router.replace({ path: "/getSuccess" });
          } else {
            this.$router.replace({path: '/WeixinInGet'})
            localStorage.setItem('cardDescription', this.cardDescription)
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.AppInGet {
  min-width: 320/100rem;
  header {
    .header-top {
      position: fixed;
      z-index: 922;
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
          /*<!--background: url("../../assets/images/CollectingCards/return.png")-->*/
            /*<!--no-repeat center;-->*/
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
    .content-bt-form {
      width: 500/100rem;
      height: 150/100rem;
      margin: 43/100rem auto 0;
      input {
        border: 0;
        float: left;
        width: 100%;
        height: 100%;
        position: relative;
        font-size: 30/100rem;
        background-color: transparent;
        color: #000;
        padding-left: 76/100rem;
      }
      /*input::input-placeholder, textarea::input-placeholder{*/
      /*color:#b3b3b3!important;*/
      /*}*/
      input::-webkit-input-placeholder,
      textarea::-webkit-input-placeholder {
        color: #b3b3b3 !important;
      }
      input:-moz-placeholder,
      textarea:-moz-placeholder {
        color: #b8c4ce !important;
      }
      input::-moz-placeholder,
      textarea::-moz-placeholder {
        color: #b8c4ce !important;
      }
      input:-ms-input-placeholder,
      textarea:-ms-input-placeholder {
        color: #b8c4ce !important;
      }
      .first-ipt,
      .last-ipt {
        height: 70/100rem;
        /*<!--border-bottom: solid 1/rem #cccccc;-->*/
        border-bottom: 1px solid rgb(204, 204, 204);
      }
      .first-ipt::before {
        content: "+86";
        position: absolute;
        width: 50/100rem;
        line-height: 70/100rem;
        font-size: 30/100rem;
        left: 75/100rem;
        height: 50 / rem;
      }
      .last-ipt {
        position: relative;
        button {
          position: absolute;
          font-size: 24/100rem;
          background-color: transparent;
          border: none;
          color: #f96;
          right: 0;
          line-height: 70/100rem;
          outline: none;
        }
      }
    }
  }
  footer {
    position: relative;
    /*height: 568/rem;*/
    .bt-mask {
      width: 100%;
      margin-top: 200/100rem;
      height: 570/100rem;
      position: relative;
      top: 10/100rem;
      z-index: 1000;
      > span {
        width: 140/100rem;
        height: 140/100rem;
        position: absolute;
        left: 50%;
        top: -50/100rem;
        transform: translateX(-50%);
        border-radius: 50%;
        background: url("../../assets/images/CollectingCards/dsasdadadadasda.png")
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
      margin-top: -5 / rem;
      font-size: 24/100rem;
      z-index: 999;
      .bt-mask-top {
        // padding: 66/100rem 80/100rem;
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
          i {
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
        li:last-child {
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
