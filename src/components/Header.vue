<template>
  <div class="header">
    <h1>Tower of Hanoi game</h1>
    <div>
      <router-link to="/">Game</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script setup></script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 20px;

  & > div {
    display: flex;
    gap: 40px;

    & > a {
      color: whitesmoke;
      text-decoration: none;

      &:hover {
        color: #ff5200;
        transform: scale(1.2);
        transition: 1s;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  h1 {
    font-size: 1em;
    white-space: wrap;
  }
}
</style>
