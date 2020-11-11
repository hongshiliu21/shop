<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="records">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
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

<style lang="scss" scoped></style>
