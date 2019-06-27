<template>
  <ul>
    <li v-for="(item,index) in source" @click='go(item)'>{{item}}</li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {
        source:[
          'components/badge',
        ]
      }
    },
    methods: {
        go(url){
          this.$router.push(url);
        }
    }
  }
</script>
<style lang="scss" scoped>
  ul {
    li {
      height: 40px;
      width: 200px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      background-color: #409EFF;
      margin-bottom: 20px;
      list-style: none;
      cursor: pointer;
      border-radius: 6px;
    }
  }
</style>

