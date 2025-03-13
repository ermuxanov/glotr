<script setup>
import Popup from "../shared/Popup.vue";
import Button from "../shared/Button.vue";
import Checked from "../assets/img/icons/checked.svg?raw";
import HearthGrey from "../assets/img/icons/hearth-grey.svg?raw";
import Geo from "../assets/img/icons/geo.svg?raw";
import Time from "../assets/img/icons/time.svg?raw";
import Phone from "../assets/img/icons/phone.svg?raw";
import Web from "../assets/img/icons/web.svg?raw";
</script>
<template>
  <Popup name="allProducts">
    <div class="popup__company">
      <div class="popup__company-img">
        <img src="../assets/img/img2.png" alt="" />
      </div>
      <div class="popup__company-text">E-bidet Uzbekistan <span>Ташкент, Шайхантахурский район</span></div>
    </div>
    <div class="popup__order">
      <i v-html="Checked"></i>
      <p>Номер заказа: 3957</p>
      <span>Ваш заказ успешно принят и передан на обработку продавцу.</span>
    </div>
    <div class="popup__flex">
      <div class="popup__flex-item">
        <i v-html="HearthGrey"></i>
        <p>Компания</p>
        <span>E-bidet Uzbekistan</span>
      </div>
      <div class="popup__flex-item">
        <i v-html="Geo"></i>
        <p>Адрес</p>
        <span
          >г.Ташкент, ул. Саларская <br />
          35 В две строки</span
        >
      </div>
      <div class="popup__flex-item">
        <i v-html="Time"></i>
        <p>График работы</p>
        <span class="red">Посмотреть</span>
      </div>
      <div class="popup__flex-item">
        <i v-html="Phone"></i>
        <p>Номер телефона</p>
        <span>+998 90 900 90 90</span>
      </div>
      <div class="popup__flex-item">
        <i v-html="Web"></i>
        <p>Сайт</p>
        <span class="red">wellblue.gl.uz</span>
      </div>
    </div>
    <Button>Все товары продавца</Button>
  </Popup>
</template>

<style lang="scss" scoped>
.popup {
  &__company {
    padding: 12px 21px 12px 12px;
    display: flex;
    gap: 12px;
    align-items: center;
    background: #f5f6f8;
    border-radius: 8px;
    &-img {
      border: 1px solid #d0d5dd;
      border-radius: 8px;
      background: #fff;
      overflow: hidden;
    }
    &-text {
      font-weight: 700;
      font-size: 14px;
      color: #344054;
      span {
        font-weight: 500;
        font-size: 12px;
        color: #667085;
        display: block;
        margin-top: 6px;
      }
    }
  }
  &__order {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 10px;
    background: #f5f6f8;
    border-radius: 8px;
    margin-top: 24px;
    i {
      width: 40px;
      height: 40px;
    }
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 114%;
      text-align: center;
      color: #344054;
    }
    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 117%;
      text-align: center;
      color: #667085;
    }
  }
  &__flex {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
    &-item {
      display: flex;
      align-items: center;
      padding: 10px 12px;
      background: #fff;
      border-bottom: 0.6px solid #e8eaed;
      border-left: 0.6px solid #e8eaed;
      border-right: 0.6px solid #e8eaed;
      &:first-child {
        border-radius: 8px 8px 0 0;
        border-top: 0.6px solid #e8eaed;
      }
      &:last-child {
        border-radius: 0 0 8px 8px;
      }
      i {
        width: 20px;
        height: 20px;
        color: #344054;
      }
      p {
        font-weight: 500;
        font-size: 12px;
        line-height: 117%;
        color: #344054;
        margin-left: 6px;
      }
      span {
        display: block;
        font-weight: 500;
        font-size: 12px;
        line-height: 117%;
        text-align: right;
        color: #344054;
        margin-left: auto;
        &.red {
          color: #f24236;
          text-decoration: underline;
          text-decoration-skip-ink: none;
        }
      }
    }
  }
  button {
    padding: 12px 0;
    width: 100%;
  }
}
</style>
