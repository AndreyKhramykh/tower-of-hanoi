<template>
  <div class="wrapper"><router-view /></div>
</template>
<script setup>
</script>

<style scoped lang="scss">
@import url(@/assets/style.css);
.wrapper {
  display: grid;
  grid-template-rows: 1fr 5fr;
  min-height: 100vh;
  color: whitesmoke;
  font-family: Pixel;
  background: rgb(97, 12, 159);
  background: linear-gradient(
    180deg,
    rgba(97, 12, 159, 1) 25%,
    rgba(148, 11, 146, 1) 50%,
    rgba(218, 12, 129, 1) 75%,
    rgba(229, 68, 143, 1) 100%
  );
}
</style>
