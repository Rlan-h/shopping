<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 派发一个 action，获取商品分类三级列表的数据
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
</style>
