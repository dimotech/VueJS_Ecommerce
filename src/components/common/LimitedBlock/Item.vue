<template>
  <div class="card">
    <img class="card-img-top" src="https://s3.amazonaws.com/fzautomotive/dealers/5ba543e4051bb.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Item Name</h5>
      <p class="card-text">
        <span>Size: xx</span> &nbsp; <span>Color: xx</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Item"
    }
</script>

<style scoped>
  .card {
    width: 14rem;
    display: inline-block;
    margin: 4px;
  }
</style>
