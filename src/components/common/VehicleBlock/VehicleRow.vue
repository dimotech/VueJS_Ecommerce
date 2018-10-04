<template>
  <div class="col-12 row all">
    <div class="col-3 left">
      <div class="imgBlock">
        <div class="imgPlacement">
          <img src="https://s3.amazonaws.com/fzautomotive/dealers/5a3a77a9b91f4.png" alt="">
        </div>
      </div>
    </div>
    <div class="col-9 right">
      <div class="vehicleBlock">
        <div class="infoPlacement row">
          <div class="col-8 detailDiv">
            <h4 class="vehicleTile"><a href="/details">{{ title }}</a></h4>
            <ul class="vehicleDetails">
              <li class="interiorColor detail">Int. Color: <span class="bold">{{ intcolor }}</span></li>
              <li class="transmission detail">Transmission: <span class="bold">{{ trans }}</span></li>
              <li class="mileage detail">Mileage: <span class="bold">{{ miles }}</span></li>
              <li class="engine detail">Engine: <span class="bold">{{ engcyls }}</span></li>
              <li class="drivetrain detail">Drivetrain: <span class="bold">{{ drivetrain }}</span></li>
              <li class="stock detail">Stock: <span class="bold">{{ stock }}</span></li>
              <li class="vin detail">VIN: <span class="bold">{{ vin }}</span></li>
            </ul>
          </div>
          <div class="col-4 pricingDiv">
            <div class="col-12">
              <span class="leftPart">MSRP: </span>
              <span class="rightPart">{{ msrp }}</span>
            </div>
            <div class="col-12">
              <span class="leftPart">Discount: </span>
              <span class="rightPart">{{ discount }}</span>
            </div>
            <div class="col-12">
              <span class="leftPart">Sale Price: </span>
              <span class="rightPart">{{ sellingprice }}</span>
            </div>
            <br/>
            <div class="col-12">
              <a class="btn btn-primary bpBtn">Get Our Best Price</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 btnDiv">
      <div class="viewDiv"><span class="viewsBtn"><i class="fa fa-eye"></i> 0 Views </span></div>
      <div class="compareDiv"><a class="btn compareBtn" href="#"><i class="fa fa-search"></i> Compare</a></div>
      <div class="saveDiv"><a class="btn saveBtn" href="#"><i class="fa fa-heart"></i> Save</a></div>
      <div class="offerDiv"><a class="btn" href="#"><i class="fa fa-tag"></i> Offers</a></div>
      <div class="sendDiv"><a class="btn" href="#"><i class="fa fa-envelope"></i> Message</a></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VehicleRow",
        props: ['vehicleInfo'],
        data: function () {
          return {
            title: this.vehicleInfo.type + ' ' + this.vehicleInfo.year + ' ' + this.vehicleInfo.make + ' ' + this.vehicleInfo.model + ' ' + this.vehicleInfo.trim,
            vin: this.vehicleInfo.vin,
            stock: this.vehicleInfo.stock,
            intcolor: this.vehicleInfo.intcolor,
            trans: this.vehicleInfo.trans,
            miles: this.vehicleInfo.miles,
            engcyls: this.vehicleInfo.engcyls + "Cylinders",
            drivetrain: this.vehicleInfo.drivetrain,
            msrp: this.changeToCurrency(this.vehicleInfo.msrp),
            sellingprice: this.changeToCurrency(this.vehicleInfo.sellingprice),
            discount: this.changeToCurrency(this.vehicleInfo.msrp - this.vehicleInfo.sellingprice)
          }
        },
        methods: {
          changeToCurrency(number) {
            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            })
            return formatter.format(number);
          }
        }
    }
</script>

<style scoped>
  .all {
    padding: 0px;
    margin-bottom: 20px;
    border-top: 0;
    box-shadow: 1px 1px 5px #ccc;
  }
  .left, .right {
    padding: 2px;
    border-bottom: 1px solid #ccc;
  }
  .imgBlock {
    padding: 10px;
  }
  .imgPlacement {
    position: relative;
    display: block;
    min-height: 160px;
  }
  .imgPlacement img {
    width: 100%;
    border: 1px solid #eee;
  }
  .vehicleBlock {
    padding: 10px 0px 10px 0px;
  }
  .infoPlacement {
    /*background: #f390fa;*/
    min-height: 160px;
    padding: 5px;
  }
  .detailDiv {

  }
  .pricingDiv {
    padding-left: 0px;
  }
  .vehicleTile {
    font-size: 15px;
    text-align: left;
  }
  .vehicleDetails {
    text-align: left;
    padding-left: 0px;
    padding-right: 0px;
  }
  .detail {
    display: inline-block;
    width: 48%;
    font-size: 12px;
  }
  .bold {
    font-weight: bolder;
  }
  .btnDiv div {
    display: inline-block;
    float: left;
  }
  .btnDiv .btn {
    font-size: 14px;
    color: #343a40;
    border: 1px solid #343a40;
    margin: 8px 4px;
    padding: 2px 5px;
  }
  .btnDiv .btn:hover {
    color: white;
    border: 1px solid #007bff;
    background-color: #007bff;
  }
  .viewDiv {
    margin-top: 8px;
    font-size: 14px;
    color: #343a40;
    padding: 2px 5px;
  }
  .pricingDiv > div {
    clear: both;
  }
  .leftPart, .rightPart {
    padding: 0px;
  }
  .leftPart {
    float: left;
  }
  .rightPart {
    float: right;
  }
  .bpBtn {
    color: white !important;
    width: 100%;
  }
</style>
