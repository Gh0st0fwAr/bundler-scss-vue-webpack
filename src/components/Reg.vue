<template>
   <div class="form">
      <div class="form__header--auth">
         <div class="form__title">Регистрация</div>
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Псевдоним</div>
         <input class="form__input" type="text" placeholder="Test">
      </div>
      <div class="form__cell">
         <div class="form__subtitle">E-mail</div>
         <input class="form__input" type="email" placeholder="sample@sample.com">
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Пароль (не менее 6 символов)</div>
         <input class="form__input" type="password" placeholder="Password">
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Повторите пароль</div>
         <input class="form__input" type="password" placeholder="Password">
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Имя</div>
         <input class="form__input" type="text" placeholder="Иван">
      </div>
      <div class="form__cell">
         <div class="form__subtitle">Фамилия</div>
         <input class="form__input" type="text" placeholder="Иванов">
      </div>
      <button @click="submitForm()" type="submit" class="form__button">Подтвердить</button>
   </div>
</template>