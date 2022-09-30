<template>
  <div>
    <div class="classnav">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
      </svg>
      <label class="banHang">Bán Hàng</label>
    </div>
    <nuxt-link to="/">
      <b-button variant="outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
         Trở về</b-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  nuxt-link{
     display: flex;
  }
  .classnav{
    width: 912px; height: 32px; margin-left: 192px; margin-top: 30px;
    
    align-items: center; display: flex; 
  }
  .banHang{
    justify-content: start;
  }
</style>