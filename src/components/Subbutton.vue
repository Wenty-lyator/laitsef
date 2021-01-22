<template>
   <div class="nav-menu-item" @click="isOpen = !isOpen">
      <button class="nav__demo-btn nav-btn nav__menus-padd">
         Демо
      </button>
      
      <transition name="fade" appear>
         <div class="nav__sub-menu" v-if="isOpen">
            <button @click="$router.push({ name: 'nor' })" class="nav__demo-btn nav-subbtn nav-btn">Laitsef TI</button>
            <button @click="$router.push({ name: 'nor' })" class="nav__demo-btn nav-subbtn nav-btn">Laitsef RI</button>
         </div>
      </transition>
   </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

.nav__sub-menu {
   display: flex;
   flex-direction: column;
   position: absolute;
   top: calc(100% + 0px);
   left: 50%;
   transform: translateX(-50%);
   width: max-content;
}
.nav__demo-btn {
   background-color: #84C6FF;
   border-radius: 50px;
   padding: 5px 40px;
   color: #fff;
   transition: all .2s
}
.nav__demo-btn:hover {
   box-shadow: 0px 4px 16px #84C7FE;
}


nav .menu-item svg {
   width: 10px;
   margin-left: 5px;
}
.fade-enter-active,
.fade-leave-active {
   transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
   opacity: 0;
}
</style>