<template>
   <header class="header">
      <div class="wrapper">

         <div class="header__content">

         <button class="header__button" @click="isShowText">
            <img class="header__arrow" src="../assets/images/arrow.svg" alt="arrow">
         </button>

         <transition name="fade" appear>
            <div class="header__videos-item" v-if="!isShow1">
               <p class="header__title title">Система LAITSEF Traffic Inspector</p>

               <video class="header__video" src="../assets/laitsef-1.mp4" autoplay loop></video>
            </div>

            <div class="header__videos-item" v-if="isShow2">
               <p class="header__title title">Система LAITSEF Road Inspector</p>

               <video class="header__video" src="../assets/laitsef-2.mp4" autoplay loop></video>
            </div>
         </transition>

         </div>
         
      </div>
   </header>
</template>

<script>
   export default {
      data () {
         return {
            isShow1: false,
            isShow2: false
         }
      },
      methods: {
         isShowText() {
            this.isShow1 = !this.isShow1;
            this.isShow2 = !this.isShow2;
         }
      }
   }
</script>

<style lang="scss" scoped>

.header {
   background-color: #c4c4c4;
   &__button {
      background: none;
      border: none;
      outline: none;
      padding: 0;
      position: absolute;
      margin-top: 20%;
      right: 3%;
   }
   &__button, &__arrow {
      width: 60px;
   }
   &__arrow {
      margin-left: 5px;
   }
   &__video {
      width: calc(100% - 70px);
   }
   &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 0 5% 0;
   }
}

@media (max-width: 1370px){
   .header__button {
      right: 13px;
   }
}

</style>
