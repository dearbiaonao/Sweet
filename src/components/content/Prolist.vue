<template>
  <ul class="prolist">
    <!-- <router-link  class="proitem" v-for="(item, index) of product" :key="index" tag="li" :to="{name: 'detail', params: {id: item.id}}"> -->
    <li class="proitem" v-for="(item, index) of product" :key="index" @click="goDetail(item.id)">
      <div class="proimg">
        <img :src="item.images.medium" :alt="item.alt">
      </div>
      <div class="info">
        <h3>名称:
          <span> {{ item.title }} </span>
        </h3>
        <div class="director">
          导演:
          <span v-for="(itm, idx) of item.directors" :key="idx"> {{ itm.name }} </span>
        </div>
        <div class="cast">
          演员:
          <span v-for="(itm, idx) of item.casts" :key="idx"> {{ itm.name }} </span>
        </div>
        <Grade :rating="item.rating.average"/>
      </div>
    <!-- </router-link> -->
    </li>
  </ul>
</template>

<script>
import Grade from '@/components/content/Grade'

export default {
  components: {
    Grade
  },
  props: {
    product: Array
  },
  methods: {
    goDetail (id) {
      // this.$router.push('/detail/' + id)
      this.$router.push({ path: '/detail/' + id })
      // this.$router.push({ name: 'detail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/lib/reset.scss";

.prolist {
  @include flexbox ();
  @include flex-direction (column);
  .proitem {
    @include rect (100%, 1.1rem);
    @include flexbox ();
    @include border (0 0 1px 0, #999, solid);
    .proimg{
      @include rect (1.1rem, 1.1rem);
      img{
        @include rect (0.9rem, 0.9rem);
        @include margin (0.1rem);
      }
    }
    .info{
      @include flexbox ();
      @include flex-direction (column);
      @include rect (100%, auto);
      span{
        // @include color (#3e3e3e);
        @include font-size (12px);
      }
    }
  }
}
</style>
