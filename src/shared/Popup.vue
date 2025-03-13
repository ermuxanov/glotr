<script setup>
import Close from "../assets/img/icons/close.svg?raw";
import popupStore from "../store/popup";

const props = defineProps({
  name: String,
});
</script>
<template>
  <div class="popup">
    <div class="popup__inner" :class="{ show: popupStore.data[name] }">
      <div class="popup__top">
        <h2 class="popup__title">Подтвердите заказ</h2>
        <i v-html="Close" @click="popupStore.hide(name)"></i>
      </div>
      <div class="popup__block">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
  transition: 0.3s ease;
  &:has(.show) {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  &__inner {
    width: calc(100% - 50px);
    height: 100%;
    margin-left: auto;
    background: #fff;
    transform: translate(100%, 0);
    transition: 0.3s ease;
    &.show {
      transform: translate(0, 0);
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    padding: 18px 16px;
    background: #f5f6f8;
    align-items: center;
    i {
      width: 24px;
      height: 24px;
    }
  }
  &__block {
    margin-top: 24px;
    padding: 0 15px;
  }
}
</style>
