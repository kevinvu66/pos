<template>
    <div>
    <!-- top text -->
    <div class="top">
      <div class="cart-in1">
        <nuxt-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style="width: 32px; height: 32px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
          </svg>
        </nuxt-link>
        

        <div class="text">Bán hàng</div>
      </div>
    </div>

    <!-- body -->
    <div class="body">
      <div class="cart-in2">
        <div class="left">
          <div class="chucNang">
            <div class="donHang">
              <label class="lbDonHang">Đơn hàng 01</label>
            </div>
            <div class="themMoi">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <label class="lbThemMoi">Thêm đơn mới</label>
            </div>
          </div>
          <div class="Hang" style=" height: 320px;">
            <label class="lbSanPham">Máy lọc nước Motosi V-22</label>
            <div class="hang1">
              <img src="https://mutosi.com/images/products/2020/04/01/large/mp-280m-chinh-dien_1585736214-copy-copy-copy.png" class="hinh">
              <div class="lbTieuDe">
                <label>Đơn giá: </label> <br>
                <label>Giá khuyến mãi: </label> <br>
                <label>Thành tiền: </label>
              </div>
              <div class="lbGia text-end">
                <label> 999.000 đ</label> <br>
                <label> 999.000 đ </label> <br>
                <label> 9.990.000 đ</label>
              </div>
              <button class="exit">
                <img src="../../assets/images/bi_x-circle-fill.png" width="35px" height="35px">
              </button>
              <div class="dieuHuong">
                <button class="btTru"><label>-</label></button> 
                  <input type="text" value="1"> 
                <button class="btCong"><label>+</label></button>
              </div>
            </div>
            <div class="uuDai">
              <div class="icon">
                <img src="../../assets/images/fluent-emoji-flat_wrapped-gift.png" width="20px" height="21px">
              </div>
              <label>Ưu đãi tặng kèm</label>
              <div class="hr"></div>
            </div>
            <div class="quaTang">
              <img src="../../assets/images/muong.png" class="hinh">
              <div class="lbSPTang">
                <label>Muỗng ăn x10 </label>
              </div>
              <b-form-checkbox switch class="radio" size="lg" selected></b-form-checkbox>
            </div>
            <div class="quaTang1">
              <img src="../../assets/images/khan.png" class="hinh">
              <div class="lbSPTang">
                <label>Khăn tắm x1 </label>
              </div>
              <b-form-checkbox switch class="radio" size="lg" selected></b-form-checkbox>
            </div>
          </div>
          <div class="HangHoa1" style=" height: 150px;">
            <label class="lbSanPham">Bếp ga dương Motosi MG-66M</label>
            <div class="hang1">
              <img src="https://mutosi.com/images/products/2020/12/02/original/untitled-14_1606900146.png" class="hinh">
              <div class="lbTieuDe">
                <label>Đơn giá: </label> <br>
                <label>Giá khuyến mãi: </label> <br>
                <label>Thành tiền: </label>
              </div>
              <div class="lbGia text-end">
                <label> 999.000 đ</label> <br>
                <label> 999.000 đ </label> <br>
                <label> 9.990.000 đ</label>
              </div>
              <button class="exit">
                <img src="../../assets/images/bi_x-circle-fill.png" width="35px" height="35px">
              </button>
              <div class="dieuHuong">
                <button class="btTru"><label>-</label></button> 
                  <input type="text" value="1"> 
                <button class="btCong"><label>+</label></button>
              </div>
            </div>
          </div>
          <div class="themSPKhac">
            <img src="../../assets/images/akar-icons_circle-plus.png" width="26px" height="26px">
            <label class="lbThemMoi">Thêm sản phẩm khác</label>
          </div>
        </div>

        <div class="right">
          <div class="quaTang">
            <div class="dau1">
              <img src="../../assets/images/fluent.png" style="margin: 10px; width: 32px; height: 32px; color: #EB3349;">
              <label>Quà tặng</label>
            </div>
            <div class="hangTang">
              <img src="https://mutosi.com/images/products/2022/03/25/original/loi-so-8---loi-alkaline-hydrogen_1648202095.png" alt="">
              <label>Lõi số 8 - Lõi chức năng Alkaline Hydrogen VN</label>
              <label>Số lượng: 10</label>
            </div>
            <div class="btnThem">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <label class="lbThemMoi">Thêm sản phẩm khác</label>
            </div>
          </div>
          <div class="tichDiem">
            <div class="dau1">
              <img src="../../assets/images/user.png" style="margin: 15px 10px 10px 15px; width: 22px; height: 23px; color: #EB3349;">
              <label>Tích điểm khách hàng</label>
            </div>
            <div class="hangTang">
             <input type="text" placeholder="Nhập số điện thoại khách hàng">
            </div>
            <div class="btnThem">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <label class="lbThemMoi">Thêm sản phẩm khác</label>
            </div>
          </div>
          <div class="khuyenMai">
            <div class="dau1">
             <img src="../../assets/images/vorcher.png" style="margin: 15px 10px 10px 15px; width: 26px; height: 21px; color: #EB3349;">
              <label>Khuyến mãi</label>
            </div>
            <div class="giamTienCoDinh">
             <input type="text" placeholder="Giảm tiền cố định">
            </div>
            <div class="giamGia" style="position: absolute;left: 0px; top: 110px;">
             <input type="text" placeholder="Nhập số tiền giảm giá">
            </div>
          </div>
          <div class="phuongThuc" style="height: 140px;">
            <div class="dau1">
              <img src="../../assets/images/$.png" style="margin: 15px 10px 10px 15px; width: 26px; height: 21px; color: #EB3349;">
              <label>Phương thức thanh toán</label>
            </div>
            <div class="thanhToan">
              <div class="flex items-center mb-2">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thanh toán tiền mặt</label>
              </div>
              <div class="flex items-center">
                  <input checked="" id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chuyển khoản</label>
              </div>
            </div>
          </div>
          <div class="tongTien">
              <div class="lbTieuDe">
                <label>Đơn giá: </label> <br>
                <label>Giá khuyến mãi: </label> <br>
                <label>Thành tiền: </label> <br>
                <label>Đơn giá: </label> <br>
                <label>Giá khuyến mãi: </label> <br>
                <label>Thành tiền: </label> <br>
                <label style="color: #F45C43; font-weight: bold;">Tổng thanh toán: </label>
              </div>
              <div class="lbGia text-end">
                <label> 9.990.000 đ</label> <br>
                <label> 30.000 đ </label> <br>
                <label> -15.000 đ</label> <br>
                <label> -84.000 đ</label> <br>
                <label> 999.000 đ </label> <br>
                <label> 10.000 đ</label> <br>
                <label style="color: #F45C43; font-weight: bold;"> 9.880.000 đ</label>
              </div>
          </div>
          <div class="tienMat" style="height: 120px;">
            <div class="dau1">
              <img src="../../assets/images/user.png" style="margin: 15px 10px 10px 15px; width: 22px; height: 23px; color: #EB3349;">
              <label>Tiền mặt khách hàng đưa</label>
            </div>
            <div class="giamTienCoDinh">
             <input type="text" placeholder="nhập số tiền khách hàng đưa">
            </div>
          </div>
          <div class="tienThua" style="height: 120px;">
            <div class="dau1">
              <img src="../../assets/images/user.png" style="margin: 15px 10px 10px 15px; width: 22px; height: 23px; color: #EB3349;">
              <label>Tiền thừa</label>
            </div>
            <div class="tienThuaThanhToan">
              <label class="tieuDe">Tiền thừa trả khách</label>
              <label class="tien">300.000 đ</label>
            </div>
          </div>
          <div class="hoaDonInHoaDon">
            <label>Hoàn tất đơn hàng và in hóa đơn</label>
          </div>
          <div class="inHoaDon">
            <label>In hóa đơn tạm</label>
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
  .top {
  width: 100%; height: 76px;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: 40px 10px 10px 30px;
  .cart-in1 {
    width: 912px; height: 36px;
    display: flex; flex-direction: row; justify-content: center; align-items: center;
    padding: 2px 0px;

    .text {
      width: 865px; height: 18px;
      font-weight: 700; font-size: 24px; line-height: 150%;
      display: flex; align-items: center;
      letter-spacing: 0.5px; order: 1; flex-grow: 1;
    }
  }
}

/* body */
.body {
  width: 100%; height: 1366px; 
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: 20px 10px 0px 40px;
  order: 1;

  .cart-in2 {
    width: 912px; height: 1286px;
    display: flex; flex-direction: row; justify-content: center; align-items: flex-start;
    padding: 0px; gap: 26px;
    
    .left {
      width: 535px; height: 577px;
      display: flex; flex-direction: column; align-items: flex-start;
      padding: 0px; gap: 10px;
      .chucNang{
        display: flex; flex-direction: row; align-items: center;
        border-bottom: 1px solid #F45C43; width: 100%; height: 40px;
        .donHang{
          display: flex; flex-direction: row; justify-content: center; align-items: center;
          padding: 10px 20px; gap: 10px;
          width: 168px; height: 40px;
          background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
          border-radius: 8px 8px 0px 0px;
          flex: none; order: 0; align-self: stretch; flex-grow: 0;
          .lbDonHang{
            width: 80px; height: 16px;
            font-family: 'Roboto'; font-style: normal; font-weight: 700; font-size: 14px; line-height: 16px;
            color: #FFFFFF;
          }
        }
        .themMoi{
          display: flex; flex-direction: row; justify-content: center; align-items: center;
          .svg{
            margin: 0px 10px 0px 20px;
          }
        }
      }
      .Hang, .HangHoa1{ 
        position: relative; width: 100%;
        border-radius: 5px; border: 2px solid #DDDDDD;
        .lbSanPham{
          position: absolute; top: 0px; left: 90px;
        }
        .hinh{
          width: 80px; height: 80px;
          position: absolute; top: 20px;
        }
        .lbTieuDe{
          position: absolute; top: 30px; left: 90px;
        }
        .lbGia{
          position: absolute; top: 30px; right: 60px; color: #EB3349;
        }
        .exit{
          position: absolute; top: 52px; right: 15px; color: #EB3349; 
        }
        .dieuHuong{
          position: absolute; left: 90px; top: 107px;
          width: 83px; height: 30px; border-radius: 6px;
          background: #DDDDDD; 
          .btTru{
            position: absolute;
            width: 18px; height: 18px; left: 2px; top: 5px;
            background: #FFFFFF;
            border-radius: 3px;
          }
          .btCong{
            position: absolute;
            width: 18px; height: 18px; right: 2px; top: 5px;
            background: #FFFFFF;
            border-radius: 3px;
          }
          input{
            position: absolute; left: 25px; top: 5px;
            width: 30px; height: 15px;
            font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 13px; line-height: 15px;
            display: flex; align-items: center; text-align: center;
            color: rgba(0, 0, 0, 0.9);
          }
          button>label{
            position: absolute; width: 9px; height: 23px; right: 5px; top: 0px; 
            font-family: 'Poppins'; font-style: normal; font-weight: 500; font-size: 15px; line-height: 18px;
            color: rgba(0, 0, 0, 0.9);                
          }
        }
        .uuDai{
          position: relative; top:100px; left: 10px; 
          .icon{
            position: absolute; top: 50px; left: 18px;
          }
          label{
            position: absolute; top: 50px; left: 55px;
          }
          .hr{
            position: relative; top: 80px; right: 10px;
            border-bottom: 1px solid #DDDDDD;
          }
        }
        .quaTang{
          position: relative; top: 190px;
          .hinh{
            position: absolute; left: 15px;
            width: 32px; height: 32px;
          }
          .lbSPTang{
            position: absolute; left: 60px; top: 22px;
          }
          .radio{
            position: absolute; right: 22px; top: 22px;
          }
        }
        .quaTang1{
          position: relative; top: 240px;
          .hinh{
            position: absolute; left: 15px;
            width: 32px; height: 32px;
          }
          .lbSPTang{
            position: absolute; left: 60px; top: 22px;
          }
          .radio{
            position: absolute; right: 22px; top: 22px;
          }
        }
      }
      .themSPKhac{
        display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 10px 5px; gap: 10px;
        width: 535px; height: 52px;
        background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
        border-radius: 4px; color: #FFFFFF;
        flex: none; order: 3; align-self: stretch; flex-grow: 0;
      }
    }
    .right {
      width: 336px; height: 1286px;
      display: flex; flex-direction: column; align-items: flex-start;
      padding: 0px; gap: 10px;
      order: 1; margin-right: 15px;
      .quaTang{
        box-sizing: border-box; display: flex; flex-direction: column; align-items: flex-start; padding: 5px 0px;
        width: 336px; height: 167px;
        background: #FFFFFF;
        border: 1px solid #CBD5E1; border-radius: 6px;
        flex: none; order: 0; flex-grow: 0;
        position: relative;
        .dau1{
          img{
            margin: 10px; width: 32px; height: 32px;
            color: #EB3349
          }
          label{
            position: absolute; top: 20px; left: 50px; font-weight: bold;
          }
        }
        .hangTang{
          position: relative;
          img{
            position: absolute; left: 18px;
            width: 32px; height: 32px;
          }
          label{
            position: relative; left: 60px; bottom: 10px;
            width: 267px; height: 16px;
            font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 13px; line-height: 16px;
          }
        }
        .btnThem{
            position: absolute; bottom: 15px; left: 15px;
            width: 304px; height: 44px; color: #FFFFFF;
            display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 10px 5px; gap: 10px;
            background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%); border-radius: 4px;
            flex: none; order: 2; align-self: stretch; flex-grow: 0;
          }

      }
      .tichDiem, .khuyenMai, .phuongThuc, .tienMat, .tienThua{
        box-sizing: border-box; display: flex; flex-direction: column; align-items: flex-start; padding: 5px 0px;
        width: 336px; height: 167px;
        background: #FFFFFF;
        border: 1px solid #CBD5E1; border-radius: 6px;
        flex: none; order: 0; flex-grow: 0;
        position: relative;
        .dau1{
          label{
            position: absolute; top: 20px; left: 50px; font-weight: bold;
          }
        }
        .hangTang, .giamTienCoDinh, .giamGia{
          input{
            position: absolute;left: 15px;
            display: flex; flex-direction: row; align-items: center;
            padding: 10px; gap: 10px;
            width: 304px; height: 44px;
            background: #FFFFFF;
            border: 1px solid #CBD5E1; border-radius: 6px;
            flex: none; order: 1; align-self: stretch; flex-grow: 0;
          }
        }
        .btnThem{
            position: absolute; bottom: 12px; left: 15px;
            width: 304px; height: 44px; color: #FFFFFF;
            display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 10px 5px; gap: 10px;
            background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%); border-radius: 4px;
            flex: none; order: 2; align-self: stretch; flex-grow: 0;
        }
        .thanhToan{
          position: absolute; left: 15px; top: 65px;
        }
        .tienThuaThanhToan{
          position: absolute;left: 15px; top: 60px;
          display: flex; flex-direction: row; align-items: center;
          padding: 10px; gap: 10px;
          width: 304px; height: 44px;
          background: #FFFFFF;
          border: 1px solid #CBD5E1; border-radius: 6px;
          flex: none; order: 1; align-self: stretch; flex-grow: 0;
          .tieuDe{
            position: absolute;
            left: 15px;
          }
          .tien{
            position: absolute;
            right: 15px; font-weight: bold;
          }
        }

      }
      .tongTien{
        box-sizing: border-box; display: flex; flex-direction: column; align-items: flex-start; padding: 5px 0px;
        width: 336px; height: 180px;
        background: #FFFFFF;
        border: 1px solid #CBD5E1; border-radius: 6px;
        flex: none; order: 0; flex-grow: 0;
        position: relative;
        .lbTieuDe{
          position: absolute;
          left: 15px;

        }
        .lbGia{
          position: absolute;
          right: 15px;
        }

      }
      .hoaDonInHoaDon{
        display: flex; flex-direction: row; justify-content: center; align-items: center;
        padding: 10px 5px; gap: 10px; width: 336px; height: 40px;
        background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
        border-radius: 4px; color: #FFFFFF;
        flex: none; order: 7; flex-grow: 0;
      }
      .inHoaDon{
        display: flex; flex-direction: row; justify-content: center; align-items: center;
        padding: 10px 5px; gap: 10px; width: 336px; height: 40px;
        border:1px solid;
        border-color:linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
        border-radius: 4px; color: #EB3349;
        flex: none; order: 7; flex-grow: 0;
      }
    }
  }
}
</style>
