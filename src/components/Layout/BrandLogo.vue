<template>
  <nuxt-link
    :class="light ? 'light' : 'dark'"
    class="navbar-brand"
    :to="{ name: 'index' }"
  >
    <img src="/images/logo.svg" alt="logo" class="navbar-brand-icon" />
    <span class="navbar-brand-title">{{ $t("app_title") }}</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "BrandLogo",
  props: {
    light: Boolean,
  },
})
</script>

<style lang="scss" scoped>
.navbar-brand {
  color: #efefef;
  text-decoration: none;


  &:hover,
  &:visited {
    color: #efefef;
  }

  .navbar-brand-title {
    vertical-align: middle;
    font-size: 16px;
    margin-left: 8px;
    transition-duration: 0.28s;
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navbar-brand-icon {
    font-size: 16px;
    color: #797979;
    height: 32px;
    width: 32px;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
    transition-duration: 0.28s;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.light {
    .navbar-brand-icon:hover {
      color: #fff;
    }
  }

  &:hover {
    .navbar-brand-icon {
      background-color: #4d4d4d;
      color: #797979;
    }

    .navbar-brand-title {
      color: #797979;
    }
  }
}
</style>
