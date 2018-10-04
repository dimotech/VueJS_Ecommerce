<template>
  <div class="bannersBlock">
    <span>Banner</span>
  </div>
</template>

<script>
    export default {
        name: "BannersBlock"
    }
</script>

<style scoped>
    .bannersBlock {
      height: 200px;
      background-color: #007bff;
      max-width: 1200px;
      margin: 20px auto 50px auto;
    }
    .bannersBlock span {
      text-align: center;
      color: #fff;
      font-weight: bolder;
      font-size: 30px;
      vertical-align: middle;
      line-height: 200px;
    }
</style>
