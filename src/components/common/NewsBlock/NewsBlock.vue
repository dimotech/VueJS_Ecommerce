<template>
  <div class="newsBlock">
    <p>News</p>
    <hr>
    <div class="newsDiv" v-for="i in 4">
      <news></news>
    </div>
  </div>
</template>

<script>
  import News from '@/components/common/NewsBlock/News'

  export default {
    name: "NewsBlock",
    components: {
      News
    }
  }
</script>

<style scoped>
  p {
    font-weight: bolder;
    margin-bottom: 0px;
  }
  .newsBlock {
    max-width: 1200px;
    margin: 20px auto 50px auto;
  }
  .newsDiv {
    width: fit-content;
    display: inline-block;
  }
  hr {
    margin-top: 0px !important;
  }
</style>
