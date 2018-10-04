<template>
  <div class="card">
    <img class="card-img-top" src="https://s3.amazonaws.com/fzautomotive/dealers/5ba53fec247b2.png" alt="Card image cap">
    <div class="infoLine">
      <p>Title, Metadata, Detail</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "News"
  }
</script>

<style scoped>
  .card {
    width: 18rem;
    display: inline-block;
    margin: 4px;
    position: relative;
    height: 100%;
  }
  .card .infoLine {
    position: absolute;
    bottom: 0;
    height: 30px;
    background-color: black;
    opacity: 0.8;
    width: 100%;
    color: white;
  }
  .card .infoLine p {
    line-height: 30px;
    line-height: auto;
    vertical-align: middle;
  }
</style>
