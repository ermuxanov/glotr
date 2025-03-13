<script setup></script>
<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__search">
        <div class="header__search-icon">
          <img src="../assets/img/icons/search.svg" alt="" />
        </div>
        <input class="header__search-input" placeholder="Искать на Glotr" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 12px 0;
  background: #fff;
  &__inner {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  &__burger {
    width: 24px;
    height: 24px;
    padding: 4px 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: #344054;
    }
  }
  &__search {
    flex-grow: 1;
    padding: 8px 16px;
    background: #f5f6f8;
    display: flex;
    align-items: center;
    border-radius: 8px;
    &-input {
      margin-left: 6px;
    }
  }
}
</style>
