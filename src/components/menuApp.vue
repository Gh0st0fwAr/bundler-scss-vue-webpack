<template>
   <div class="menu">
      <div class="menu__sign">
         <font-awesome-icon 
            class="info__icon" 
            :icon="['fab', 'stackpath']"></font-awesome-icon>
         </div>
      <div class="menu__links">
         <div class="menu__link">Home</div>
         <div class="menu__link">My Projects</div>
         <div class="menu__link">Sprints</div>
         <div class="menu__link">Tasks</div>
         <div class="menu__link">Administrate</div>
      </div>
      <div class="menu__auth">
         <button class="menu__button">Login</button>
         <button class="menu__button">Reg</button> 
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   }
}
</script>