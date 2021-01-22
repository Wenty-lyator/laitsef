<template>
   <div class="logo nav__logo-p">
      <div @click="$router.push({ name: 'main' })" class="nav__logo">
         <span class="nav__logo-link">laitsef</span>
      </div>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>

.nav__logo-p {
   margin-bottom: 30px;
}

</style>