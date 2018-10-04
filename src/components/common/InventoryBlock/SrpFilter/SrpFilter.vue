<template>
  <div>
    <div class="filter" id="filter">
      <h4 class="searchTag">Search</h4>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Keyword Search" aria-label="Keyword Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary submitBtn" type="button">Submit</button>
        </div>
      </div>
      <h4 class="refineTag">Refine</h4>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="typeSelect">Type</label>
        </div>
        <select class="custom-select" id="typeSelect" v-model="curType">
          <option selected value="">Choose...</option>
          <option v-for="(value, i) in typeArr" :value="i">{{ i }}</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="yearSelect">Year</label>
        </div>
        <select class="custom-select" id="yearSelect" v-model="curYear">
          <option selected value="">Choose...</option>
          <option v-for="(value, i) in yearArr" :value="i">{{ i }}</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="makeSelect">Make</label>
        </div>
        <select class="custom-select" id="makeSelect" v-model="curMake">
          <option selected value="">Choose...</option>
          <option v-for="(value, i) in makeArr" :value="i">{{ i }}</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="modelSelect">Model</label>
        </div>
        <select class="custom-select" id="modelSelect" v-model="curModel">
          <option selected value="">Choose...</option>
          <option v-for="(value, i) in modelArr" :value="i">{{ i }}</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="trimSelect">Trim</label>
        </div>
        <select class="custom-select" id="trimSelect" v-model="curTrim">
          <option selected value="">Choose...</option>
          <option v-for="(value, i) in trimArr" :value="i">{{ i }}</option>
        </select>
      </div>
      <div class="input-group">
        <div class="">
          <button class="btn btn-primary resetBtn" type="button" @click="resetInventory">Reset</button>
        </div>
      </div>
    </div>
    <div class="srpSelectFilter" id="srpSelectFilter">
      <div class="div" id="typeDiv">
        <h4 class="typeTag tag">Type</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectTypeArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckType' + key " v-model="typeSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckType' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('typeDiv')" :class="checkLength(selectTypeArr)">Show All</p>
      </div>
      <div class="div" id="yearDiv">
        <h4 class="yearTag tag">Year</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectYearArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckYear' + key " v-model="yearSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckYear' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('yearDiv')" :class="checkLength(selectYearArr)">Show All</p>
      </div>
      <div class="div" id="makeDiv">
        <h4 class="makeTag tag">Make</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectMakeArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckMake' + key " v-model="makeSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckMake' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('makeDiv')" :class="checkLength(selectMakeArr)">Show All</p>
      </div>
      <div class="div" id="modelDiv">
        <h4 class="modelTag tag">Model</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectModelArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckModel' + key " v-model="modelSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckModel' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('modelDiv')" :class="checkLength(selectModelArr)">Show All</p>
      </div>
      <div class="div" id="trimDiv">
        <h4 class="trimTag tag">Trim</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectTrimArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckTrim' + key " v-model="trimSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckTrim' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('trimDiv')" :class="checkLength(selectTrimArr)">Show All</p>
      </div>
      <div class="div" id="bodyDiv">
        <h4 class="bodyTag tag">Body</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectBodyArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckBody' + key " v-model="bodySelected" :value="key">
          <label class="custom-control-label" :for="'customCheckBody' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('bodyDiv')" :class="checkLength(selectBodyArr)">Show All</p>
      </div>
      <div class="div" id="drivetrainDiv">
        <h4 class="drivetrainTag tag">Drivetrain</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectDrivetrainArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckDrivetrain' + key " v-model="drivetrainSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckDrivetrain' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('drivetrainDiv')" :class="checkLength(selectDrivetrainArr)">Show All</p>
      </div>
      <div class="div" id="transmissionDiv">
        <h4 class="transmissionTag tag">Transmission</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectTransArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckTrans' + key " v-model="transSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckTrans' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('transmissionDiv')" :class="checkLength(selectTransArr)">Show All</p>
      </div>
      <div class="div" id="exteriorcolorDiv">
        <h4 class="exteriorcolorTag tag">Exterior Color</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectExteriorColorArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckExtcolor' + key " v-model="exteriorColorSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckExtcolor' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('exteriorcolorDiv')" :class="checkLength(selectExteriorColorArr)">Show All</p>
      </div>
      <div class="div" id="priceDiv">
        <h4 class="priceTag tag">Price</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectPriceArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckMsrp' + key " v-model="priceSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckMsrp' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('priceDiv')" :class="checkLength(selectPriceArr)">Show All</p>
      </div>
      <div class="div" id="highwaympgDiv">
        <h4 class="highwaympgTag tag">Highway MPG</h4>
        <hr>
        <div class="custom-control custom-checkbox" v-for="(value, key, index) in selectHighwayMPGArr" :class="[{ hide: index > 5 }]">
          <input type="checkbox" class="custom-control-input" :id="'customCheckHighwayMPG' + key " v-model="highwayMPGSelected" :value="key">
          <label class="custom-control-label" :for="'customCheckHighwayMPG' + key">{{ key }} <span class="float-right">{{ value }}</span></label>
        </div>
        <p class="text-right toggle" @click="toggle('highwaympgDiv')" :class="checkLength(selectHighwayMPGArr)">Show All</p>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "SrpFilter",
        components: {

        },
        props: ['resultOnce', 'cached'],
        data: function () {
          return {
            typeArr: [],
            yearArr: [],
            makeArr: [],
            modelArr: [],
            trimArr: [],
            selectTypeArr: [],
            selectYearArr: [],
            selectMakeArr: [],
            selectModelArr: [],
            selectTrimArr: [],
            selectBodyArr: [],
            selectDrivetrainArr: [],
            selectTransArr: [],
            selectExteriorColorArr: [],
            selectPriceArr: [],
            selectHighwayMPGArr: [],
            curType: "",
            curYear: "",
            curMake: "",
            curModel: "",
            curTrim: "",
            result: [],
            resultBK: [],
            typeSelected: [],
            yearSelected: [],
            makeSelected: [],
            modelSelected: [],
            trimSelected: [],
            bodySelected: [],
            drivetrainSelected: [],
            transSelected: [],
            exteriorColorSelected: [],
            priceSelected: [],
            highwayMPGSelected: []
          }
        },
        mounted() {
          setTimeout(() => {
            this.result = this.resultOnce;
            this.resultBK = this.resultOnce;
            console.log(this.resultBK);
            this.getFilterOptions(this.result);
            this.getSelectFields();
          }, 10000);
        },
        watch: {
          curType: function(val, oldVal) {
            if (val == "" && this.curYear == "" && this.curMake == "" && this.curModel == "" && this.curTrim == "") {
              this.complexUpdate();
            } else if (val == "") {
              this.complexUpdate();
            } else {
              this.result = this.result.filter(function (i) {
                return i["type"] == val;
              })
              this.getFilterOptions(this.result);
            }
            if (this.curType != "") {
              document.getElementById("typeSelect").style.background = "#007bff"
              document.getElementById("typeSelect").style.color = "white"
            } else {
              document.getElementById("typeSelect").style.background = "white"
              document.getElementById("typeSelect").style.color = "#495057"
            }
          },
          curYear: function(val, oldVal) {
            if (val == "" && this.curType == "" && this.curMake == "" && this.curModel == "" && this.curTrim == "") {
              this.complexUpdate();
            } else if (val == "") {
              this.complexUpdate();
            } else {
              this.result = this.result.filter(function (i) {
                return i["year"] == val;
              })
              this.getFilterOptions(this.result);
            }
            if (this.curYear != "") {
              document.getElementById("yearSelect").style.background = "#007bff"
              document.getElementById("yearSelect").style.color = "white"
            } else {
              document.getElementById("yearSelect").style.background = "white"
              document.getElementById("yearSelect").style.color = "#495057"
            }
          },
          curMake: function(val, oldVal) {
            if (val == "" && this.curType == "" && this.curYear == "" && this.curModel == "" && this.curTrim == "") {
              this.complexUpdate();
            } else if (val == "") {
              this.complexUpdate();
            } else {
              this.result = this.result.filter(function (i) {
                return i["make"] == val;
              })
              this.getFilterOptions(this.result);
            }
            if (this.curMake != "") {
              document.getElementById("makeSelect").style.background = "#007bff"
              document.getElementById("makeSelect").style.color = "white"
            } else {
              document.getElementById("makeSelect").style.background = "white"
              document.getElementById("makeSelect").style.color = "#495057"
            }
          },
          curModel: function(val, oldVal) {
            if (val == "" && this.curType == "" && this.curYear == "" && this.curMake == "" && this.curTrim == "") {
              this.complexUpdate();
            } else if (val == "") {
              this.complexUpdate();
            } else {
              this.result = this.result.filter(function (i) {
                return i["model"] == val;
              })
              this.getFilterOptions(this.result);
            }
            if (this.curModel != "") {
              document.getElementById("modelSelect").style.background = "#007bff"
              document.getElementById("modelSelect").style.color = "white"
            } else {
              document.getElementById("modelSelect").style.background = "white"
              document.getElementById("modelSelect").style.color = "#495057"
            }
          },
          curTrim: function(val, oldVal) {
            if (val == "" && this.curType == "" && this.curYear == "" && this.curMake == "" && this.curModel == "") {
              this.complexUpdate();
            } else if (val == "") {
              this.complexUpdate();
            } else {
              this.result = this.result.filter(function (i) {
                return i["trim"] == val;
              })
              this.getFilterOptions(this.result);
            }
            if (this.curTrim != "") {
              document.getElementById("trimSelect").style.background = "#007bff"
              document.getElementById("trimSelect").style.color = "white"
            } else {
              document.getElementById("trimSelect").style.background = "white"
              document.getElementById("trimSelect").style.color = "#495057"
            }
          },
          typeSelected: function(val, oldVal) {
            this.detailedComplexUpdate();

          }
        },
        computed: {

        },
        methods: {
          getTypeArr(val) {
            var tmp = val.reduce(function(acc, val) {
              var key = val["type"]
              if (key != null)
               acc[key] = acc[key] == undefined ? 1 : acc[key] += 1;
              return acc;
            }, {})
            this.typeArr = tmp;
          },
          getYearArr(val) {
            var tmp = val.reduce(function(acc, val) {
              var key = val["year"]
              if (key != null)
                acc[key] = acc[key] == undefined ? 1 : acc[key] += 1;
              return acc;
            }, {})
            this.yearArr = tmp;
          },
          getMakeArr(val) {
            var tmp = val.reduce(function(acc, val) {
              var key = val["make"]
              if (key != null)
                acc[key] = acc[key] == undefined ? 1 : acc[key] += 1;
              return acc;
            }, {})
            this.makeArr = tmp;
          },
          getModelArr(val) {
            var tmp = val.reduce(function(acc, val) {
              var key = val["model"]
              if (key != null)
                acc[key] = acc[key] == undefined ? 1 : acc[key] += 1;
              return acc;
            }, {})
            this.modelArr = tmp;
          },
          getTrimArr(val) {
            let tmp = val.reduce(function(acc, val) {
              let key = val["trim"]
              if (key != null)
                acc[key] = acc[key] == undefined ? 1 : acc[key] += 1;
              return acc;
            }, {})
            this.trimArr = tmp;
          },
          getFilterOptions(val) {
            this.getTypeArr(val);
            this.getYearArr(val);
            this.getMakeArr(val);
            this.getModelArr(val);
            this.getTrimArr(val);
            this.updateInventory();
            this.curPage = 0
          },
          updateInventory() {
            this.$emit('updateInventory', this.result)
            this.getSelectFields();
          },
          complexUpdate() {
            this.result = this.cached.filter((i) => {
              return this.checkCurType(i) && this.checkCurYear(i) && this.checkCurMake(i) && this.checkCurModel(i) && this.checkCurTrim(i)
            })
            this.getFilterOptions(this.result);
          },
          checkCurType(i) {
            if (this.curType == "") {
              return true;
            } else {
              return i["type"] == this.curType;
            }
          },
          checkCurYear(i) {
            if (this.curYear == "") {
              return true;
            } else {
              return i["year"] == this.curYear;
            }
          },
          checkCurMake(i) {
            if (this.curMake == "") {
              return true;
            } else {
              return i["make"] == this.curMake;
            }
          },
          checkCurModel(i) {
            if (this.curModel == "") {
              return true;
            } else {
              return i["model"] == this.curModel;
            }
          },
          checkCurTrim(i) {
            if (this.curTrim == "") {
              return true;
            } else {
              return i["trim"] == this.curTrim;
            }
          },
          resetInventory() {
            // this.$emit('updateInventory', "reset");
            setTimeout(() => {
              this.getFilterOptions(this.resultOnce);
              this.result = this.resultOnce;
              this.curType = "";
              this.curYear = "";
              this.curMake = "";
              this.curModel = "";
              this.curTrim = "";
              this.$emit('updateInventory', "reset");
            }, 1000)
          },
          getSelectFields() {
            let allSelectFields = this.result.reduce((acc, cached) => {
              // let keySet = ["keyType", "keyYear", "keyMake", "keyModel", "keyTrim", "keyBody", "keyDrivetrain", "keyTransmission", "keyExtColor", "keyPrice", "keyHighwayMPG"]
              let keyType = cached["type"]
              let keyYear = cached["year"]
              let keyMake = cached["make"]
              let keyModel = cached["model"]
              let keyTrim = cached["trim"]
              let keyBody = cached["body"]
              let keyDrivetrain = cached["drivetrain"]
              let keyTransmission = cached["trans"]
              let keyExtColor = cached["extcolor"]
              let keyPrice = cached["msrp"]
              let keyHighwayMPG = cached["epahighway"]

              acc["type"][keyType] = acc["type"][keyType] == undefined ? 1 : acc["type"][keyType] += 1;
              acc["year"][keyYear] = acc["year"][keyYear] == undefined ? 1 : acc["year"][keyYear] += 1;
              acc["make"][keyMake] = acc["make"][keyMake] == undefined ? 1 : acc["make"][keyMake] += 1;
              acc["model"][keyModel] = acc["model"][keyModel] == undefined ? 1 : acc["model"][keyModel] += 1;
              acc["trim"][keyTrim] = acc["trim"][keyTrim] == undefined ? 1 : acc["trim"][keyTrim] += 1;
              acc["body"][keyBody] = acc["body"][keyBody] == undefined ? 1 : acc["body"][keyBody] += 1;
              acc["drivetrain"][keyDrivetrain] = acc["drivetrain"][keyDrivetrain] == undefined ? 1 : acc["drivetrain"][keyDrivetrain] += 1;
              acc["trans"][keyTransmission] = acc["trans"][keyTransmission] == undefined ? 1 : acc["trans"][keyTransmission] += 1;
              acc["extcolor"][keyExtColor] = acc["extcolor"][keyExtColor] == undefined ? 1 : acc["extcolor"][keyExtColor] += 1;
              acc["msrp"][keyPrice] = acc["msrp"][keyPrice] == undefined ? 1 : acc["msrp"][keyPrice] += 1;
              acc["epahighway"][keyHighwayMPG] = acc["epahighway"][keyHighwayMPG] == undefined ? 1 : acc["epahighway"][keyHighwayMPG] += 1;

              return acc;
            }, {
              type: {},
              year: {},
              make: {},
              model: {},
              trim: {},
              body: {},
              drivetrain: {},
              trans: {},
              extcolor: {},
              msrp: {},
              epahighway: {}
            })

            this.selectTypeArr = allSelectFields.type
            this.selectYearArr = this.sortKey(-1, allSelectFields.year)
            this.selectMakeArr = this.sortKey(1, allSelectFields.make)
            this.selectModelArr =  this.sortKey(1, allSelectFields.model)
            this.selectTrimArr =  this.sortKey(1, allSelectFields.trim)
            this.selectBodyArr =  this.sortKey(1, allSelectFields.body)
            this.selectDrivetrainArr =  this.sortKey(1, allSelectFields.drivetrain)
            this.selectTransArr =  this.sortKey(1, allSelectFields.trans)
            this.selectExteriorColorArr =  this.sortKey(1, allSelectFields.extcolor)
            this.selectPriceArr = this.combineKey('price', allSelectFields.msrp)
            this.selectHighwayMPGArr = this.combineKey('mpg', allSelectFields.epahighway)
          },
          sortKey(asc, obj) {
            const ordered = {};
            Object.keys(obj).sort().forEach(function(key) {
              ordered[key] = obj[key];
            });
            return ordered;
          },
          combineKey(key, obj) {
            switch(key) {
              case 'price':
                let priceObj = {
                  "0 - 4999": 0,  // 0
                  "5000 - 9999": 0,  // 1
                  "10000 - 14999": 0,  // 2
                  "15000 - 19999": 0,  // 3
                  "20000 - 24999": 0,  // 4
                  "25000 - 29999": 0,  // 5
                  "30000 - 34999": 0,  // 6
                  "35000 - 39999": 0,  // 7
                  "40000 - 44999": 0,  // 8
                  "45000 - 49999": 0,  // 9
                  "50000 - 54999": 0,  // 10
                  "55000 - 59999": 0,  // 11
                  "60000 - 64999": 0,  // 12
                  "65000 - 69999": 0,  // 13
                  "70000 - 74999": 0,  // 14
                  "75000 - 79999": 0,  // 15
                  "80000 - 84999": 0,  // 16
                  "85000 - 89999": 0,  // 17
                  "90000 - 94999": 0,  // 18
                  "95000 - 99999": 0,  // 19
                  "100000 - 499999": 0,  // 20
                }
                Object.keys(obj).forEach((key) => {
                  let nums = parseInt(obj[key]);
                  if (key == null) {
                    priceObj["0 - 4999"] += nums;
                  }
                  let tmpK = parseInt(key);
                  if (tmpK < 5000)
                    priceObj["0 - 4999"] += nums;
                  else if (tmpK < 10000)
                    priceObj["5000 - 9999"] += nums;
                  else if (tmpK < 15000)
                    priceObj["10000 - 14999"] += nums;
                  else if (tmpK < 20000)
                    priceObj["15000 - 19999"] += nums;
                  else if (tmpK < 25000)
                    priceObj["20000 - 24999"] += nums;
                  else if (tmpK < 30000)
                    priceObj["25000 - 29999"] += nums;
                  else if (tmpK < 35000)
                    priceObj["30000 - 34999"] += nums;
                  else if (tmpK < 40000)
                    priceObj["35000 - 39999"] += nums;
                  else if (tmpK < 45000)
                    priceObj["40000 - 44999"] += nums;
                  else if (tmpK < 50000)
                    priceObj["45000 - 49999"] += nums;
                  else if (tmpK < 55000)
                    priceObj["50000 - 54999"] += nums;
                  else if (tmpK < 60000)
                    priceObj["55000 - 59999"] += nums;
                  else if (tmpK < 65000)
                    priceObj["60000 - 64999"] += nums;
                  else if (tmpK < 70000)
                    priceObj["65000 - 69999"] += nums;
                  else if (tmpK < 75000)
                    priceObj["70000 - 74999"] += nums;
                  else if (tmpK < 80000)
                    priceObj["75000 - 79999"] += nums;
                  else if (tmpK < 85000)
                    priceObj["80000 - 84999"] += nums;
                  else if (tmpK < 90000)
                    priceObj["85000 - 89999"] += nums;
                  else if (tmpK < 95000)
                    priceObj["90000 - 94999"] += nums;
                  else if (tmpK < 100000)
                    priceObj["95000 - 99999"] += nums;
                  else if (tmpK < 500000)
                    priceObj["100000 - 499999"] += nums;
                })
                Object.keys(priceObj).forEach((key) => {
                  if (priceObj[key] == 0)
                    delete priceObj[key]
                })
                return priceObj;
                break;
              case 'mpg':
                let mpgObj = {
                  "0 - 4": 0,  // 0
                  "5 - 9": 0,  // 1
                  "10 - 14": 0,  // 2
                  "15 - 19": 0,  // 3
                  "20 - 24": 0,  // 4
                  "25 - 29": 0,  // 5
                  "30 - 34": 0,  // 6
                  "35 - 39": 0,  // 7
                  "40 - 44": 0,  // 8
                  "45 - 49": 0,  // 9
                  "50 - 54": 0,  // 10
                  "55 - 59": 0,  // 11
                }
                Object.keys(obj).forEach((key) => {
                  let nums = parseInt(obj[key]);
                  if (key == null || isNaN(key)) {
                    mpgObj["0 - 4"] += nums;
                  }
                  let tmpK = parseInt(key);
                  if (tmpK < 5)
                    mpgObj["0 - 4"] += nums;
                  else if (tmpK < 10)
                    mpgObj["5 - 9"] += nums;
                  else if (tmpK < 15)
                    mpgObj["10 - 14"] += nums;
                  else if (tmpK < 20)
                    mpgObj["15 - 19"] += nums;
                  else if (tmpK < 25)
                    mpgObj["20 - 24"] += nums;
                  else if (tmpK < 30)
                    mpgObj["25 - 29"] += nums;
                  else if (tmpK < 35)
                    mpgObj["30 - 34"] += nums;
                  else if (tmpK < 40)
                    mpgObj["35 - 39"] += nums;
                  else if (tmpK < 45)
                    mpgObj["40 - 44"] += nums;
                  else if (tmpK < 50)
                    mpgObj["45 - 49"] += nums;
                  else if (tmpK < 55)
                    mpgObj["50 - 54"] += nums;
                  else if (tmpK < 60)
                    mpgObj["55 - 59"] += nums;
                })
                Object.keys(mpgObj).forEach((key) => {
                  if (mpgObj[key] == 0)
                    delete mpgObj[key]
                })
                return mpgObj;
                break;
              default:
                break;
            }
          },
          checkLength(arr) {
            if (Object.keys(arr).length > 5) {
              return "show"
            } else {
              return "hide"
            }
          },
          toggle(c) {
            let targetDiv = document.getElementById(c)
            targetDiv.childNodes.forEach((i) => {
              if (i != null && i.classList != null && i.classList.contains("custom-checkbox")) {
                if (i.classList.contains("hide")) {
                  i.classList.remove("hide")
                  i.classList.add("show")
                } else if (i.classList.contains("show")) {
                  i.classList.remove("show")
                  i.classList.add("hide")
                }
              }
              if (i != null && i.classList != null && i.classList.contains("toggle")) {
                if (i.innerHTML == "Show All")
                  i.innerHTML = "Show Less"
                else
                  i.innerHTML = "Show All"
              }
            })
          },
          detailedComplexUpdate() {

          }
        },
        filters: {

        }
    }
</script>

<style scoped>
  .filter, .srpSelectFilter {
    background: #f8f8f8;
    padding: 10px;
    margin-bottom: 20px;
  }
  .filter .submitBtn {
    width: 65px;
    font-size: 12px;
    font-weight: bolder;
  }
  .filter .resetBtn {
    float: right;
  }
  .filter h4.refineTag, .filter h4.searchTag {
    text-align: left;
    font-size: 16px;
  }
  .input-group-text {
    font-size: 12px;
    font-weight: bolder;
    width: 58px;
  }
  .tag {
    text-align: left;
    font-size: 14px;
    font-weight: bolder;
  }
  hr {
    margin-top: 0px;
    margin-bottom: 5px;
  }
  .div {
    text-align: left;
    margin-bottom: 15px;
  }
  .custom-control-label {
    width: 100%;
  }
  .custom-control-label:hover {
    background-color: #007bff;
    color: white;
    font-weight: bolder;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  .toggle {
    font-size: 14px;
    text-decoration: underline;
    font-style: italic;
    color: #007bff;
    cursor: pointer;
  }

</style>
