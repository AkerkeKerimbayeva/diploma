<template>
    <transition name="fade">
      <div
        class="cd-cart-container"
        v-bind:class="TotalPositions ? '' : 'empty'"
        v-if="TotalPositions > 0"
      >
        <a
          href="#"
          class="cd-cart-trigger"
          @click.prevent="
            $event.target.parentElement.classList.toggle('cart-open');
          "
        >
          <ul class="count">
            <li id="count-cart">{{ TotalPositions }}</li>
            <li>0</li>
          </ul>
        </a>
        <div class="cd-cart">
          <div class="wrapper">
            <header>
              <h2>Корзина</h2>
              <span
                class="undo"
                v-bind:class="Object.keys(delItem).length > 0 ? 'visible' : ''"
                >удалено.
                <a href="#" @click.prevent="revivalItem();">Восстановить</a></span
              >
            </header>
            <div class="body">
              <ul>
                <li class="product" v-for="item in cart" v-bind:key="item.id">
                  <div class="product-image">
                    <a href="#0"> <img :src="item.img+'90'" :alt="item.text" /> </a>
                  </div>
                  <div class="product-details">
                    <h3>
                      <a href="#">{{ item.text }}</a>
                    </h3>
                    <span class="price">{{ item.cost }} ₽</span>
                    <div class="actions">
                      <a
                        href="#"
                        class="delete-item"
                        @click.prevent="removeItem(item.id);"
                        >Удалить</a
                      >
                      <div class="quantity">
                        <label for="cd-product">Кол-во</label>
                        <span class="select">
                          <select
                            name="quantity"
                            v-model="item.qt"
                            @change="chengeQt();"
                          >
                            <option :value="1">1</option>
                            <option :value="2">2</option>
                            <option :value="3">3</option>
                            <option :value="4">4</option>
                            <option :value="5">5</option>
                            <option :value="6">6</option>
                            <option :value="7">7</option>
                            <option :value="8">8</option>
                            <option :value="9">9</option>
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <footer>
              <router-link to="/checkout" class="checkout btn">
                <em
                  >Итого - <span>{{ Total }} ₽</span></em
                >
              </router-link>
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "Cart",
    data() {
      return {
        cartOpen: null
      };
    },
    computed: {
      ...mapGetters(["cart", "TotalPositions", "delItem", "Total"])
    },
    methods: {
      ...mapActions(["removeItem", "chengeQt", "revivalItem"]),
      showCart(event) {
        console.log(event);
      }
    }
  };
  </script>
  
  <style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  
  // Note: we use Autoprefixer to add vendor prefixes to our CSS -> https://github.com/postcss/autoprefixer*/
  
  @import '../scss/_variables'; // colors, fonts etc...
  
  @import '../scss/_mixins'; // custom mixins
  
  @import '../scss/_layout'; // responsive grid and media queries
  
  /* -------------------------------- 
  
  Primary style
  
  -------------------------------- */
  
  /**, *::after, *::before {
      box-sizing: border-box;
  }*/
  
  /*html {
      font-size: 62.5%;
      @include font-smoothing;
  }
  
  body {
      font: {
          size: 1.6rem;
          family: $primary-font; // variables inside partials > _variables.scss
      }
      color: $color-1;
      background-color: $color-4;
  }*/
  
  a {
      color: $color-2;
      text-decoration: none;
  }
  
  img {
      max-width: 100%;
  }
  
  main {
      text-align: center;
      padding: 2em 5%;
  }
  
  /*h1 {
      font-size: 2rem;
      padding: 3em 0 .8em;
  
      @include MQ(M) {
          font-size: 3.2rem;
      }
  }*/
  
  .cd-add-to-cart {
      display: inline-block;
      padding: 1.2em 1.8em;
      background: $color-2;
      border-radius: 50em;
      text-transform: uppercase;
      color: $color-3;
      font-weight: 700;
      letter-spacing: .1em;
      box-shadow: 0 2px 10px rgba(#000, .2);
      transition: all .2s;
  
      &:hover {
          background: lighten($color-2, 5%);
      }
  
      &:active {
          transform: scale(.9);
      }
  }
  
  /* -------------------------------- 
  
  Main Components 
  
  -------------------------------- */
  
  .cd-cart-container::before {
      /* dark bg layer visible when the cart is open */
      content: '';
      position: fixed;
      z-index: 1;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      background: rgba(#000, .5);
      opacity: 0;
      visibility: hidden;
      transition: opacity .4s, visibility .4s;
  }
  
  .cd-cart-container.cart-open::before {
      opacity: 1;
      visibility: visible;
  }
  
  .cd-cart-trigger,
  .cd-cart {
      position: fixed;
      bottom: 20px;
      right: 5%;
      transition: transform .2s;
      /* Force Hardware Acceleration in WebKit */
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      will-change: transform;
      backface-visibility: hidden;
  
      .empty & {
          /* hide cart */
          transform: translateY(150px);
      }
  
      @include MQ(L) {
          bottom: 40px;
      }
  }
  
  .cd-cart-trigger {
      /* button that triggers the cart content */
      z-index: 3;
      height: 72px;
      width: 72px;
      /* replace text with image */
      text-indent: 100%;
      color: transparent;
      white-space: nowrap;
  
      &::after, &::before {
          /* used to create the cart/'X' icon */
          content: '';
          position: absolute;
          @include center;
          height: 100%;
          width: 100%;
          background: url(cd-icons-cart-close.svg) no-repeat 0 0;
          transition: opacity .2s, transform .2s;
      }
  
      &::after {
          /* 'X' icon */
          background-position: -72px 0;
          opacity: 0;
          transform: translateX(-50%) translateY(-50%) rotate(90deg);
      }
  
      .cart-open &::before {
          opacity: 0;
      }
  
      .cart-open &::after {
          opacity: 1;
          transform: translateX(-50%) translateY(-50%);
      }
  
      .count {
          /* number of items indicator */
          position: absolute;
          top: -10px;
          right: -10px;
          height: 28px;
          width: 28px;
          background: $color-5;
          color: $color-3;
          font-size: 1.5rem;
          font-weight: bold;
          border-radius: 50%;
          text-indent: 0;
          transition: transform .2s .5s;
  
          li {
              /* this is the number of items in the cart */
              position: absolute;
              transform: translateZ(0);
              @include center;
  
              &:last-of-type {
                  visibility: hidden;
              }
          }
  
          &.update-count li:last-of-type {
              animation: cd-qty-enter .15s;
              animation-direction: forwards;
          }
  
          &.update-count li:first-of-type {
              animation: cd-qty-leave .15s;
              animation-direction: forwards;
          }
      }
  
      .cart-open & .count {
          transition: transform .2s 0s;
          transform: scale(0);
      }
  
      .empty & .count {
          /* fix bug - when cart is empty, do not animate count */
          transform: scale(1);
      }
  
      &:hover + div .wrapper {
          box-shadow: 0 6px 40px rgba(#000, .3);
      }
  
      .cart-open &:hover + div .wrapper {
          box-shadow: 0 4px 30px rgba(#000, .17);
      }
  }
  
  .cd-cart {
      /* cart content */
      z-index: 2;
      width: 90%;
      max-width: 440px;
      height: 400px;
      max-height: 90%;
      pointer-events: none;
  
      .wrapper {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 2;
          overflow: hidden;
          height: 72px;
          width: 72px;
          border-radius: 6px;
          transition: height .4s .1s, width  .4s .1s, box-shadow .3s;
          transition-timing-function: cubic-bezier(.67,.17,.32,.95);
          background: $color-3;
          box-shadow: 0 4px 30px rgba(#000, .17);
          pointer-events: auto;
      } 
  
      header, footer {
          position: absolute;
          z-index: 2;
          left: 0;
          width: 100%;
      }
  
      header, .body {
          opacity: 0;
      }
  
      header {
          top: 0;
          border-radius: 6px 6px 0 0;
          padding: 0 1.4em;
          height: 40px;
          line-height: 40px;
          background-color: $color-3;
          transition: opacity .2s 0s;
          border-bottom: 1px solid shade($color-3, 10%);
          @include clearfix;
      }
  
      footer {
          bottom: 0;
          border-radius: 0 0 6px 6px;
          box-shadow: 0 -2px 20px rgba(#000, .15);
          background: $color-3;
      }
  
      h2 {
          text-transform: uppercase;
          display: inline-block;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: .1em;
      }
  
      .undo {
          float: right;
          font-size: 1.2rem;
          opacity: 0;
          visibility: hidden;
          transition: opacity .2s, visibility .2s;
          color: tint($color-1, 40%);
  
          a {
              text-decoration: underline;
              color: $color-1;
  
              &:hover {
                  color: $color-2;
              }
          }
  
          &.visible {
              opacity: 1;
              visibility: visible;
          }
      }
  
      .checkout {
          display: block;
          height: 72px;
          line-height: 72px;
          margin-right: 72px;
          background: $color-2;
          color: rgba($color-3, 0);
          text-align: center;
          font-size: 1.8rem;
          font-weight: 600;
          transition: all .2s 0s;
  
          &:hover {
              background: lighten($color-2, 3%);
          }
  
          em {
              position: relative;
              display: inline-block;
              transform: translateX(40px);
              transition: transform 0s .2s;
          }
  
          em::after {
              position: absolute;
              @include center(y);
              right: 0;
              content: '';
              height: 24px;
              width: 24px;
              background: url(cd-icon-arrow-next.svg) no-repeat center center;
              opacity: 0;
              transition: opacity .2s;
          }
      }
  
      .body {
          position: relative;
          z-index: 1;
          height: calc(100% - 40px);
          padding: 20px 0 10px;
          margin: 40px 0 10px;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          transition: opacity .2s;
  
          ul {
              overflow: hidden;
              padding: 0 1.4em;
              position: relative;
              padding-bottom: 90px;
          }
  
          li {
              position: relative;
              @include clearfix;
              opacity: 0;
              transform: translateX(80px);
              transition: opacity 0s .2s, transform 0s .2s;
  
              &:not(:last-of-type) {
                  margin-bottom: 20px;
              }
  
              &.deleted {
                  /* this class is added to an item when it is removed form the cart */
                  position: absolute;
                  left: 1.4em;
                  width: calc(100% - 2.8em); 
                  opacity: 0;
                  animation: cd-item-slide-out .3s forwards;
  
                  &.undo-deleted {
                      /* used to reinsert an item deleted from the cart when user clicks 'Undo' */
                      animation: cd-item-slide-in .3s forwards;
                  }
              }
  
              &.deleted + li {
                  animation: cd-item-move-up-mobile .3s;
                  animation-fill-mode: forwards;
              }
  
              &.undo-deleted + li {
                  animation: cd-item-move-down-mobile .3s;
                  animation-fill-mode: forwards;
              }
          }
      }
  
      .product-image {
          display: inline-block;
          float: left;
          /* the image height determines the height of the list item - in this case height = width */
          width: 50px;
  
          img {
              display: block;
          }
      }
  
      .product-details {
          position: relative;
          display: inline-block;
          float: right;
          width: calc( 100% - 50px);
          padding: 0.3em 0 0 0.5em;
          @include clearfix;
      }
  
      h3, .price {
          font-weight: bold;
      }
  
      h3 {
          width: 70%;
          float: left;
          /* truncate title with dots if too long */
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
  
          a {
              color: $color-1;
  
              &:hover {
                  color: $color-2;
              }
          }
      }
  
      .price {
          float: right;
          width: 30%;
          text-align: right;
      }
  
      .actions {
          font-size: 1.4rem;
          height: 1.6em;
          line-height: 1.6em;
          @include clearfix;
      }
  
      .delete-item, .quantity {
          float: left;
          color: tint($color-1, 40%);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
      } 
  
      .delete-item {
          margin-right: 1em;
  
          &:hover {
              color: $color-5;
          }
      }
  
      .quantity label {
          display: inline-block;
          margin-right: .3em;
      }
  
      .select {
          position: relative;
      }
  
      .select::after {
          /* switcher arrow for select element */
          content: '';
          position: absolute;
          z-index: 1;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 12px;
          height: 12px;
          background: url(cd-icon-select.svg) no-repeat center center;
          pointer-events: none;
      }
  
      select {
          position: relative;
          padding: 0 1em 0 0;
          cursor: pointer;
          appearance: none;
          background: transparent;
          border: none;
          border-radius: 0;
          font-size: 1.4rem;
          margin: 0;
          color: tint($color-1, 40%);
  
          &:focus {
              outline: none;
              color: $color-1;
              box-shadow: 0 1px 0 currentColor;
          }
      }
  
      select::-ms-expand {
          /* hide default select arrow on IE */
            display: none;
      }
      
      .cart-open & .wrapper {
          height: 100%;
          width: 100%;
          transition-delay: 0s;
      }
  
      .cart-open & header, 
      .cart-open & .body {
          opacity: 1;
      }
  
      .cart-open & header {
          transition: opacity .2s .2s;
      }
      
      .cart-open & .body {
          transition: opacity 0s;
          
          li {
              transition: transform .3s .2s, opacity .3s .2s;
              opacity: 1;
              transform: translateX(0);
  
              &:nth-of-type(2) {
                  transition-duration: .4s;
              }
  
              &:nth-of-type(3) {
                  transition-duration: .5s;
              }
  
              &:nth-of-type(4),
              &:nth-of-type(5) {
                  transition-duration: .55s;
              }
          }
      }
  
      .cart-open & .checkout {
          color: $color-3;
          transition: color .2s .3s;
  
          em {
              transform: translateX(0);
              transition: transform .2s .3s, padding .2s 0s;
          }
  
          &:hover em {
              padding-right: 30px;
              
              &::after {
                  opacity: 1;
              }
          }
      }
  
      @include MQ(M) {
  
          .body li:not(:last-of-type) {
              margin-bottom: 14px;
          }
  
          .body li.deleted + li {
              animation: cd-item-move-up .3s;
          }
  
          .body li.undo-deleted + li {
              animation: cd-item-move-down .3s;
          }
  
          .checkout {
              font-size: 2.4rem;
          }
  
          .product-image {
              width: 90px;
          }
  
          .product-details {
              padding: 1.4em 0 0 1em;
              width: calc( 100% - 90px);
          }
  
          h3, .price {
              font-size: 1.8rem;
          }
      }
  }
  
  @keyframes cd-qty-enter {
      0% {
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(0);
      }
      100% {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-50%);
      }
  }
  
  @keyframes cd-qty-leave {
      0% {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-50%);
      }
      100% {
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-100%);
      }
  }
  
  @keyframes cd-item-move-up-mobile {
      0% {
          padding-top: 70px;
      }
      100% {
          padding-top: 0px;
      }
  }
  
  @keyframes cd-item-move-up {
      0% {
          padding-top: 104px;
      }
      100% {
          padding-top: 0px;
      }
  }
  
  @keyframes cd-item-move-down-mobile {
      0% {
          padding-top: 0px;
      }
      100% {
          padding-top: 70px;
      }
  }
  
  @keyframes cd-item-move-down {
      0% {
          padding-top: 0px;
      }
      100% {
          padding-top: 104px;
      }
  }
  
  @keyframes cd-item-slide-out {
      0% {
          transform: translateX(0);
          opacity: 1;
      }
       100% {
          transform: translateX(80px);
          opacity: 0;
      }
  }
  
  @keyframes cd-item-slide-in {
      100% {
          transform: translateX(0);
          opacity: 1;
      }
      0% {
          transform: translateX(80px);
          opacity: 0;
      }
  }
  </style>
  