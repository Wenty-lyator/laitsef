<template>
   <div class="hamburger-menu mob">
      <div class="nav__menus-btn">
         
         <div class="logo">
            <div @click="$router.push({ name: 'main' })" class="nav__logo">
               <span class="nav__logo-link">laitsef</span>
            </div>
         </div>

         <Subbutton></Subbutton>
      </div>
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
         <span></span>
      </label>

      <div class="menu__box">
         <Submenu></Submenu>
         <button class="nav-btn" @click="$router.push({ name: 'about' })">О компании</button>
         <button class="nav-btn" @click="$router.push({ name: 'contacts' })">Контакты</button>
      </div>
   </div>
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

<style scoped>

#menu__toggle {
   opacity: 0;
}
.nav__menus-btn {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   height: 70px;
}
#menu__toggle:checked ~ .menu__btn > span {
   transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
   top: 0;
   transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
   top: 0;
   transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
   visibility: visible;
   left: 0;
}
.menu__btn {
   display: flex;
   align-items: center;
   position: fixed;
   top: 20px;
   right: 20px;
   width: 26px;
   height: 26px;
   cursor: pointer;
   z-index: 999;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
   display: block;
   position: absolute;
   width: 100%;
   height: 2px;
   background-color: #616161;
   transition-duration: .25s;
}
.menu__btn > span::before {
   content: '';
   top: -8px;
}
.menu__btn > span::after {
   content: '';
   top: 8px;
}
.menu__box {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding-top: 90px;
   padding-left: 30px;
   z-index: 998;
   position: fixed;
   visibility: hidden;
   top: 0;
   left: -100%;
   width: 75%;
   height: 100%;
   margin: 0;
   list-style: none;
   background-color: #ECEFF1;
   box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
   transition-duration: .5s;
}
.menu__item {
   display: block;
   padding: 12px 24px;
   color: #333;
   font-family: 'Roboto', sans-serif;
   font-size: 20px;
   font-weight: 600;
   text-decoration: none;
   transition-duration: .25s;
}
.menu__item:hover {
   background-color: #CFD8DC;
}

</style>
