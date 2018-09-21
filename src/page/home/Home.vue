<template>
    <div class="home">
        <head-top signin-up='home'>
            <span slot="logo" class="head_logo">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/' + 1" class="guess_city">
                <span>{{guessCity}}AAA</span>
                <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="hot_city_title">热门城市</h4>
            <ul class="hot_city_list clear">
                <router-link tag="li" v-for="item in hotCity" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
        </section>
        <section class="group_city_container"></section>
    </div>
</template>

<script>

import headTop from '../../components/header/Header'

export default {
    data() {
        return {
            hotCity: [], // 热门城市列表
        }
    },
    created() { },

    mounted() {
        // 获取热门城市
        this.$api.getHotCity().then(res => {
            this.hotCity = res
        })
    },

    methods: {
        getHotCity() {

        }
    },

    components: {
        headTop
    },

    computed: {

    }
}
</script>

<style lang="scss" type="text/css">
@import "../../style/mixin";
.home {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
.head_logo {
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem, #fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}
.city_nav {
  padding-top: 2.35rem;
  border-top: 1px solid $bc;
  background-color: #fff;
  margin-bottom: 0.4rem;
  .city_tip {
    @include fj;
    line-height: 1.45em;
    padding: 0 0.45em;
    span:nth-of-type(1) {
      @include sc(0.55rem, #666);
    }
    span:nth-of-type(2) {
      font-weight: 900;
      @include sc(0.475rem, #9f9f9f);
    }
  }
  .guess_city {
    @include fj;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid $bc;
    border-bottom: 2px solid $bc;
    @include font(0.75rem, 1.8rem);
    span:nth-of-type(1) {
      color: $blue;
    }
    .arrow_right {
      @include wh(0.6rem, 0.6rem);
      fill: #999;
    }
  }
}
#hot_city_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
  .hot_city_title {
    padding: 0 0.45em;
    @include font(0.55rem, 1.4rem);
    border-bottom: 1px solid $bc;
  }
  .hot_city_list {
    @include font(0.55rem, 1.4rem);
    li {
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025rem solid $bc;
      border-right: 0.025rem solid $bc;
      @include wh(25%, 1.4rem);
    }
    li:nth-of-type(4n) {
      border-right: none;
    }
  }
}
</style>


