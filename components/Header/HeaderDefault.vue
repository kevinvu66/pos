<template>
  <div class="bg">
    <header>
      <b-container fluid="sm" class="Bcontainer">
          <nuxt-link to="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10" style="color: white;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </nuxt-link>
          <div class="inPut">

            <b-form-input class="searchInput" id="input-default" placeholder="Tìm sản phẩm hoặc nhập barcode"></b-form-input>

            <div class="dropdown">
              <b-dropdown id="dropdown-1" text="Mã sản phẩm" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
      </b-container>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  header{
    height: 80px;
    background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
    border-radius: 4px;
  }
  .Bcontainer{
    width: 913px; height: inherit; align-items: center; display: flex;
    .inPut{
      position: relative;
      width: 852px;
      .searchInput{
        height: 46px;
        margin-left: 10px;
      }
      .dropdown{
        position: absolute; right: 0px; top: 1px;
        font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 18px;
        #dropdown-1__BV_toggle_{
          width: 150px; height: 30px;
          background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
          border-radius: 4px;
          align-items: center; display: flex;
          border: 0px;
        }
      
    }
    }
  }
</style>