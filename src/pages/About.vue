<template>
   <div class="about">
      <div class="wrapper">

         <p class="title">О компании</p>

         <div class="about__content">
            <div class="about__img">
               <img src="../assets/images/about.png" alt="hackathon?" class="about__images">
            </div>
            <div class="about__info">
               <p class="about__text text">LAITSEF был создан в сентябре 2016 года группой из квалифицированных, опытных и молодых специалистов с релевантным опытом в области нейросетевых технологий, разработки и управления.</p>

               <p class="about__text text">Мы постоянно повышаем свою квалификацию, нарабатываем опыт и экспертизу в области интеллектуального мониторинга и в нашей деятельности мы ориентируемся на <span class="cytext">качество</span> и <span class="cytext">результат</span></p>
            </div>
         </div>

         <div class="about__point">
            <p class="about__title">Мы хотим, чтобы наши продукты приносили пользу с максимальной отдачей.</p>
            <p class="about__subtitle">Для этого мы:</p>
            
            <div class="about__content">
               <ul class="about__list">
                  <li class="about__item">
                     <img src="../assets/images/point.svg" alt="point" class="about__icon">
                     Тщательно тестируем их работоспособность в лабораторных и боевых условиях
                  </li>
                  <li class="about__item">
                     <img src="../assets/images/point.svg" alt="point" class="about__icon">
                     Патентуем, чтобы для заказчика было прозрачно понимание того, чем он пользуется
                  </li>
                  <li class="about__item">
                     <img src="../assets/images/point.svg" alt="point" class="about__icon">
                     Сертифицируем, чтобы полностью соответствовать высоким требованиям государственных учреждений и частного бизнеса
                  </li>
                  <li class="about__item">
                     <img src="../assets/images/point.svg" alt="point" class="about__icon">
                     Непрерывно модернизируем и обновляем, чтобы постоянно предоставлять самый высокий уровень услуг
                  </li>
               </ul>
               <div class="about__backphoto">
                  <img src="../assets/images/steps.svg" alt="steps" class="about__images">
               </div>
            </div>

         </div>

      </div>

      <Contacts></Contacts>

   </div>
</template>

<script>
import Contacts from '../components/Contacts'
   export default {
      components: 
      {
         Contacts,
      }
   }
</script>

<style lang="scss" scoped>

</style>