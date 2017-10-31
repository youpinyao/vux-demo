<template>
  <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
    <router-view class="router-view"></router-view>
  </transition>
</template>

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
