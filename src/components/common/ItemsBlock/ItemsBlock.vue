<template>
  <div class="itemsBlock">
    <p>Most Popular Ones</p>
    <hr>
    <div class="itemDiv" v-for="i in 10">
      <item></item>
    </div>
  </div>
</template>

<script>
    import Item from '@/components/common/ItemsBlock/item'

    export default {
        name: "ItemsBlock",
        components: {
          Item
        }
    }
</script>

<style scoped>
  p {
    font-weight: bolder;
    margin-bottom: 0px;
  }
  .itemsBlock {
    max-width: 1200px;
    margin: 20px auto 50px auto;
  }
  .itemDiv {
    width: fit-content;
    display: inline-block;
  }
  hr {
    margin-top: 0px !important;
  }
</style>
