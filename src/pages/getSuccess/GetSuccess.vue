<template>
  <div class="getSuccess">
    <header class="clearfix">
      <div class="header-top">
        <div class="header-l"><a href=""></a></div>
      </div>
      <div class="header-cont">
        <img src="../../assets/images/CollectingCards/10adad54645464ad.png" alt="">
      </div>
    </header>
    <div class="content">
      <div class="rule clearfix"><router-link to="/ctivityRules"><a href="javascript:void(0)">活动规则&nbsp;<img src="../../assets/images/CollectingCards/xiaobaiqianjin2x.png" alt=""></a></router-link></div>
      <div class="content-cent">
        <img :src="cardImg" alt="">
        <div class="content-cent-mask"><img src="../../assets/images/CollectingCards/5456111313313131.png" alt=""></div>
      </div>
    </div>
    <div class="footer">
      <ul class="clearfix thumbSt">
        <li>
          <img style="display: none" ref="tznd" src="../../assets/images/thumb-1.png" alt="">
          <span style="display: none" ref="sp1">{{cardNum1}}</span>
        </li>
        <li>
          <img style="display: none" ref="tlpd" src="../../assets/images/thumb-2.png" alt="">
          <span style="display: none" ref="sp2">{{cardNum2}}</span>
        </li>
        <li>
          <img style="display: none" ref="thhd" src="../../assets/images/thumb-3.png" alt="">
          <span style="display: none" ref="sp3">{{cardNum3}}</span>
        </li>
        <li>
          <img style="display: none" ref="tsyd" src="../../assets/images/thumb-4.png" alt="">
          <span style="display: none" ref="sp4">{{cardNum4}}</span>
        </li>
        <li>
          <img style="display: none" ref="tsyk" src="../../assets/images/thumb-5.png" alt="">
          <span style="display: none" ref="sp5">{{cardNum5}}</span>
        </li>
      </ul>
    </div>
    <div class="bot-btn">
      <a href="">
        <img src="../../assets/images/CollectingCards/appck.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        spanHidden: false,
        cardImg:'',
        cardNum1: '',
        cardNum2: '',
        cardNum3: '',
        cardNum4: '',
        cardNum5: '',
      }
    },
    created(){
      // 获取领取成功后的图片
      this.cardImg = localStorage.getItem('cardImg')
      this.getAllcard()
    },
    methods:{
      // 获取所有卡片
      getAllcard(){
        var that = this
        this.$ajax.post('/card/list.app', {
          "customerId": localStorage.getItem('customerId'),
        })
          .then((res) => {

            // console.log('请求成功', res.data)
            if (res.data.errcode === '00000') {
              this.cardList = res.data.data
              if(this.cardList.length  === 0){
                this.$refs.init.style.display = 'black'
              }

              for(var i=0;i<=this.cardList.length - 1;i++){
                if(this.cardList[i].cardType === 1){
                  that.cardNum1 = this.cardList[i].num
                  this.$refs.tznd.style.display = 'block'
                  this.$refs.sp1.style.display = 'block'
                }else if(this.cardList[i].cardType === 2){
                  that.cardNum2 = this.cardList[i].num
                  this.$refs.tlpd.style.display = 'block'
                  this.$refs.sp2.style.display = 'block'
                }else if(this.cardList[i].cardType === 3){
                  that.cardNum3 = this.cardList[i].num
                  this.$refs.thhd.style.display = 'block'
                  this.$refs.sp3.style.display = 'block'
                }else if(this.cardList[i].cardType === 4){
                  that.cardNum4 = this.cardList[i].num
                  this.$refs.tsyd.style.display = 'block'
                  this.$refs.sp4.style.display = 'block'
                }else if(this.cardList[i].cardType === 5){
                  that.cardNum5 = this.cardList[i].num
                  this.$refs.tsyk.style.display = 'block'
                  this.$refs.sp5.style.display = 'block'
                }
              }
            }
          })
          .catch((error) => {
            // console.log(error);

          });
      }
    }
  };
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
      position: relative;
      height: 757/100rem;
      background: url('../../assets/images/CollectingCards/bg.png') no-repeat center;
      -webkit-background-size: cover;
      background-size: cover;
      .rule{
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
      img{
        height: 25/100rem;
        float: right;
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
      height: 244/100rem;
      background-color: #000f25;
      ul{
        /*<!--padding-top: 73/100rem ;-->*/
        padding-top: 40/100rem ;
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
        }
      }
    }
    .bot-btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 90/100rem;
      background-color: #fff;
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
