<template>

  <div class="container mx-auto">
    <div class="mx-auto max-w-4xl mt-4">
      <div class="grid grid-cols-2 gap-4 s:gap-0 s:text-sm">
        <div class="text-end">
          <nuxt-link to="/traCuuDonHang">
            <button class="bg--btn w-60 s:w-full flex justify-center items-center s:text-sm py-2 ml-48 s:ml-0 rounded">
              <img src="../assets/images/description.png" width="32px" height="32px">
              <label class="text-white mx-1">Tra cứu đơn hàng</label>
            </button>
          </nuxt-link>
        </div>
        <div class="text-start">
          <button type="button" class="bg--btn w-60 s:w-full flex justify-center s:text-sm ml-1 s:ml-0 items-center py-2 rounded"
            data-modal-toggle="vu-modal">
            <img src="../assets/images/check_circle.png" width="32px" height="32px">
            <label class="text-white mx-3 s:mx-0">Mở ca</label>
          </button>
        </div>
      </div>


      <div>

        <div class="flex items-center font-bold mt-4">
          <label class="title">Chức năng chính</label>
        </div>

        <div class="grid grid-cols-4 gap-3 s:grid-cols-3 mt-3  text-white ">
          <div class="bg--btn w-full py-16 s:px-2 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/cart" class=" hover:text-amber-300 ">
              <div class="flex justify-center s:mt-4">
                <img src="../assets/images/ep_sell.png" class="w-10 h-10 s:w-7 s:h-7" />
              </div>
              <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
                <label>Bán hàng</label>
              </div>
            </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:px-2 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/orderManager" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/carbon_order-details.png" class="w-10 h-10 s:w-7 s:h-7" />
              </div>
              <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">

                <label>Quản lý đơn hàng</label>
              </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/priceManager" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/dashicons_money-alt.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Quản lý bảng giá</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/workingManager" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/ic_outline-change-circle.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Quản lý ca</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/awarehouse" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/material-symbols_warehouse-outline-rounded.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Quản lý kho</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/promotion" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/ps_promo.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Chương trình khuyến mãi</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/staddManager" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/bx_group.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Quản lý nhân viên</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/customerManager" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/la_user-tie.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Quản lý khách hàng</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 s:py-2 rounded s:rounded-xl">
            <nuxt-link to="/warranty" class=" hover:text-amber-300">
              <div class="flex justify-center s:mt-4">
            <img src="../assets/images/icon-park-outline_protect.png" class="w-10 h-10 s:w-7 s:h-7" />
                </div>
                <div class="flex justify-center mt-2.5 s:mt-1.5 s:text-xs text-center">
            <label>Bảo hành</label>
                </div>
          </nuxt-link>
          </div>
        </div>

        <div>
          <!-- Main modal -->
          <div id="vu-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full 
          md:inset-0 h-modal md:h-full justify-center items-center">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="py-6 px-6 lg:px-8">
                  <h6 class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">Mở ca</h6>
                  <form class="space-y-6" action="#">

                    <div class="grid grid-cols-2">
                      <div>
                        <h5 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nhân viên:</h5>
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lê Văn
                          Quân</label>
                      </div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div>
                        <h5 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Số điện thoại:</h5>
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">0901 11 22
                          33</label>
                      </div>
                    </div>

                    <div>
                      <h5 for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Số tiền
                        tạm ứng đầu ca</h5>
                      <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nhập số tiền tạm ứng">
                    </div>

                    <div>
                      <h5 for="ghiChu" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ghi chú
                      </h5>
                      <input type="text" id="ghiChu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nhập ghi chú (nếu có)">
                    </div>

                    <div class="flex justify-between">
                      <button type="button" class="text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-500 
                              focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded
                              text-sm px-16 py-2.5 text-center mb-2 s:px-10" data-modal-toggle="vu-modal">Hủy
                        <span class="sr-only">Close modal</span>
                      </button>
                      <button type="button" class="text-white bg--btn 
                              focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-16 py-2.5 mb-2 s:px-10">Mở
                        ca</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  // name: 'IndexPage',
}
</script>
<style>
.title {
  width: 912px;
  height: 32px;
  margin-top: 30px;

  font-family: 'Roboto';
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

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.bg--btn {
  background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
}
</style>