<script setup></script>
<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #fff;
  background: #f24236;
  font-weight: 600;
  font-size: 14px;
  line-height: 171%;
}
</style>
