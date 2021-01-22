<template>
   <div class="advatages">
      <div class="wrapper">

         <p class="title">Наши преимущества</p>

         <div class="advatages__content">

            <div class="advatages__item">
               <img src="../assets/images/security.svg" alt="security" class="advatages__images">
               <span class="advatages__text text">Повышения уровня <span class="cytext">безопасности</span> автомобильных дорог и дорожной инфраструктуры</span>
            </div>

            <div class="advatages__item">
               <img src="../assets/images/quality.svg" alt="quality" class="advatages__images">
               <span class="advatages__text text">Помощь в обеспечении <span class="cytext">высокого качества</span> дорожного покрытия за счет мониторинга нового поколения</span>
            </div>

            <div class="advatages__item">
               <img src="../assets/images/reliability.svg" alt="reliability" class="advatages__images">
               <span class="advatages__text text">Высокий уровень <span class="cytext">надежности</span> наших систем, который позволит быть уверенным в результатах</span>
            </div>

         </div>

      </div>
   </div>
</template>

<script>
   export default {
   }
</script>

<style lang="scss" scoped>

.advatages {
   padding: 20px 0;
	&__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 20px 0;
   }
   &__item {
      display: flex;
      flex-direction: column;
      margin: 0 15px;
   }
   &__images {
      margin-right: auto;
   }
   &__text {
      margin-top: 15px;
   }
}

@media (max-width: 1000px){
   .advatages__content {
      flex-direction: column;
   }
   .advatages__item {
      max-width: 330px;
      margin: 15px 0 15px 0;
   }
   .advatages__item:nth-child(2) {
      margin-left: auto;
   }
   .advatages__images {
      margin: 20px 0;
   }
   .advatages__text {
      text-align: center;
   }
}

@media (max-width: 410px){
   .advatages__images {
      margin: 30px 0 20px 0!important;
   }
}

</style>