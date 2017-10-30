<template>
  <view-box ref="viewBox">
    <x-header slot="header"
      :title="title">
    </x-header>
    <scroller lock-x>
      <div>
        <div>{{msg}}</div>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
        <a href="">1231231</a>
      </div>
    </scroller>
  </view-box>
</template>

<script>
  import {
    ViewBox,
    Scroller,
    XHeader,
  } from 'vux';

  export default {
    name: 'Second',
    computed: {
      title() {
        return 'Second';
      },
    },
    components: {
      Scroller,
      XHeader,
      ViewBox,
    },
    mounted() {

    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js Second',
      };
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    font-size: 2rem;
    display: block;
  }

</style>
