<template>
  <Header />
  <div class="about">
    <p>
      The Tower of Hanoi is a mathematical game or puzzle consisting of three
      rods and a number of disks of various diameters, which can slide onto any
      rod. The puzzle begins with the disks stacked on one rod in order of
      decreasing size, the smallest at the top, thus approximating a conical
      shape. The objective of the puzzle is to move the entire stack to one of
      the other rods, obeying the following
    </p>
    <ul>
      <li>Only one disk may be moved at a time.</li>
      <li>
        Each move consists of taking the upper disk from one of the stacks and
        placing it on top of another stack or on an empty rod.
      </li>
      <li>No disk may be placed on top of a disk that is smaller than it.</li>
    </ul>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped>
.about {
  padding: 20px 40px;
  font-size: 1.3em;
  grid-area: 2/1/2/1;
}
ul {
  padding-top: 20px;
  list-style-position: inside;
}
</style>
