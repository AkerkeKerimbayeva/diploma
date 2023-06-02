<template>
    <div class="tab-items">
      <ul class="tab-list">
        <li v-for="tab in tabItems" :key="tab" class="tab-item" :class="{ activeItem: tab === selected }">
          <div
            :class="{ active: tab === selected }"
            class="tab-link tab-title"
            @click="setTab(tab)"
          >
            {{ tab }}
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabItems: {
        type: Array,
        required: true,
      },
      selected: {
        type: String,
        required: true,
      },
    },
    methods: {
      setTab(tab) {
        this.$emit("setTab", tab);
      },
    },
  };
  </script>

<style lang="scss" scoped>
.active {
    color: #FF9F0D;
    font-weight: 700;
    border-bottom: 2px solid #FF9F0D;
}
.activeItem {
  background: #FFFFFF !important;
}
.tab {
    &-list {
        display: flex;
        // width: 100%;
        margin: 30px 0;
    }
    &-item {
        font-size: 20px;
        line-height: 28px;
        list-style-type: none;
        font-weight: 500;
        margin-right: 30px;
    }
    &-link {
        cursor: pointer;
    }
}
</style>