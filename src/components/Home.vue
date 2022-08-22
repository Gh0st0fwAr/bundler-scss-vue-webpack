<template>
   <div class="main">
      <menuApp></menuApp>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   data() {
      return {
      }
   },
   components: {
      'menuApp': () => import('./menuApp')
   }
}
</script>
