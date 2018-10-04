<template>
  <div class="container footer">
    <div class="row footerContent">
      <div class="col-sm-12">
        <div>
          <div class="col-sm-12 nav">
            <p>xxx</p>
          </div>
        </div>
        <hr>
        <div>
          <div class="col-sm-12 copyright">
            &copy; 2018 xxx.com
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterBlock"
    }
</script>

<style scoped>
  .footer {
    background-color: #007bff!important;
    max-width: 100%;
    padding: 10px;
  }
  .footerContent {
    max-width: 1200px;
    margin: auto;
    color: white;
  }
  hr {
    border-top: 1px solid white !important;
    margin: 5px auto;
  }
  .nav p {
    text-align: center;
    width: 100%;
    margin-bottom: 0px;
  }
</style>
