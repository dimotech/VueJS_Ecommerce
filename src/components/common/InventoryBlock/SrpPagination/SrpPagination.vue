<template>
  <div>
    <nav aria-label="Page navigation example" class="srpPagination" id="srpPagination">
      <ul class="pagination">
        <li class="page-item prevSection">
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item curSection"><a class="page-link" v-for="i in getTotalPage()" @click="getCurPage(i - 1)" :class="['pageIndex'+ (i - 1)]">{{ i }}</a></li>
        <li class="page-item nextSection">
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <br><br/>
  </div>
</template>

<script>
    export default {
        name: "SrpPagination",
        props: ["resultOnce", "cached", "curPage", "itemsCount"],
        data: () => {
          return {

          }
        },
        mounted() {
          this.setSelectedPage(this.curPage);
        },
        watch: {
          curPage: function(val, oldVal) {
            this.setSelectedPage(this.curPage)
          },
          itemsCount: function(val, oldVal) {
            this.setSelectedPage(this.curPage)
            this.getTotalPage()
          }
        },
        methods: {
          getTotalPage() {
            let pagesCount = parseInt(parseInt(this.resultOnce.length) / parseInt(this.itemsCount)) + 1
            let srpPagiFlag = document.getElementById("srpPagination")
            if (srpPagiFlag) {
              if (pagesCount > 20) {
                document.getElementById("srpPagination").style.width = "100%"
                document.getElementById("srpPagination").style.overflowX = "scroll"
              } else {
                document.getElementById("srpPagination").style.width = "initial"
                document.getElementById("srpPagination").style.overflowX = "initial"
              }
            }
            return pagesCount
          },
          getCurPage(index) {
            this.setSelectedPage(index)
            this.$emit('updateCurPage', index)
          },
          setSelectedPage(index) {
            setTimeout(() => {
              let tmp = document.getElementsByClassName("curSection")
              let p = tmp[0].children;
              for (let i = 0; i < p.length; i++) {
                p[i].classList.remove("active");
                if (i == index) {
                  p[i].classList.add("active");
                }
              }
            }, 0)
          }
        }
    }
</script>

<style scoped>
  .srpPagination {
    display: inline-block;
    /*width: 100%;*/
    /*overflow-x: scroll;*/
  }
  .srpPagination ul {
    margin-bottom: 0px;
  }
  .page-item {
    display: inherit;
  }
  .page-item a.page-link.active {
    background-color: #007bff !important;
    color: white !important;
  }
  .page-item a.page-link {
    background-color: #f8f8f8;
    color: black !important;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 2px;
    height: 3px;
    margin-top: -10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #007bff;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
</style>
