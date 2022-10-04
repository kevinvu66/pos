<template>
  <div class="text-center">
    <div class="fist">
<div class="content">
<b>Quản lý bảng giá</b>
</div>
    </div>
    <div class="body">
      <div class="input">
        <input type="text" placeholder="Nhập mã giảm giá/tên bảng giá">
             </div>
<div class="addcart">
<p>Tạo mới bảng giá</p>
</div>
<div class="pew">
<div class="pewFist">
  <div class="Fist">
    <div class="leftFist">
    <b>GIANIEMYET</b>
  </div>
  <div class="rightFist">
    <p>Thêm icon</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Tên bảng giá : </p>
  </div>
  <div class="rightFist1">
    <p>GIÁ NIÊM YẾT</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Hiệu lực từ : </p>
  </div>
  <div class="rightFist1">
    <p>22-09-2022</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Hiệu lực đến : </p>
  </div>
  <div class="rightFist1">
    <p>22-12-2022</p>
  </div>
  </div>
  <div class="Fist">
    <div class="leftFist1">
    <p>Trạng thái</p>
  </div>
  <div class="rightFist1">
    <a href="/">Kích hoạt</a>
  </div>
  </div>
  <div class="end">
    <p>Xem chi tiết</p>
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
  width: 123px;
height: 16px;
font-family: 'Roboto';
font-style: normal;
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
height: 210px;
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

.rightFist1{
width:437.5px;
height: 19px;
font-family: 'Roboto';
text-align: right;
p{
  font-size: 13px;
}
a{
  font-size: 13px;
  color: rgb(0, 4, 255);
}
}

}
.rightFist {
width:437.5px;
height: 19px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;

line-height: 19px;
text-align: right;
}
.leftFist,.leftFist1{
  width:437.5px;
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