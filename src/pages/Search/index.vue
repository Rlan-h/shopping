<template>
  <div>
    <div>params参数{{ $route.params.keyWord }}</div>
    <div>query参数{{ $route.query.k }}</div>
  </div>
</template>

<script>
export default {
  props: ['keyWord']
}
</script>

<style>
</style>