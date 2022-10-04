<template>
  
    <div>
        <header-default></header-default>
        <nuxt/>
        <footer-default></footer-default>
    </div>

</template>

<script>
    import HeaderDefault from '../components/Header/HeaderDefault.vue';
    import FooterDefault from '../components/Footer/FooterDefault.vue';
export default {
    HeaderDefault,
    FooterDefault,
    head: {
    script: [
      {
        src: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css'
      }
    ]
  },
  watch:{
    $route(){
      location.reload();
    }
  }
}

</script>

<style>

</style>