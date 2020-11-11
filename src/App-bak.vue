<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="records">分类</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  &-item {
    flex-grow: 1;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
}
</style>
