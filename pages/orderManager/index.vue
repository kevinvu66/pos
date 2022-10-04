<template>
  <div class="text-center">
    <div class="fist">
<div class="content">
<b>Quản lý đơn hàng</b>
</div>
    </div>
    <div class="body">
      <div class="input">
        <input type="text" placeholder="Nhập mã giảm giá/tên bảng giá">

             </div>
<div class="pew">
<div class="pewFist">
  <div class="Fist">
    <div class="leftFist">
    <b>DH2208361782</b>
  </div>
  <div class="rightFist" style="">
    <div class="TR"><p>Đã xác nhận</p>
    </div>
    
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Tên khách háng : </p>
  </div>
  <div class="rightFist1">
    <p>Phạm Văn Quân</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Số điện thoại : </p>
  </div>
  <div class="rightFist1">
    <p>0901 112233</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Loại đơn hàng : </p>
  </div>
  <div class="rightFist1">
    <p>22-9-2022 15:47</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Loại đơn hàng: </p>
  </div>
  <div class="rightFist1">
   <p>Cần đi giao</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Vận chuyển : </p>
  </div>
  <div class="rightFist1">
 <p>Grab</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Phương thức thanh toán : </p>
  </div>
  <div class="rightFist1">
  <p>Tiền mặt(COD)</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Trạng thái thanh toán: </p>
  </div>
  <div class="rightFist1">
    <p>Đã thanh toán</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Tổng tiền đơn hàng : </p>
  </div>
  <div class="rightFist1">
    <b>9.888.000 đ</b>
  </div>
  </div>
</div>
</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.fist {
display: flex;
justify-content: center;
align-items: center;
padding: 30px 10px 10px;
width: 1440px;
height: 76px;
background: #FFFFFF;
.content {
width: 912px;
height: 36px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 150%;
display: flex;
align-items: center;
letter-spacing: 0.5px;
b{
  font-size: 24pt;
}
}
}
.body{
  display: flex;
flex-direction: column;

align-items: center;
padding: 40px 10px;
gap: 15px;
width: 1440px;
height: 866px;
.input{
  display: flex;
width: 912px;
height: 44px;
input{
  width: 912px;
height: 44px; 
border-radius: 4px;
border: 1px solid black;
}
}
.addcart{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 5px;
gap: 10px;
width: 912px;
height: 52px;
background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
border-radius: 4px;
p{
font-family: 'Roboto';
font-weight: 400;
font-size: 16px;
line-height: 16px;
display: flex;
align-items: center;
color: #FFFFFF;
}
}
.pew{
  box-sizing: border-box;
display: flex;
padding: 12px 16px;
gap: 10px;
width: 912px;
height: 236px;
border: 1px solid #CBD5E1;
border-radius: 6px;
.pewFist{
display: flex;
flex-direction: column;
padding: 0px;
gap: 10px;
width: 880px;
height: 19px;
.end{
  background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
  width: 880px;
height: 32px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 5px;
p{
  color: white;
  font-size: 13px;

}
}

.Fist{
  width: 880;
height: 19px;
display: flex;
.leftFist1{
  width: 437.5px;
height: 15px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;

}
.rightFist1{
  width: 437.5px;
height: 15px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 15px;
text-align: right;
b{
  font-size: 18px;
  font-family: 'Roboto';
  color: #EF4444;
}
}

}
.rightFist {
width:130px;
height: 19px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
line-height: 19px;
text-align: right;
.TR{
  display: flex;
padding: 5px 10px;
width: 92px;
height: 25px;
background: #F59E0B;
border-radius: 50px;
p{
  width: 72px;
height: 15px;
font-family: 'Roboto';
font-weight: 400;
font-size: 13px;
line-height: 15px;
text-align: center;
color: #FFFFFF;

} 
}
}
.leftFist{
  width:700px;
height: 19px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;

line-height: 19px;
text-align: left;
}


b{
  font-size: 16px;
}
}



}
}




</style>