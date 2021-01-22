<template>
   <div id="app">
      <div class="nav-wrapper">
         <Nav></Nav>

         <Navmob></Navmob>
      </div>

     <router-view></router-view>
   </div>
</template>

<script>
import Nav from './components/Nav'
import Navmob from './components/Navmob'

export default {
  name: 'App',
  components: {
     Nav,
     Navmob
  }
}
</script>

<!-- мне сказали что мой код, это собачье говно, а сайт выполнен на двойку, если это так и ты хочешь выбомбиться на меня то вот мой вк id - p256m -->
