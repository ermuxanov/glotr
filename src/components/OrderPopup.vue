<script setup>
import Button from "../shared/Button.vue";
import Popup from "../shared/Popup.vue";
</script>
<template>
  <Popup name="order">
    <p class="popup__text">Код подтверждения</p>
    <p class="popup__desc">Для подтверждения заказа. Мы вам отправили код на ваш номер +998 90 909 90 90</p>
    <span>Код</span>
    <input type="text" />
    <p class="resend">Получить код повторно можно через: <span>1:52</span></p>
    <Button>Подтвердить заказ</Button>
    <Button>Отменить</Button>
  </Popup>
</template>

<style lang="scss" scoped>
.popup {
  &__text {
    font-weight: 700;
    font-size: 14px;
    line-height: 114%;
    color: #344054;
  }
  &__desc {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    color: #667085;
    margin-top: 6px;
  }
  & > span {
    font-weight: 600;
    font-size: 12px;
    line-height: 117%;
    color: #344054;
    margin-top: 24px;
    display: block;
  }
  input {
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    padding: 8px 10px;
    margin-top: 8px;
    display: block;
    width: 100%;
  }
  .resend {
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    color: #667085;
    margin-top: 12px;
    & > span {
      font-weight: 600;
      color: #f24236;
    }
  }
  button {
    padding: 12px 0;
    width: 100%;
    margin-top: 24px;
    &:last-of-type {
      margin-top: 8px;
      background: #f5f6f8;
      color: #344054;
    }
  }
}
</style>
