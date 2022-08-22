<template>
   <div class="form">
      <div class="form__header--auth">
         <div class="form__title">Логин</div>
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Введите e-mail</div>
         <input class="form__input" type="email" placeholder="example@sample.com">
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Введите пароль</div>
         <input class="form__input" type="password" placeholder="******">
      </div>
      <button @click="submitForm()" class="form__button">Подтвердить</button>
   </div>
</template>