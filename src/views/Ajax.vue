<template>
  <div>
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="danger" @click="clearData">清空数据</van-button>
  </div>
</template>

<script>
export default {
  name: "Ajax",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 获取数据
    getData() {
      this.ajax();
    },
    // 清空数据
    clearData() {},
    ajax() {
      // ajax原理
      let movieUrl =
        "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a";
      // 1、创建XMLHttpRequest对象
      let xmlhttp;
      //判断浏览器是否支持ActiveX控件
      if (window.ActiveXObject) {
        //支持-通过ActiveXObject的一个新实例来创建XMLHttpRequest对象
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } //不支持
      else if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      }

      // 2、发送请求
      xmlhttp.open("GET", movieUrl, true);
      xmlhttp.send();

      // 3、服务器响应
      xmlhttp.addEventListener("readystatechange", () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          // let obj = JSON.parse(xmlhttp.responseText);
          // 存在乱码问题
        }
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
