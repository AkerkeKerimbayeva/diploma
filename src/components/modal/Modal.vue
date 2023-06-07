<template>
    <transition name="fade">
      <div class="back-modal">
        <div class="vue-modal" v-show="open">
          <transition name="drop-in">
            <div class="vue-modal-inner" v-show="open">
              <div class="vue-modal-content">
                <slot />
                <button type="button" class="close" @click="close">
                  <!-- <img src="@/assets/img/icon/close.png" alt="" /> -->
                </button>
              </div>
            </div>
          </transition>
          <div @click="close" class="visible"></div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import { onMounted, onUnmounted } from "vue";
  export default {
    props: {
      open: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {};
    },
    setup(_, { emit }) {
      const close = () => {
        emit("close");
      };
      const handleKeyup = (event) => {
        if (event.keyCode === 27) {
          close();
        }
      };
  
      onMounted(() => document.addEventListener("keyup", handleKeyup));
      onUnmounted(() => document.removeEventListener("keyup", handleKeyup));
  
      return { close };
    },
    methods: {},
    watch: {
      isOpen: function () {
        if (this.isOpen) {
          document.documentElement.style.overflow = "hidden";
          return;
        }
        document.documentElement.style.overflow = "auto";
      },
      isOpen1: function () {
        if (this.isOpen1) {
          document.documentElement.style.overflow = "hidden";
          return;
        }
        document.documentElement.style.overflow = "auto";
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .visible {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
    //   opacity: 1;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    padding: 26px;
    background: #ffff;
    // border-radius: 8px;
    color: #2c3131;
  }
  .vue-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // width: 100%;
    // height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 10000000 !important;
    &-inner {
      // width: clamp(300px, 70%, 820px);
      width: 100%;
      max-width: 620px;
      margin: 10px auto;
      filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.13));
      z-index: 10000000 !important;
      top: 12%;
      position: relative;
    }
    &-content {
      position: relative;
      background-color: #fff;
      background-clip: padding-box;
      // border-radius: 8px;
      padding: 25px;
    }
  }
  
  //animation --->
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .drop-in-enter-active,
  .drop-in-leave-active {
    transition: all 0.3s ease-out;
  }
  .drop-in-enter-from,
  .drop-in-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
  @media (max-width: 970px) {
    .vue-modal {
      &-inner {
        width: 100%;
      }
    }
  }
  </style>
  