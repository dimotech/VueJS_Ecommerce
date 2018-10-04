<template>
  <div class="card">
    <img class="card-img-top" src="https://s3.amazonaws.com/fzautomotive/dealers/5ba53c528f3fc.png" alt="Card image cap">
    <span class="specialTag"></span>
    <div class="card-body">
      <h5 class="card-title">Item Name</h5>
      <p class="card-text">
        <span>Size: xx</span> &nbsp; <span>Color: xx</span>
      </p>
    </div>
    <div class="hover">
      <a href="/detail" class="btn btn-outline-light">View Details</a>
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
    margin: 4px;
    position: relative;
  }
  .hover {
    position: absolute;
    top: 0px;
    display: none;
  }
  .specialTag {

  }
  .specialTag:after {

  }
  .specialTag:before {

  }
  .card:hover .hover {
    display: inline-block;
    background-color: black;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .hover .btn {
    position: relative;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
  }
</style>
