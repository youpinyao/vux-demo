<template>
  <div>
    <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
      :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <loading :show="isLoading"></loading>
  </div>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    Loading,
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
      Loading,
    },
    methods: {

    },
    mounted() {

    },
    computed: {
      ...mapState({
        direction: state => state.vux.direction,
        isLoading: state => state.vux.isLoading,
      }),
    },
  };

</script>
