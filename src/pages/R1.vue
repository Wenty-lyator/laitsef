<template>
   <div class="laitsef">
      <div class="wrapper">
         
         <p class="title">Laitsef RI</p>

         <span class="text"><p class="subtitle">LRI (Laitsef Road Inspector) Лайтсеф Дорожный Инспектор –</p> высокотехнологичный программный продукт, в основе которого лежит искусственный интеллект. Состоит из набора устройств – камер видеонаблюдения, устанавливаемых на автомобильных мостах или иных дорожных участках на расстоянии не более 500 метров и центрального ядра обработки – нейронной сети, с которым камеры взаимодействуют по стеку протоколов безопасной и быстрой беспроводной сотовой связи</span>

         <img src="../assets/images/laitsef4.png" alt="laitsef" class="laitsef__img">

         <p class="title">Назначение</p>

         <ul class="about__list">
            <li class="laitsef-about__item">
               <img src="../assets/images/point.svg" alt="point" class="about__icon">
               Выявление деформаций дорожной одежды на автомобильных мостах и иных объектах транспортной инфраструктуры
            </li>
            <li class="laitsef-about__item">
               <img src="../assets/images/point.svg" alt="point" class="about__icon">
               Непрерывный мониторинг динамики разрушения поверхности искусственных сооружений на автомобильных дорогах с фото-фиксацией динамических изменений на объекте
            </li>
            <li class="laitsef-about__item">
               <img src="../assets/images/point.svg" alt="point" class="about__icon">
               Непрерывный мониторинг обвалов и сходов мелких, средних и крупных горных пород на опасных участках автомобильных дорог
            </li>
            <li class="laitsef-about__item">
               <img src="../assets/images/point.svg" alt="point" class="about__icon">
               Передача информации о несоответствии нормативам соответствующим уполномоченным службам и должностным лицам для своевременной реакци
            </li>
         </ul>

         <p class="title">Область применения</p>

         <Slider></Slider>

      </div>
   </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
   components: 
   {
      Slider
   }
}
</script>

<style>

</style>