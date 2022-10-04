<template>
  <div class="container mx-auto">
    <div class="mx-auto max-w-4xl mt-4">
      <div class="flex items-center font-bold ">
        <nuxt-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 mx-2">
            <path fill-rule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clip-rule="evenodd" />
          </svg>
        </nuxt-link>

        <span class="text-2xl mx-2">
          Chương trình khuyễn mãi
        </span>
      </div>

      <div @click="addUser()" class="p-2 border rounded mt-3 bg--btn-add
        flex justify-center items-center text-white cursor-pointer" data-modal-toggle="staff-modal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="mx-2 text-sm">Thêm khuyến mãi mới</span>
      </div>

      <div v-for="promotion in promotions" :key="promotion.id" class="p-3 border rounded mt-3 mb-3">
        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-11 flex justify-start items-center">
            <span class="font-bold">
              {{promotion.id}}
            </span>
          </div>
          <div class="flex justify-center items-center">
            <!-- Edit -->
            <button @click="edit(promotion)" type="button" data-modal-toggle="staff-modal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path
                  d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </button>

            <!-- Xóa -->
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-red-500">
                <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd" />
              </svg>
            </button>

          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Tên chương trình: </label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm">
              {{promotion.name}}
            </label>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Hiệu lực từ: </label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm">
              {{promotion.end_of_day}}
            </label>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Hiệu lực đến: </label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm">
              {{promotion.expiration_date}}
            </label>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Phân quyền:</label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm">
              {{promotion.active ? 'Kích hoạt' : 'Ngừng kích hoạt'}}
            </label>
          </div>
        </div>
      </div>

    </div>

    <div>
      <!-- Main modal -->
      <div id="staff-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full 
          md:inset-0 h-modal md:h-full justify-center items-center">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="py-6 px-6 lg:px-8">
              <h6 class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">{{titleModal}}</h6>
              <form class="space-y-6" action="#">

                <div>
                  <h5 for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mã chương
                    trình (<b class="text-red-500">*</b>)</h5>
                  <input type="text" id="fullname" v-model="promotion.id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="--Vui lòng nhập--">
                </div>

                <div>
                  <h5 for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên chương
                    trình (<b class="text-red-500">*</b>)</h5>
                  <input type="text" id="phone" v-model="promotion.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="--Vui lòng nhập--">
                </div>

                <div>
                  <h5 for="mota" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mô tả ngắn</h5>
                  <input type="text" id="mota" v-model="promotion.mota" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="--Vui lòng nhập--">
                </div>

                <div>
                  <h5 for="mota" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hiệu lực (<b
                      class="text-red-500">*</b>)</h5>

                  <div date-rangepicker="" class="flex items-center">
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd" inline-datepicker data-date="02/25/2022"></path>
                        </svg>
                      </div>
                      <input name="start" type="text" v-model="promotion.end_of_day"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input text-sm"
                        placeholder="Select date start">
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input name="end" type="text" v-model="promotion.expiration_date" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input text-sm"
                        placeholder="Select date end">
                    </div>
                  </div>

                </div>

                <div>
                  <h5 for="admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">trạng thái (<b
                      class="text-red-500">*</b>)</h5>
                  <select id="countries" v-model="promotion.active" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option disabled value="">--Vui lòng chọn--</option>
                    <option value="true">Kích hoạt</option>
                    <option value="false">Ngừng kích hoạt</option>
                  </select>
                </div>

                <div class="flex justify-between">
                  <button type="button" @click="showAdd()" class="text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-500 
                              focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded
                              text-sm px-16 py-2.5 text-center mb-2 s:px-10" data-modal-toggle="staff-modal">Hủy
                    <span class="sr-only">Close modal</span>
                  </button>

                  <button v-show="show" type="button"
                    class="text-white bg--btn-add 
                              focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-16 py-2.5 mb-2 s:px-10">Tạo mới</button>

                  <button v-show="!show" type="button"
                    class="text-white bg--btn-add 
                              focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-16 py-2.5 mb-2 s:px-10">Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      promotions: [
        {
          id: "KMT10",
          name: "KHUYẾN MÃI THÁNG 10",
          end_of_day: "2022-10-01 16:06:48",
          expiration_date: "2022-10-30 16:06:49",
          active: true,
        },
        {
          id: "KMT09",
          name: "KHUYẾN MÃI THÁNG 10",
          end_of_day: "2022-09-01 16:06:48",
          expiration_date: "2022-09-30 16:06:49",
          active: false,
        },
      ],
      promotion: {
        id: null,
        name: null,
        end_of_day: null,
        expiration_date: null,
        active: false,
      },
      show: true,
      titleModal: 'Thêm khuyến mãi mới'
    };
  },
  methods: {
    addUser() {
      // this.titleModal = 'Cập nhật nhân viên'
      this.promotion = {
        id: null,
        name: null,
        end_of_day: null,
        expiration_date: null,
        active: false,
      }
    },
    edit(promotion) {
      this.show = false;
      this.titleModal = 'Cập nhật khuyến mãi'
      this.promotion = promotion;
    },
    showAdd() {
      this.titleModal = 'Thêm mới khuyễn mãi'
      this.show = true;
    }
  }
}
</script>

<style>
.bg--btn-add {
  background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
}
</style>