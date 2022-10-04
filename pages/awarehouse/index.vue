<template>
  <div>
  
    <div class="titleManager2 container-sm">
      <nuxt-link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      </nuxt-link>
      <label style="margin-left: 10px">Quản lý kho</label>
    
      <div v-if="tab==='tab2'" class="outK">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clip-rule="evenodd" />
</svg>

            Xuất dữ liệu
          </button>
      </div>
    </div>
     
    <div class="main container-sm">
      <div class="tabItem" v-if="tab==='tab1'">
          <div class="tabs1" v-on:click="changeTab('tab1')">
              <div class="frame1">
                <label class="actived">Quản lý nhập/xuất </label>
              </div>
              <p v-if="tab==='tab1'" class="rect"></p>
              <p v-if="tab==='tab2'" class="rect2"></p>
          </div>
          <div class="tabs1" v-on:click="changeTab('tab2')">
              <div class="frame1">
                <label>Tồn kho</label>
              </div>
              <p v-if="tab==='tab2'" class="rect"></p>
              <p v-if="tab==='tab1'" class="rect2"></p>
          </div>
      </div>
      <div class="tabItem" v-if="tab==='tab2'">
          <div class="tabs1" v-on:click="changeTab('tab1')">
              <div class="frame1">
                <label>Quản lý nhập/xuất </label>
              </div>
              <p v-if="tab==='tab1'" class="rect"></p>
              <p v-if="tab==='tab2'" class="rect2"></p>
          </div>
          <div class="tabs1" v-on:click="changeTab('tab2')">
              <div class="frame1">
                <label  class="actived">Tồn kho</label>
              </div>
              <p v-if="tab==='tab2'" class="rect"></p>
              <p v-if="tab==='tab1'" class="rect2"></p>
          </div>
      </div>
  <br>
  <div v-if="tab==='tab1'">
  <div class="saf">
        <input type="text" class="search" placeholder="Nhập từ khóa tìm kiếm" />
     
        <div class="dropdown2">
  <button class="dropbtn2">Tìm theo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</svg>

  </button>

  <div class="dropdown2-content">
  <a href="#">Loại</a>
  <a href="#">Người nhập</a>
  </div>
</div>
  </div>


      <div class="refunds1">
        <button class="boxRefunds1">
        Nhập kho
        </button>
        <button class="boxRefunds2">
          Import file
        </button>
      </div>

      <div class="boxReceived1">
          <p class="textBox1">TỔNG THỰC NHẬN TRONG CA</p>
        <p class="textRedBox1">1.000.000 Đ</p>
      </div>

      <div class="boxMain2">
          <div class="row">
            <div class="col-6 time">N20220923014</div>
           
            <div class="col-6 text-right">
                <div class="fins">
            <label class="btnFail"> Đã hoàn thành</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>
</div>
         

            </div>
          </div>
          

           <div class="row">
            <div class="col-6 textLeft">Ngày chứng từ</div>
           
            <div class="col-6 textRight">
                 23-09-2022
            </div>
          </div>

          <div class="row">
            <div class="col-6 textLeft">Loại</div>
           
            <div class="col-6 textRight">
                Nhập kho
            </div>
          </div>


          <div class="row">
            <div class="col-6 textLeft">Người lập</div>
           
            <div class="col-6 textRight">Văn Quân</div>
          </div>

          
          <div class="row">
            <div class="col-6 textLeft">Ngày nhập hệ thống</div>
           
            <div class="col-6 textRight">23-09-2022</div>
          </div>
      </div>

      <div class="boxMain2">
          <div class="row">
            <div class="col-6 time">N20220923016</div>
           
            <div class="col-6 text-right">
                <div class="fins">
            <label class="btnFn"> Đang xử lý</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>
</div>
         

            </div>
          </div>
          

           <div class="row">
            <div class="col-6 textLeft">Ngày chứng từ</div>
           
            <div class="col-6 textRight">
                 23-09-2022
            </div>
          </div>

          <div class="row">
            <div class="col-6 textLeft">Loại</div>
           
            <div class="col-6 textRight">
                Nhập kho
            </div>
          </div>


          <div class="row">
            <div class="col-6 textLeft">Người lập</div>
           
            <div class="col-6 textRight">Văn Quân</div>
          </div>

          
          <div class="row">
            <div class="col-6 textLeft">Ngày nhập hệ thống</div>
           
            <div class="col-6 textRight">......</div>
          </div>
      </div>
    </div>

    <div v-if="tab==='tab2'">
      <div class="searchSp">
        <input type="text" placeholder="Nhập tên sản phẩm" />
       <button> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
</svg> </button>

      </div>
      <div class="boxMain2" style="height: auto;">
          
           <div class="row">
            <div class="col-6 textLeft">Máy lọc nước Mutosi 9 lõi Enrolas - MP-E91S</div>
           
            <div class="col-6 textRight">
               
            </div>
          </div>

          <div class="row">
            <div class="col-6 textLeft">Số lượng tồn kho:</div>
           
            <div class="col-6 textRight">
                <input type="text" class="sLg" value="100" min="0" />
            </div>
          </div>


          <div class="row">
            <div class="col-6 textLeft">Đơn vị tính:</div>
           
            <div class="col-6 textRight">Cái</div>
          </div>

      </div>
      <div class="boxMain2" style="height: auto;">
          
          <div class="row">
           <div class="col-6 textLeft">Máy lọc nước Mutosi 9 lõi Enrolas - MP-E91S</div>
          
           <div class="col-6 textRight">
              
           </div>
         </div>

         <div class="row">
           <div class="col-6 textLeft">Số lượng tồn kho:</div>
          
           <div class="col-6 textRight">
               <input type="text" class="sLg" value="100" min="0" />
           </div>
         </div>


         <div class="row">
           <div class="col-6 textLeft">Đơn vị tính:</div>
          
           <div class="col-6 textRight">Cái</div>
         </div>

     </div>
     <div class="boxMain2" style="height: auto;">
          
          <div class="row">
           <div class="col-6 textLeft">Máy lọc nước Mutosi 9 lõi Enrolas - MP-E91S</div>
          
           <div class="col-6 textRight">
              
           </div>
         </div>

         <div class="row">
           <div class="col-6 textLeft">Số lượng tồn kho:</div>
          
           <div class="col-6 textRight">
               <input type="text" class="sLg" value="100" min="0" />
           </div>
         </div>


         <div class="row">
           <div class="col-6 textLeft">Đơn vị tính:</div>
          
           <div class="col-6 textRight">Cái</div>
         </div>

     </div>
     <div class="boxMain2" style="height: auto;">
          
          <div class="row">
           <div class="col-6 textLeft">Máy lọc nước Mutosi 9 lõi Enrolas - MP-E91S</div>
          
           <div class="col-6 textRight">
              
           </div>
         </div>

         <div class="row">
           <div class="col-6 textLeft">Số lượng tồn kho:</div>
          
           <div class="col-6 textRight">
               <input type="text" class="sLg" value="100" min="0" />
           </div>
         </div>


         <div class="row">
           <div class="col-6 textLeft">Đơn vị tính:</div>
          
           <div class="col-6 textRight">Cái</div>
         </div>

     </div>
     <div class="boxMain2" style="height: auto;">
          
          <div class="row">
           <div class="col-6 textLeft">Máy lọc nước Mutosi 9 lõi Enrolas - MP-E91S</div>
          
           <div class="col-6 textRight">
              
           </div>
         </div>

         <div class="row">
           <div class="col-6 textLeft">Số lượng tồn kho:</div>
          
           <div class="col-6 textRight">
               <input type="text" class="sLg" value="100" min="0" />
           </div>
         </div>


         <div class="row">
           <div class="col-6 textLeft">Đơn vị tính:</div>
          
           <div class="col-6 textRight">Cái</div>
         </div>

     </div>
     <div class="boxMain2" style="height: auto;">
          
          <div class="row">
           <div class="col-6 textLeft">Máy lọc nước Mutosi 9 lõi Enrolas - MP-E91S</div>
          
           <div class="col-6 textRight">
              
           </div>
         </div>

         <div class="row">
           <div class="col-6 textLeft">Số lượng tồn kho:</div>
          
           <div class="col-6 textRight">
               <input type="text" class="sLg" value="100" min="0" />
           </div>
         </div>


         <div class="row">
           <div class="col-6 textLeft">Đơn vị tính:</div>
          
           <div class="col-6 textRight">Cái</div>
         </div>

     </div>

    </div>
        


    </div>

    <br />
    <br />
  </div>
</template>

<script>

export default {
    data() {
      return {
        tab : 'tab1'
      }
    },
    methods: {
      changeTab(tabs) {

        this.tab = tabs
      }
    }
};
</script>

<style>
  .searchSp{
    display: flex;
flex-direction: row;
justify-content: center;
position: relative;
align-items: center;
padding: 0px;
gap: 5px;

width: 912px;
height: 54px;
  }
  .sLg{
    padding: 6px 5px 6px 0px;
text-align: right;
width: 52px;
height: 28px;

/* Stroke */

border: 1px solid #CBD5E1;
border-radius: 4px;
  }
  .searchSp input{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
gap: 10px;

width: 912px;
height: 54px;

/* Stroke */

border: 1px solid #CBD5E1;
border-radius: 4px;
  }
  .searchSp button{
    position: absolute;
    display: flex;
align-items: flex-start;
padding: 0px;
gap: 10px;
right: 5px;
width: 24px;
height: 24px;
  }
  .actived{
    color: #EB3349;
  }
  .outK{
    display: flex;
    margin: 0 0 0 auto;
    background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
    color: white;
    
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
    vertical-align: middle;
    border-radius: 4px;
    padding: 8px 5px 8px 5px;
  }
  .outK button{
    display: flex;

  }
  .outK button svg{
    margin-right: 8px;
    
  }
.titleManager2{
  width: 912px;
  height: 76px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  /* or 36px */
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  justify-content: flex-start;

  /* Black */
  color: rgba(0, 0, 0, 0.9);
  font-size: 24px;
  font-weight: 700;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.main {
  width: 912px;
}

.time {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  margin-bottom: 14px;
}

.refunds1{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
margin-top: 14px;
gap: 10px;

width: 912px;
height: 70px;

/* White */

background: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
}

.boxRefunds1{

/* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  gap: 10px;

  width: 100%;
  height: 100%;
  color: white;
  background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
  border-radius: 4px;
}
.boxRefunds2{

/* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  gap: 10px;

  width: 100%;
  height: 100%;
  color: white;
  background: #0AD12A;
  border-radius: 4px;
}
.textRedBox1{

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 16px;

  color: #eb3349;

}

.textBox1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}

.boxReceived1{

  border: 1px solid #eb3349 ; 
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-top: 13px;
  gap: 10px;

  width: 912px;
  height: 72px;
}

.boxMain2{
  justify-content: center;
  align-items: center;
  padding: 5px 0px;

  width: 912px;
  height: 162px;
  margin-top: 14px;

  /* White */

  background: #FFFFFF;
  /* Stroke */

  border: 1px solid #CBD5E1;
  border-radius: 6px;
}

.btnFail{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 10px;
gap: 10px;

width: auto;
height: 26px;
color: white;
background: #11A04A;
border-radius: 50px;
}
.btnFn{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 10px;
gap: 10px;
color: white;
width: auto;
height: 26px;

background: #F59E0B;
border-radius: 50px;
}


.row .textLeft{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

}

.row{
  margin: 5px 0 0 0;
}

.row .textRight{
  text-align: right;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

}
.tabItem{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 0px 0px;

width: 912px;
height: 52px;

background: #FFFFFF;
}
.tabs1{
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 456px;
height: 38px;
}
.frame1{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 5px;

width: 456px;
height: 20px;
}
.frame1 label{
  width: 300px;
height: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

text-align: center;
}
.rect{
  width: 456px;
height: 2px;

/* Gadient 01 */

background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);

}
.tabs2{
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 456px;
height: 38px;
}
.frame2{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 5px;

width: 456px;
height: 20px;
}
.frame2 label{
  width: 150px;
height: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

text-align: center;

/* Black */

color: rgba(0, 0, 0, 0.9);

}
.rect2{
  width: 456px;
height: 2px;

/* Ink/ink100 */

background: rgba(4, 17, 62, 0.1);
}
.saf{
  display: flex;
flex-direction: row;
position: relative;
justify-content: center;
align-items: center;
padding: 0px;
gap: 5px;

width: 912px;
height: 54px;

}
.search{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
gap: 10px;

width: 912px;
height: 54px;

/* Stroke */

border: 1px solid #CBD5E1;
border-radius: 4px;
}
.fs{
  display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 882px;
height: 24px;
}
.fs1{
  display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 771px;
height: 19px;

}
.fs1 label{
  width: 162px;
height: 19px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */


/* Black */

color: rgba(0, 0, 0, 0.9);

}
.fs1 p{
  display: none;
width: 20px;
height: 0px;

/* /Text / Medium */

border: 1px solid #494E50;
transform: rotate(90deg);
}
.fil{

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 3px 10px;
gap: 5px;

width: 130px;
height: 24px;
border-radius: 4px;
border: 1px solid #EB3349;
}
.fil label{
  width: 64px;
height: 18px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */

display: flex;
align-items: center;

/* Gadient 01 */

background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

}
.fil svg{
  width: 18px;
height: 18px;

}

.fins{
  display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: auto;
height: 26px;
}


.dropbtn2 {
 display: flex;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
  width: auto;
  height: 18px;
  cursor: pointer;
  padding: 1px 5px;
}
.dropbtn2 svg{
  margin-left: 3px;
}

.dropdown2 {
  position: absolute;
  display: flex;
  flex-direction: row;
justify-content: center;
  align-items: center;
color: #EB3349;
width: 107px;
border: 1px solid #EB3349;
border-radius: 4px;
right: 15px;
}

.dropdown2-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); 
  top: 19px;
  border: 1px solid #EB3349;
  border-radius: 4px;
  z-index: 100;
}

.dropdown2-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

}

.dropdown2:hover .dropdown2-content {
  display: block;
}


</style>