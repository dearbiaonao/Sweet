<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import "@/lib/reset.scss";

html, body, #app, .detail,.cart {
  @include rect (100%, 100%);
  background-color: #f8f8f8;
}
#app, .detail, .cart {
  @include flexbox ();
  @include flex-direction (column);
  // @include font-size (12px);
  .container {
    @include flex ();
    @include flexbox ();
    @include flex-direction (column);
    @include rect (100%, auto);

    .header{
      @include rect (100%, 0.4rem);
      @include background-color (#f86464);
    }

    .content{
      @include flex ();
      @include rect (100%, auto);
      @include overflow (auto);
    }
  }

  .footer{
    @include rect (100%, 0.5rem);
    @include background-color (#efefef);
    ul{
      @include rect (100%, 100%);
      @include flexbox ();
      li{
        @include flex ();
        @include flexbox ();
        @include flex-direction(column);
        @include rect (auto, 100%);
        @include align-items (center);
        @include justify-content (center);
        p{
          @include font-size (12px);
        }
        i{
          height: 25px;
          @include font-size (24px);
        }
        &.router-link-active {
          @include color (#f86464);
        }
      }
    }
  }
}
</style>
