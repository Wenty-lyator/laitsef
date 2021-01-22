<template>
   <div class="contacts contacts__full">
      <div class="wrapper">

         <p class="title">Контакты</p>

         <div class="contacts__content">

            <div class="contacts__maps">
               <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.ru/maps/213/moscow/house/ryazanskiy_prospekt_15k1/Z04YcQNiTEACQFtvfXtycXViZg==/?ll=37.746490%2C55.730701&utm_medium=mapframe&utm_source=maps&z=11.71" style="color:#eee;font-size:12px;position:absolute;top:14px;">Рязанский проспект, 15к1 — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUIi2Ak0D" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border: none;"></iframe></div>
            </div>

            <div class="contacts__info">
               <div class="contacts__comm">
                  <img src="../assets/images/phone.svg" alt="svg" class="contacts__icon">
                  <a href="tel:89250586662" class="contacts__link">8-925-058-66-62</a>
               </div>

               <div class="contacts__comm">
                  <img src="../assets/images/mail.svg" alt="svg" class="contacts__icon">
                  <a href="mailto:Laitsef@mail.ru" class="contacts__link">Laitsef@mail.ru</a>
               </div>

               <div class="contacts__comm">
                  <img src="../assets/images/vk.svg" alt="svg" class="contacts__icon">
                  <a href="https://vk.com/laitsef" class="contacts__link">https://vk.com/laitsef</a>
               </div>
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

.contacts__full {
   height: 100vh;
   padding-top: 30px;
}

</style>