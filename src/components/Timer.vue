<template>
  <div>
    <p>{{ formattedTime }}</p>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onBeforeUnmount,
  defineProps,
  defineEmits,
  watch,
} from "vue";

const props = defineProps({
  timer: {
    type: Boolean,
  },
});

const emits = defineEmits('sendTime')
const emitSendTime = () => {
  emits('sendTime', formattedTime.value);
};

const computedTimer = computed(() => {
  return props.timer;
});
/*eslint-disable no-unused-vars*/
const watching = watch(computedTimer, () => {
  if (computedTimer.value) {
    startTimer();
  } else {
    stopTimer();
    emitSendTime()
  }
});
/*eslint-disable no-unused-vars*/

const isRunning = ref(false);
const startTime = ref(null);
const elapsedTime = ref(0);
const timerInterval = ref(null);

const formattedTime = computed(() => {
  const seconds = elapsedTime.value;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(
    2,
    "0"
  )}:${String(seconds % 60).padStart(2, "0")}`;
});

const startTimer = () => {
  if (!isRunning.value) {
    startTime.value = Date.now() - elapsedTime.value;
    isRunning.value = true;
    timerInterval.value = setInterval(updateTime, 1000);
  }
};

const stopTimer = () => {
  if (isRunning.value) {
    clearInterval(timerInterval.value);
    isRunning.value = false;
  }
};

const updateTime = () => {
  elapsedTime.value = Math.floor((Date.now() - startTime.value) / 1000);
};

onBeforeUnmount(() => {
  stopTimer();
});
</script>
