<template>
  <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
    <router-view class="router-view"></router-view>
  </transition>
</template>
<style lang="scss">
  body {
    background-color: #ffffff;
    font-size: 0.625em;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .weui-tab.router-view {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    height: auto;
  }

  .weui-tab .weui-tab__panel {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    height: auto;
    padding-bottom: 0;
    div[id^="vux-scroller"] {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      height: auto !important;
      margin: auto;
    }
  }

  .vux-header + .weui-tab__panel {
    top: 46px;
  }

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    transition: all 300ms ease;
    backface-visibility: hidden;
  }

  .vux-pop-out-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    transform: translate3d(-100%, 0, 0);
  }

</style>

<script>
  import {
    ViewBox,
    XHeader,
  } from 'vux';
  import {
    mapState,
  } from 'vuex';

  export default {
    name: 'app',
    data() {
      return {
        showMenu: false,
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left',
      };
    },
    components: {
      ViewBox,
      XHeader,
    },
    methods: {

    },
    mounted() {

    },
    computed: {
      ...mapState({
        direction: state => state.vux.direction,
      }),
    },
  };

</script>
