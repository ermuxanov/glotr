<script setup>
import Router from "../components/Router.vue";
import Hearth from "../assets/img/icons/hearth.svg?raw";
import HearthGrey from "../assets/img/icons/hearth-grey.svg?raw";
import Chat from "../assets/img/icons/chat.svg?raw";
import Time from "../assets/img/icons/time.svg?raw";
import Phone from "../assets/img/icons/phone.svg?raw";
import Web from "../assets/img/icons/web.svg?raw";
import ArrowRight from "../assets/img/icons/arrow-right.svg?raw";
import Button from "../shared/Button.vue";
import ShowMore from "../shared/ShowMore.vue";
import popupStore from "../store/popup";
</script>
<template>
  <Router />
  <div class="intro">
    <div class="intro__inner">
      <div class="intro__top">
        <p class="intro__top-item">Описание</p>
        <p class="intro__top-item active">Характеристика</p>
        <p class="intro__top-item">Продавец</p>
        <p class="intro__top-item">Отзывы</p>
      </div>
      <div class="intro__imgs container">
        <div class="intro__img">
          <img src="../assets/img/img.png" alt="" />
          <div class="intro__img-pagination">
            <span class="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <i v-html="Hearth"></i>
        </div>
      </div>
      <div class="intro__product">
        <div class="intro__product-title">Apple Macbook air, M1, 512 SSD gb, 32gb RAM</div>
        <div class="intro__product-status">
          <span>Нет в наличии</span>
          <p>Код 32453</p>
        </div>
        <div class="intro__product-price">12 850 000 <span>сум/шт</span></div>
        <div class="intro__product-action">
          <Button class="intro__product-btn" @click="popupStore.show('order')"> Уточнить наличие </Button>
          <Button class="intro__product-chat"><i v-html="Chat"></i></Button>
        </div>
      </div>
      <div class="intro__description">
        <h2 class="intro__description-title">Описание</h2>
        <p class="intro__description-text">
          Оптический привод С новой силой. С появлением чипа Apple M1 наш самый тонкий и лёгкий ноутбук полностью
          преобразился. Центральный процессор теперь работает до 3,5 раза быстрее. Графический — до 5 раз. А благодаря
          нашей передовой системе Neural Engine скорость машинного обучения возросла до 9 раз. Новый Mac. Book Air
          работает без подзарядки дольше, чем предыдущие модели.
        </p>
        <ShowMore />
      </div>
      <div class="intro__char">
        <h2 class="intro__char-title">Характеристики</h2>
        <div class="intro__char-flex">
          <p>Код товара</p>
          <p>MGN93RU/A</p>
        </div>
        <div class="intro__char-flex">
          <p>Производитель</p>
          <p>Apple</p>
        </div>
        <div class="intro__char-flex">
          <p>Разрешение экрана</p>
          <p>2560x1600</p>
        </div>
        <div class="intro__char-flex">
          <p>Количество ядер процессора</p>
          <p>8</p>
        </div>
        <div class="intro__char-flex">
          <p>Оптический привод</p>
          <p>Отсутствует</p>
        </div>
        <ShowMore class="intro__char-show" />
      </div>
      <div class="intro__pay">
        <h2 class="intro__pay-title">Способы оплаты</h2>
        <p class="intro__pay-type">- Наличными</p>
        <p class="intro__pay-type">- Перечислением</p>
        <p class="intro__pay-type">- Терминал UzCard</p>
        <p class="intro__pay-type">- Терминал HUMO</p>
        <p class="intro__pay-type">- POS терминал</p>
        <p class="intro__pay-type">- Рayme</p>
        <ShowMore />
      </div>
      <div class="intro__delivery">
        <h2 class="intro__delivery-title">Способы доставки</h2>
        <p class="intro__delivery-type">- Доставка куръером</p>
        <p class="intro__delivery-type">- Доставка почтой</p>
        <ShowMore />
      </div>
      <div class="intro__customer">
        <div class="intro__customer-top">
          <h2 class="intro__customer-title">Продавец</h2>
          <p>Перейти на сайт</p>
        </div>
        <div class="intro__customer-mid">
          <div class="intro__customer-img">
            <img src="../assets/img/amazon.png" alt="" />
          </div>
          <div class="intro__customer-desc">Amazon <span>г. Ташкент, Узбекистан</span></div>
        </div>
        <div class="intro__customer-text">
          <i v-html="Time"></i>
          <p>Сегодня работает до 18:00</p>
          <span>Весь график</span>
        </div>
        <div class="intro__customer-text">
          <i v-html="Phone"></i>
          <p>+998 99 ...</p>
          <span>показать номер</span>
        </div>
        <div class="intro__customer-text">
          <i v-html="Web"></i>
          <span>amazon.com</span>
        </div>
        <div class="intro__customer-actions">
          <Button class="intro__customer-actions-left" @click="popupStore.show('allProducts')">
            Все товары продавца
          </Button>
          <Button class="intro__customer-actions-right"> Заказать звонок </Button>
        </div>
      </div>
      <div class="intro__similar container">
        <div class="intro__similar-top">
          <h2 class="intro__similar-title">Похожие товары продавца</h2>
          <i v-html="ArrowRight"></i>
        </div>
        <div class="intro__similar-grid">
          <div class="intro__similar-item">
            <div class="intro__similar-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__similar-name">Knife Sharpener Tool Professional</p>
            <p class="intro__similar-status">В наличии</p>
            <p class="intro__similar-price">3 000 000 <span>сум</span></p>
            <p class="intro__similar-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__similar-item">
            <div class="intro__similar-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__similar-name">Knife Sharpener Tool Professional</p>
            <p class="intro__similar-status">В наличии</p>
            <p class="intro__similar-price">3 000 000 <span>сум</span></p>
            <p class="intro__similar-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__similar-item">
            <div class="intro__similar-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__similar-name">Knife Sharpener Tool Professional</p>
            <p class="intro__similar-status">В наличии</p>
            <p class="intro__similar-price">3 000 000 <span>сум</span></p>
            <p class="intro__similar-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__similar-item">
            <div class="intro__similar-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__similar-name">Knife Sharpener Tool Professional</p>
            <p class="intro__similar-status">В наличии</p>
            <p class="intro__similar-price">3 000 000 <span>сум</span></p>
            <p class="intro__similar-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__similar-item">
            <div class="intro__similar-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__similar-name">Knife Sharpener Tool Professional</p>
            <p class="intro__similar-status">В наличии</p>
            <p class="intro__similar-price">3 000 000 <span>сум</span></p>
            <p class="intro__similar-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__similar-item">
            <div class="intro__similar-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__similar-name">Knife Sharpener Tool Professional</p>
            <p class="intro__similar-status">В наличии</p>
            <p class="intro__similar-price">3 000 000 <span>сум</span></p>
            <p class="intro__similar-place">Media Park <span>г. Ташкент</span></p>
          </div>
        </div>
      </div>
      <div class="intro__rec container">
        <div class="intro__rec-top">
          <h2 class="intro__rec-title">Рекомендуем</h2>
          <i v-html="ArrowRight"></i>
        </div>
        <div class="intro__rec-grid">
          <div class="intro__rec-item">
            <div class="intro__rec-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__rec-name">Knife Sharpener Tool Professional</p>
            <p class="intro__rec-status">В наличии</p>
            <p class="intro__rec-price">3 000 000 <span>сум</span></p>
            <p class="intro__rec-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__rec-item">
            <div class="intro__rec-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__rec-name">Knife Sharpener Tool Professional</p>
            <p class="intro__rec-status">В наличии</p>
            <p class="intro__rec-price">3 000 000 <span>сум</span></p>
            <p class="intro__rec-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__rec-item">
            <div class="intro__rec-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__rec-name">Knife Sharpener Tool Professional</p>
            <p class="intro__rec-status">В наличии</p>
            <p class="intro__rec-price">3 000 000 <span>сум</span></p>
            <p class="intro__rec-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__rec-item">
            <div class="intro__rec-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__rec-name">Knife Sharpener Tool Professional</p>
            <p class="intro__rec-status">В наличии</p>
            <p class="intro__rec-price">3 000 000 <span>сум</span></p>
            <p class="intro__rec-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__rec-item">
            <div class="intro__rec-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__rec-name">Knife Sharpener Tool Professional</p>
            <p class="intro__rec-status">В наличии</p>
            <p class="intro__rec-price">3 000 000 <span>сум</span></p>
            <p class="intro__rec-place">Media Park <span>г. Ташкент</span></p>
          </div>
          <div class="intro__rec-item">
            <div class="intro__rec-img">
              <img src="../assets/img/clock.png" alt="" />
              <i v-html="HearthGrey"></i>
              <span>-15%</span>
            </div>
            <p class="intro__rec-name">Knife Sharpener Tool Professional</p>
            <p class="intro__rec-status">В наличии</p>
            <p class="intro__rec-price">3 000 000 <span>сум</span></p>
            <p class="intro__rec-place">Media Park <span>г. Ташкент</span></p>
          </div>
        </div>
      </div>
      <div class="intro__tag container">
        <div class="intro__rec-top">
          <h2 class="intro__rec-title">У нас ищут</h2>
          <i v-html="ArrowRight"></i>
        </div>
        <div class="intro__tag-flex">
          <p class="intro__tag-item">Камера</p>
          <p class="intro__tag-item">Куртки женские</p>
          <p class="intro__tag-item">Автозапчасти</p>
          <p class="intro__tag-item">Радиаторы и обогреватели</p>
          <p class="intro__tag-item">Спортивные костюмы</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  &__top {
    padding-top: 5px;
    display: flex;
    gap: 20px;
    padding-left: 15px;
    background: #fff;
    &-item {
      padding-top: 20px;
      padding-bottom: 12px;
      font-size: 14px;
      text-align: center;
      color: #2f2f2f;
      &.active {
        color: #f24236;
        border-bottom: 1px solid #f24236;
      }
    }
  }
  &__imgs {
    margin-top: 15px;
  }
  &__img {
    background: #fff;
    border-radius: 8px;
    height: 325px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &-pagination {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      align-items: center;
      gap: 8px;
      span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #e8eaec;
        &.active {
          width: 8px;
          height: 8px;
          background: #f24236;
        }
      }
    }
    i {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 6px;
      right: 6px;
    }
  }
  &__product {
    margin-top: 15px;
    padding: 15px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 8px;
    &-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 133%;
      color: #344054;
    }
    &-status {
      font-weight: 500;
      font-size: 13px;
      line-height: 123%;
      color: #f24236;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 16px;
      span {
        padding: 4px 12px;
        border-radius: 8px;
        background: rgb(242, 66, 54, 0.1);
      }
      p {
        color: #667085;
      }
    }
    &-price {
      font-weight: 700;
      font-size: 22px;
      line-height: 126%;
      color: #f24236;
      margin-top: 16px;
      span {
        font-size: 16px;
      }
    }
    &-action {
      margin-top: 16px;
      display: flex;
      gap: 8px;
    }
    &-btn {
      flex-grow: 1;
    }
    &-chat {
      background: rgba(242, 66, 54, 0.1);
      padding: 8px 16px;
      i {
        width: 24px;
        height: 24px;
      }
    }
  }
  &__description {
    margin-top: 12px;
    padding: 15px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 8px;
    &-title {
      font-family: var(--second-family);
      font-weight: 700;
      font-size: 18px;
      line-height: 133%;
      color: #344054;
    }
    &-text {
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 13px;
      line-height: 138%;
      color: #344054;
    }
  }
  &__char {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 8px;
    margin-top: 12px;
    padding: 15px 0;
    &-title {
      font-family: var(--second-family);
      font-weight: 700;
      font-size: 18px;
      line-height: 133%;
      color: #344054;
      padding-bottom: 14px;
      padding-left: 15px;
    }
    &-flex {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      &:nth-of-type(odd) {
        background: #f5f6f8;
      }
    }
    &-show {
      padding-left: 15px;
    }
  }
  &__pay,
  &__delivery {
    padding: 15px;
    margin-top: 12px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 8px;
    &-title {
      font-family: var(--second-family);
      font-weight: 700;
      font-size: 18px;
      line-height: 122%;
      color: #344054;
    }
    &-type {
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 13px;
      line-height: 138%;
      color: #344054;
      margin-top: 16px;
    }
  }
  &__customer {
    margin-top: 12px;
    padding: 15px;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-family: var(--second-family);
        font-weight: 500;
        font-size: 13px;
        color: #f24236;
      }
    }
    &-mid {
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    &-img {
      border: 1px solid #e8eaec;
      border-radius: 8px;
      width: 80px;
      height: 56px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-desc {
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 15px;
      color: #344054;
      span {
        display: block;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.3);
      }
    }
    &-text {
      display: flex;
      gap: 8px;
      align-items: center;
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 13px;
      line-height: 138%;
      margin-top: 14px;
      i {
        width: 24px;
        height: 24px;
        color: #f24236;
      }
      p {
        color: #344054;
      }
      span {
        color: #f24236;
      }
    }
    &-actions {
      margin-top: 14px;
      display: flex;
      gap: 8px;
      button {
        width: calc(50% - 4px);
        padding: 8px 0;
      }
      &-right {
        background: rgba(242, 66, 54, 0.14);
        color: #f24236;
      }
    }
  }
  &__similar,
  &__rec {
    margin-top: 24px;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        width: 20px;
        height: 20px;
      }
    }
    &-title {
      font-weight: 700;
      font-size: 18px;
      color: #344054;
    }
    &-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 10px;
    }
    &-item {
      background: #fff;
      border-radius: 8px;
      padding: 0 12px 15px;
    }
    &-img {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      &.discount {
        span {
          display: block;
        }
      }
      i {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 6px;
        right: -6px;
      }
      span {
        position: absolute;
        top: 8px;
        left: -12px;
        font-weight: 500;
        font-size: 12px;
        color: #fff;
        padding: 6px 6px 6px 10px;
        background: #f24236;
        border-radius: 0 3px 3px 0;
        display: none;
      }
    }
    &-name {
      font-weight: 500;
      font-size: 13px;
      line-height: 138%;
      color: #344054;
    }
    &-status {
      font-weight: 500;
      font-size: 12px;
      line-height: 117%;
      color: #129a1b;
      margin-top: 5px;
    }
    &-price {
      margin-top: 8px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f6f8f9;
      font-weight: 700;
      font-size: 16px;
      line-height: 110%;
      color: #f24236;
      span {
        font-size: 14px;
      }
    }
    &-place {
      font-weight: 500;
      font-size: 14px;
      line-height: 110%;
      color: #344054;
      margin-top: 10px;
      span {
        font-size: 12px;
        color: #667085;
        display: block;
        margin-top: 6px;
      }
    }
  }
  &__tag {
    margin-top: 24px;
    &-flex {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    &-item {
      padding: 8px 12px;
      background: #fff;
      border-radius: 8px;
    }
  }
}
</style>
