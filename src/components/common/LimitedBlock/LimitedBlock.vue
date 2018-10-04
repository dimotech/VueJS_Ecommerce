<template>
  <div class="limitedBlock">
    <p>Limited Time Offers {{ timeLeft }}</p>
    <hr>
    <div class="limitedDiv" v-for="i in 5">
      <item></item>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/common/LimitedBlock/Item'
    export default {
        name: "LimitedBlock",
        data: function() {
          return {
            timeLeft: ""
          }
        },
        mounted() {
          this.limitedCountDown();
        },
        components: {
          Item
        },
        methods: {
          limitedCountDown: function () {
            var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

              // Get todays date and time
              var now = new Date().getTime();


              // Find the distance between now and the count down date
              var distance = countDownDate - now;

              if (distance < 0) {
                this.timeLeft = "Offer Expired";
              }

              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);

              this.timeLeft = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            }, 1000);
          }
        }
    }
</script>

<style scoped>
  p {
    font-weight: bolder;
    margin-bottom: 0px;
  }
  .limitedBlock {
    max-width: 1200px;
    margin: 20px auto 50px auto;
  }
  .limitedDiv {
    width: fit-content;
    display: inline-block;
  }
  hr {
    margin-top: 0px !important;
  }
</style>
