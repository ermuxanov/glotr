<script setup>
import ArrowBottom from "../assets/img/icons/arrow-bottom.svg?raw";
</script>
<template>
  <div class="show">
    <p class="show-text">Показать все</p>
    <p class="show-icon"><i v-html="ArrowBottom"></i></p>
  </div>
</template>

<style lang="scss" scoped>
.show {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 14px;
  &-text {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 13px;
    line-height: 138%;
    color: #2d47a3;
  }
  &-icon {
    i {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
