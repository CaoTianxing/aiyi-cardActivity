<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
getRem(750, 100);
      window.onresize = function () {
        getRem(750, 100)
      };

      function getRem(pwiDth, pRem) {
        var html = document.getElementsByTagName("html")[0];
        var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
        html.style.fontSize = oWidth / pwiDth * pRem + "px";
      }
export default {
  name: 'App',
  data(){
    return {
      browser:{}
    }
  },
  created(){
    /**
       * 在线调试
       */
      if (this.debug) {
        const script = document.createElement('script')
        script.src = '//cdn.jsdelivr.net/npm/eruda'
        document.body.appendChild(script)
        script.onload = function () { window.eruda.init({ tool: ['console', 'network', 'sources','resources'] }) }
      }
    // ********************************************************
    this.browser= {
      versions: function () {
        var u =navigator.userAgent;
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
          aiyi:u.indexOf('Aiyi')>-1
        };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
  }
}
</script>

<style>
  
</style>
