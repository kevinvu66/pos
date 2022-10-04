<template>
  <div class="container mx-auto">
    <div class="mx-auto max-w-4xl mt-4">
      <div class="flex items-center font-bold ">
        <nuxt-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 mx-2">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>

        <span class="text-2xl mx-2">
          Bảo hành
        </span>
      </div>

      <div 
        class="p-2 border rounded mt-5 bg--btn-add
        flex justify-center items-center text-white cursor-pointer"
        data-modal-toggle="warranty-modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
          class="w-6 h-8">
          <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
          
        <span class="mx-2 text-sm">Kích hoạt bảo hành</span>        
      </div>
            
      <form class="flex items-center mt-3">   
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer">
            
              <button 
                id="dropdownSmallButton" 
                data-dropdown-toggle="dropdownSmall" 
                class="inline-flex items-center text-sm text-center text-red-700 rounded px-2
                border-2 border-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300" 
                type="button"
              >Tìm theo 
                <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div id="dropdownSmall" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
              </div>
            
            </div>
            <input type="text" id="simple-search" 
              class="bg-gray-50 border border-gray-300 text-black text-sm rounded 
              focus:ring-white focus:border-white block w-full pr-10 p-2.5 font-medium"
              placeholder="Nhập từ khóa tìm kiếm" required>
        </div>
      </form>
    
      <div
        v-for="product in products" :key="product.id" 
        class="p-3 border rounded mt-3 mb-3">
        <div class="mb-2">
          <div class="flex justify-start items-center">
            <span class="font-bold uppercase">
              {{product.name}}
            </span>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Số serial:</label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm"> 
              {{product.serial}}
            </label>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Tên khách hàng:</label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm"> 
              {{product.client}}
            </label>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Ngày kích hoạt</label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm"> 
              {{product.createDate}}
            </label>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Thời hạn bảo hành:</label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm"> 
              {{product.warranty}}
            </label>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 flex justify-start items-center">
            <label class="text-base">Trạng thái:</label>
          </div>
          <div class="col-span-4 flex justify-end items-center">
            <label class="font-medium text-sm text-blue-500"> 
              {{product.status ? 'Đang kích hoạt' : 'X'}}
            </label>
          </div>
        </div>
      </div>

      <div>
        <!-- Main modal -->
        <div id="warranty-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full 
            md:inset-0 h-modal md:h-full justify-center items-center"
        >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="py-6 px-6 lg:px-8">
                <h6 class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">Kích hoạt bảo hành</h6>
                <form class="space-y-6" action="#">
                                                
                  <div>
                      <h5 
                          for="serial" 
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Số serial sản phẩm (<b class="text-red-500">*</b>)</h5>
                      <input 
                          type="text" 
                          id="serial"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="--Vui lòng nhập--"
                      >
                  </div>
                  
                  <div>
                      <h5 
                          for="fullname" 
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Họ và tên (<b class="text-red-500">*</b>)</h5>
                      <input 
                          type="text" 
                          id="fullname"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="--Vui lòng nhập--"
                      >
                  </div>
                  
                  <div>
                      <h5 
                          for="phone" 
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Số điện thoại (<b class="text-red-500">*</b>)</h5>
                      <input 
                          type="text" 
                          id="phone" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="--Vui lòng nhập--"
                      >
                  </div>
                  
                  <div>
                      <h5 
                          for="email" 
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Email (<b class="text-red-500">*</b>)</h5>
                      <input 
                          type="email" 
                          id="email" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="--Vui lòng nhập--"
                      >
                  </div>
                  
                  <div>
                      <h5 
                          for="date" 
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Ngày sinh (<b class="text-red-500">*</b>)</h5>
                      <input 
                          type="text" 
                          id="date" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="--Vui lòng chọn--"
                          onfocus="(this.type = 'date')"
                      >
                  </div>
                  
                  <div>
                      <h5 
                          for="city" 
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Tỉnh/Thành phố (<b class="text-red-500">*</b>)</h5>
                      <input 
                          type="text" 
                          id="city" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="--Vui lòng nhập--"
                      >
                  </div>

                  <div class="flex justify-between">
                      <button 
                          type="button" 
                          class="text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-500 
                          focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded
                          text-sm px-16 py-2.5 text-center mb-2 s:px-10"
                          data-modal-toggle="warranty-modal"
                      >Hủy
                      <span class="sr-only">Close modal</span>
                      </button>

                      <button 
                          type="button" 
                          class="text-white bg--btn-add 
                          focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-16 py-2.5 mb-2 s:px-10"
                      >Kích hoạt</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import 'flowbite';
  
export default {
  data() {
      return {
          products: [
              {
                  id: 1,
                  name: "Máy lọc nước nóng lạnh nguội 9 lõi mp-692hc-bk",
                  serial: "011000000",
                  client: "Trần Tiến Đạt",
                  createDate: "20/09/2022",
                  warranty: "20/09/2024",
                  status: true
              },
              {
                  id: 2,
                  name: "Máy lọc nước nóng lạnh nguội 9 lõi mp-692hc-bk",
                  serial: "011000000",
                  client: "Trần Tiến Đạt",
                  createDate: "20/09/2022",
                  warranty: "20/09/2024",
                  status: true
              },
              {
                  id: 3,
                  name: "Máy lọc nước nóng lạnh nguội 9 lõi mp-692hc-bk",
                  serial: "011000000",
                  client: "Trần Tiến Đạt",
                  createDate: "20/09/2022",
                  warranty: "20/09/2024",
                  status: true
              },
              {
                  id: 4,
                  name: "Máy lọc nước nóng lạnh nguội 9 lõi mp-692hc-bk",
                  serial: "011000000",
                  client: "Trần Tiến Đạt",
                  createDate: "20/09/2022",
                  warranty: "20/09/2024",
                  status: true
              },
          ]
      };
  },
}
</script>

<style>
  .bg--btn-add {
    background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
  }
</style>