<template>
  <carousel-3d class="laitsef__slider">
      <slide class="laitsef__slide" :index="0">
         <span class="laitsef__slide-text">Искусственные сооружения на автомобильных дорогах (развязки, дублеры, тоннели с освещением / без освещения)</span>
         <img src="../assets/images/slider1.jpg" alt="slider-image" class="laitsef__slide-img">
      </slide>
      <slide class="laitsef__slide" :index="1">
         <span class="laitsef__slide-text">Автомобильные мосты с любыми эксплуатационными характеристиками (длинна, высота, ширина)</span>
         <img src="../assets/images/slider2.jpg" alt="slider-image" class="laitsef__slide-img">
      </slide>
      <slide class="laitsef__slide" :index="2">
         <span class="laitsef__slide-text">Опасные участки автомобильной дороги (с частым сходом горных пород)</span>
         <img src="../assets/images/slider3.jpg" alt="slider-image" class="laitsef__slide-img">
      </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
// https://wlada.github.io/vue-carousel-3d ну ес чо на всякий так скажем случай ыгыгыгыххгы
export default {
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style lang="scss" scoped>

.laitsef__slider {
   margin-bottom: 50px;
}
.laitsef__slide {
   height: 320px!important;
   padding: 10px 20px;
   background-color: #EFEFEF;
   &-text {
      font-family: "FuturaLightC";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
   }
   &-img {
      max-width: 320px;
      display: flex;
      margin: 10px auto;
   }

}

.carousel-3d-container {
   overflow: visible;
}

.current {
   background-color: #FFFFFF;
   box-shadow: 13px 22px 20px rgba(0, 0, 0, 0.25);
}

@media (max-width: 620px){
   .laitsef__slider {
      margin: 30px 0 100px 0;
   }
   .laitsef__slide-text {
      display: flex;
      text-align: center;
      align-items: center;
      margin: 5px 0;
   }
   .laitsef__slide {
      height: auto!important;
   }
}

</style>