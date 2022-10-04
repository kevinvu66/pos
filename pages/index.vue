<template>

  <div class="container mx-auto">
    <div class="mx-auto max-w-4xl mt-4">
      <div class="grid grid-cols-2 gap-4 s:gap-0 s:text-sm">
        <div class="text-end">
          <nuxt-link to="/traCuuDonHang">
            <button class="bg--btn w-60 s:w-full flex justify-center items-center py-2 ml-48 sx:ml-28 s:ml-0 rounded">
              <img src="../assets/images/description.png" width="32px" height="32px">
              <label class="text-white mx-1">Tra cứu đơn hàng</label>
            </button>
          </nuxt-link>
        </div>
        <div class="text-start">
          <button type="button" class="bg--btn w-60 s:w-full flex justify-center ml-1 s:ml-0 items-center py-2 rounded"
            data-modal-toggle="vu-modal">
            <img src="../assets/images/check_circle.png" width="32px" height="32px">
            <label class="text-white mx-3 s:mx-0">Mở ca</label>
          </button>
        </div>
      </div>


      <div>

        <div class="flex items-center font-bold ">
          <label class="title">Chức năng chính</label>
        </div>

        <div class="grid grid-cols-4 gap-3 s:grid-cols-3 mt-3 text-white">
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/cart">
              <div class="flex justify-center">
                <img src="../assets/images/ep_sell.png" width="40px" height="40px" />
              </div>
              <div class="flex justify-center mt-2.5">
                <label>Bán hàng</label>
              </div>
            </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/orderManager">
              <div class="flex justify-center">
            <img src="../assets/images/carbon_order-details.png" width="40px" height="40px" />
              </div>
              <div class="flex justify-center mt-2.5">

            <label>Quản lý đơn hàng</label>
              </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/priceManager">
              <div class="flex justify-center">
            <img src="../assets/images/dashicons_money-alt.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
            <label>Quản lý bảng giá</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/workingManager">
              <div class="flex justify-center">
            <img src="../assets/images/ic_outline-change-circle.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
            <label>Quản lý ca</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/awarehouse">
              <div class="flex justify-center">
            <img src="../assets/images/material-symbols_warehouse-outline-rounded.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
            <label>Quản lý kho</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/promotion">
              <div class="flex justify-center">
            <img src="../assets/images/ps_promo.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
            <label>Chương trình khuyến mãi</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/staddManager">
              <div class="flex justify-center">
            <img src="../assets/images/bx_group.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
            <label>Quản lý nhân viên</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/customerManager">
              <div class="flex justify-center">
            <img src="../assets/images/la_user-tie.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
            <label>Quản lý khách hàng</label>
                </div>
          </nuxt-link>
          </div>
          <div class="bg--btn w-full py-16 rounded">
            <nuxt-link to="/warranty">
              <div class="flex justify-center">
            <img src="../assets/images/icon-park-outline_protect.png" width="40px" height="40px" />
                </div>
              <div class="flex justify-center mt-2.5">
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