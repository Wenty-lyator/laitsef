<template>
   <nav class="nav desc">
      <div class="wrapper">
         <div class="nav__content">
            <div @click="$router.push({ name: 'main' })" class="nav__logo">
               <span class="nav__logo-link">laitsef</span>
            </div>

            <!-- не путать submenu с subbutton  -->
            <div class="nav__maps">
               <Submenu></Submenu>
               <div class="nav-menu-item">
                  <button @click="$router.push({ name: 'about' })" class="nav-btn">О компании</button>
               </div>
               <div class="nav-menu-item">
                  <button @click="$router.push({ name: 'contacts' })" class="nav-btn">Контакты</button>
               </div>
               <Subbutton></Subbutton>
            </div>
         </div>
      </div>
   </nav>
</template>

<script>
import Submenu from './Submenu'
import Subbutton from './Subbutton'

export default {
   components: {
      Submenu,
      Subbutton
   },
}
</script>

<style lang="scss" scoped>

</style>