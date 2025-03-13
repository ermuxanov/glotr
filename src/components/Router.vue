<script setup>
import ArrowRight from "../assets/img/icons/arrow-right.svg?raw";
</script>
<template>
  <div class="router container">
    <p class="router-item">Главная</p>
    <i v-html="ArrowRight"></i>
    <p class="router-item">Товары</p>
    <i v-html="ArrowRight"></i>
    <p class="router-item active">Красота и здоровье</p>
  </div>
</template>

<style lang="scss" scoped>
.router {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  i {
    width: 20px;
    height: 20px;
  }
  &-item {
    font-size: 14px;
    line-height: 129%;
    color: #667085;
    &.active {
      color: #f24236;
    }
  }
}
</style>
