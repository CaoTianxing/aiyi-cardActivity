<template>
  <div>
    <button @click="show">
      按钮
    </button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
  export default{
    data(){
      return {

      }
    },
    methods:{
      show(){
        MessageBox('Notice', 'You clicked the button');
      }
    }
  }
</script>