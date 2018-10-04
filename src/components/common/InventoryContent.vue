<template>
    <div class="row inventoryBlock">
      <div class="col-12 srpHeader">
        <srp-header></srp-header>
      </div>
      <div class="col-12" id="loadingBlock">
        <loading-block></loading-block>
      </div>
      <div class="col-3 srpFilter" id="srpFilter">
        <srp-filter :resultOnce="result" :cached="cachedResult" @updateInventory="updateView"></srp-filter>
      </div>
      <div class="col-9 srpRow" id="srpRow">
        <div class="col-12" id="loadingBlockRight">
          <loading-block></loading-block>
        </div>
        <div id="mainContent">
          <div class="col-6 mcLeft">
            <h4 class="countTag">Total Matched: {{ total }}</h4>
          </div>
          <div class="col-6 mcRight">
            <form>
              <div class="row justify-content-end">
                <div class="col-6">
                  <div class="form-group">
                    <select class="form-control" id="itemsCount" v-model="itemsPerPage">
                      <option value="12">12 Vehicles Per Page</option>
                      <option value="24">24 Vehicles Per Page</option>
                      <option value="36">36 Vehicles Per Page</option>
                      <option value="48">48 Vehicles Per Page</option>
                      <option value="60">60 Vehicles Per Page</option>
                    </select>
                  </div>
                </div>
              </div>
             </form>
          </div>
          <hr>
          <srp-row :resultOnce="result" :cached="cachedResult" :curPage="curPage" :itemsCount="itemsPerPage"></srp-row>
          <srp-pagination :resultOnce="result" :cached="cachedResult" :curPage="curPage" :itemsCount="itemsPerPage" @updateCurPage="updateCurPageStatus"></srp-pagination>
        </div>
      </div>
      <div class="col-12 srpFooter" id="srpFooter">
        <srp-footer></srp-footer>
      </div>
    </div>
</template>

<script>
    import { eventBus } from "../../main"

    import SrpFilter from "@/components/common/InventoryBlock/SrpFilter/SrpFilter"
    import SrpRow from "@/components/common/InventoryBlock/SrpRow/SrpRow"
    import SrpHeader from "@/components/common/InventoryBlock/SrpHeader/SrpHeader"
    import SrpFooter from "@/components/common/InventoryBlock/SrpFooter/SrpFooter"
    import SrpPagination from '@/components/common/InventoryBlock/SrpPagination/SrpPagination'
    import LoadingBlock from '@/components/common/LoadingBlock/LoadingBlock'

    export default {
        name: "InventoryContent",
        data: function() {
          return {
            total: 0,
            maxResults: 10,
            wholeResult: "",
            result: [],
            cachedResult: [],
            resetFlag: false,
            curPage: 0,
            itemsPerPage: 12,
          }
        },
        created() {
          this.getTotalCount()
        },
        mounted() {
          setTimeout(() => {
            document.getElementById("srpFilter").style.display = "block";
            document.getElementById("srpRow").style.display = "block";
            document.getElementById("srpFooter").style.display = "block";
            document.getElementById("loadingBlock").style.display = "none";
            document.getElementById("loadingBlockRight").style.display = "none";
            document.getElementById("mainContent").style.display = "block";

          }, 10000)
        },
        watch: {
          result: function(val, oldVal) {

          },
          itemsPerPage: function(val, oldVal) {
            this.curPage = 0
          }
        },
        components: {
          SrpFilter,
          SrpRow,
          SrpHeader,
          SrpFooter,
          SrpPagination,
          LoadingBlock
        },
        methods: {
          getTotalCount: function() {
            var self = this;
            this.$http.get('http://192.168.0.100:5001/details').then(response => {
              this.wholeResult = response.body;
              this.total = this.wholeResult["_meta"]["total"]
              this.maxResults = this.wholeResult["_meta"]["max_results"]
              this.wholeResult["_items"].forEach(function(i) {
                self.result.push(i);
                self.cachedResult.push(i);
              })
            }, response => {
              // error callback
            }).then(data => {
              var pages = parseInt(this.total / this.maxResults) + 1;
              async function asyncFun (data) {
                for (let i = 2; i <= pages; i++) {
                  await new Promise((resolve) => setTimeout(function() {
                    var url = "http://192.168.0.100:5001/details?page=" + i;
                    let res = fetch(url)
                      .then(function(response) {
                        return response.json();
                      }).then(function (data) {
                        resolve();
                        data["_items"].forEach(function(i) {
                          self.result.push(i);
                          self.cachedResult.push(i);
                        })
                      })
                  }, 0));
                }
              }
              (async () => {
                await asyncFun(self.result);
              })()
            })
          },
          updateView(value) {
            this.curPage = 0
            document.getElementById("loadingBlockRight").style.display = "block"
            document.getElementById("mainContent").style.display = "none"
            setTimeout(() => {
              document.getElementById("loadingBlockRight").style.display = "none"
              document.getElementById("mainContent").style.display = "block"
            }, 500)
            if (value == "reset") {
              this.resetView();
              return;
            }
            this.result = value;
            this.total = value.length;
          },
          resetView() {
            this.curPage = 0
            this.result = this.cachedResult;
            this.total = this.result.length;
          },
          updateCurPageStatus(index) {
            console.log("update action");
            this.curPage = index;
          }
        }
    }
</script>

<style scoped>
  #loadingBlock {
    min-height: 1100px;
  }
  .srpFilter, .srpRow, .srpFooter {
    display: none;
  }
  .inventoryBlock {
    max-width: 1200px;
    margin: auto;
  }
  .countTag {
    text-align: left;
    font-size: 14px;
  }
  .inventoryBlock {

  }
  #loadingBlockRight, #mainContent {
    display: block;
  }
  .mcLeft, .mcRight {
    width: 49%;
    padding: 0px;
    display: inline-block;
  }
  .mcRight .form-group {
    margin-bottom: 0px;
  }
</style>
