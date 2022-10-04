<template>
  <div class="bg">
    <header>
      <div class="container mx-auto">
        <div class="mx-auto max-w-4xl">
          <div class="Bcontainer">
            <nuxt-link to="/profile" class="mt-3 mr-2">
              <img src="../../assets/images/carbon_user-avatar.png" width="35px" height="35px">
            </nuxt-link>

            <form class="w-full">
              <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div class="relative mt-3">
                <input type="search" id="default-search"
                  class="block p-3 s:p-2 pl-10 w-full h-11 text-sm s:text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tìm sản phẩm hoặc nhập mã barcode" required="">
                <!-- <button type="submit" class="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->


                <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                  class="text-white absolute right-2 s:hidden bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" style="background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);">Mã sản phẩm <svg
                    class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg></button>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                  class="hidden text-white absolute right-2 s:block bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg s:rounded-md s:flex text-xs px-2 py-1.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" style="background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);">Mã SP<svg
                    class="ml-2 s:ml-0 s:w-3 s:h-3 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg></button>

                <!-- Dropdown menu -->
                <div id="dropdown"
                  class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 597px, 0px);"
                  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                      <a href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                        out</a>
                    </li>
                  </ul>
                </div>


              </div>
            </form>

            <!-- <div class="inPut mt-3">

              <b-form-input class="searchInput" id="input-default" placeholder="Tìm sản phẩm hoặc nhập barcode">
              </b-form-input>

              <div class="dropdown text-white">
                <b-dropdown id="dropdown-1" text="Mã sản phẩm">
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item active>Active action</b-dropdown-item>
                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
  height: 80px;
  background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
}

.Bcontainer {
  align-items: center;
  display: flex;

  .inPut {
    position: relative;
    width: 852px;

    .searchInput {
      height: 46px;
      margin-left: 10px;
    }

    .dropdown {
      position: absolute;
      right: 0px;
      top: 1px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      #dropdown-1__BV_toggle_ {
        width: 150px;
        height: 30px;
        background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
        border-radius: 4px;
        align-items: center;
        display: flex;
        border: 0px;
      }

    }
  }
}
</style>