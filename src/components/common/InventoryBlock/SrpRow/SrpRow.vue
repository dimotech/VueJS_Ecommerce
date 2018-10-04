<template>
  <div>
    <div class="row">
      <vehicle-row v-for="vehicleInfo in curPageResults" :vehicleInfo="vehicleInfo" :key="vehicleInfo['vin']"></vehicle-row>
    </div>
  </div>
</template>

<script>
    import VehicleRow from '@/components/common/VehicleBlock/VehicleRow'

    export default {
        name: "SrpRow",
        props: ['resultOnce', 'cached', "curPage", "itemsCount"],
        components: {
          VehicleRow
        },
        created() {

        },
        mounted() {
          setTimeout(() => {
            this.showItems()

          }, 10000)
        },
        data: () => {
          return {
            curPageResults: [],
          }
        },
        watch: {
          resultOnce: function(val, OldVal) {
            this.showItems()
          },
          curPage: function(val, OldVal) {
            this.showItems()
          },
          itemsCount: function (val, OldVal) {
            this.showItems()
          }
        },
        methods: {
          showItems() {
            let showStart = parseInt(this.curPage * this.itemsCount);
            let showEnd = parseInt(showStart) + parseInt(this.itemsCount);
            this.curPageResults = this.resultOnce.slice(showStart, showEnd);
          }
        }
    }
</script>

<style scoped>
  .row {
    margin: 0px;
  }
</style>
