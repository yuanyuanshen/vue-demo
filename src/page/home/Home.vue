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
            <router-link :to="'/city/' + guessCityId" class="guess_city">
                <span>{{guessCity.name}}</span>
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
        <section class="group_city_container">
            <ul class="letter_classify">
                <li class="letter_classify_li" v-for="(item,key,index) in sortgroupcity" :key="item">
                    <h4 class="group_city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="group_city_list clear">
                        <router-link tag="li" v-for="city in item" :key="city.id" :to="'/city/' + city.id" class="ellipsis" :title="city.name">
                            {{city.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>

import headTop from '../../components/header/Header'

export default {
    data() {
        return {
            hotCity: [], // 热门城市列表
            guessCity: {}, // 当前城市定位
        }
    },
    created() { },

    mounted() {
        // 获取热门城市
        this.$api.hotCity().then(res => {
            this.hotCity = res
        })

        // 获取当前城市定位
        this.$api.guessCity().then(res => {
            this.guessCity = res
            this.guessCityId = res.id
        })

        // 获取城市列表
        this.$api.groupCity().then(res => {
            this.groupCity = res
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
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity() {
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupCity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    }
}
</script>

<style lang="scss" scoped>
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
  border-top: 2px solid $bc;
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
.group_city_container {
  .letter_classify {
    margin-bottom: 0.4rem;
    .letter_classify_li {
      border-top: 2px solid $bc;
      background-color: #fff;
      margin-top: 0.3rem;
    }
    .group_city_title {
      padding: 0 0.45em;
      color: #666;
      @include font(0.45rem, 1.4rem);
      border-bottom: 1px solid $bc;
    }
    .group_city_list {
      @include font(0.55rem, 1.4rem);
      li {
        float: left;
        text-align: center;
        color: $blue;
        border-bottom: 0.025rem solid $bc;
        border-right: 0.025rem solid $bc;
        @include wh(25%, 1.4rem);
        @include sc(0.55rem, #666);
      }
      li:nth-of-type(4n) {
        border-right: none;
      }
    }
  }
}
</style>


