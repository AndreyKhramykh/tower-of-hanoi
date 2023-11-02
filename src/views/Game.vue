<template>
  <Header />
  <div class="game-container">
    <div class="setup-block">
      <h3>Select block's quantity:</h3>
      <select v-model="selectedBlocksQuantity" name="blocksQuantity" id="">
        <option value="3">3 blocks</option>
        <option value="4">4 blocks</option>
        <option value="5">5 blocks</option>
        <option value="6">6 blocks</option>
        <option value="7">7 blocks</option>
        <option value="8">8 blocks</option>
      </select>
      <button @click="startGame">Start</button>
    </div>
    <div class="win-block" v-if="isWin">
      <h1>Congrats!</h1>
      <h2>You win!</h2>
      <h4>
        You use <strong>{{ winBlocksCount }}</strong> blocks
      </h4>
      <h4>
        You have made <strong>{{ stepCounter }}</strong> moves
      </h4>
      <h4>
        Your time is <strong>{{ winTime }}</strong>
      </h4>
    </div>
    <div v-else class="hanoi">
      <div
        class="hanoi__tower"
        v-for="tower in towers"
        :key="tower"
        @click="clickOnTower(tower)"
      >
        <div
          class="hanoi__block"
          v-for="block in blocks[tower]"
          :class="{ selected: isSelected(block) }"
          :key="block.id"
          :style="block.style"
        ></div>
      </div>
    </div>
  </div>
  <Timer
    class="display-none"
    :timer="timerStatusRef"
    @sendTime="handleEmitSendTime"
  />
</template>

<script setup>
import { ref, onBeforeMount, computed } from "vue";
import Header from "@/components/Header.vue";
import Timer from "@/components/Timer.vue";

const handleEmitSendTime = (data) => {
  winTime.value = data;
  console.log(`output->emit data`, data);
};

const timerStatusRef = ref(false);

function startTimer() {
  timerStatusRef.value = true;
}
function stopTimer() {
  timerStatusRef.value = false;
}
const winTime = ref(null);
const firstClickOnTower = ref(false);
const selectedBlocksQuantity = ref("3");
const quantityBlocks = computed(() => {
  setItemToStorage();
  return getItemFromStorage();
});
const winBlocksCount = ref(0);
const stepCounter = ref(0);
const isWin = ref(false);

const towers = [0, 1, 2];
const blocks = ref([[], [], []]);
const colors = [
  "#F55353",
  "#143F6B",
  "#F6F54D",
  "#1EAE98",
  "#FF5200",
  "#6F0000",
  "#17B978",
  "#2FA4FF",
];

const selectedElement = ref(null);
const selectedElementStatus = ref(null);

function setItemToStorage() {
  sessionStorage.setItem("blocksQuantity", +selectedBlocksQuantity.value);
}

function setWinBlocksCount(count) {
  sessionStorage.setItem("winBlocksCount", count);
}

function getItemFromStorage() {
  let storage = sessionStorage.getItem("blocksQuantity");
  if (storage == null) {
    return 0;
  }
  return +storage;
}

function startGame() {
  setItemToStorage();
  firstClickOnTower.value = false;
  stepCounter.value = 0;
  isWin.value = false;
  selectedElement.value = null;
  selectedElementStatus.value = null;
  fillBlocks();
  stopTimer();
}

function isFirstClickOnTower() {
  if (firstClickOnTower.value == false) {
    return true;
  } else {
    return false;
  }
}

function isSelected(block) {
  if (selectedElementStatus.value && block.selected === true) {
    return true;
  }
}

function selectBlock(id) {
  if (blocks.value[id].length == 0) return;
  selectedElementStatus.value = !selectedElementStatus.value;
  blocks.value[id][0].selected = !blocks.value[id][0].selected;
}

function entrySelectedElement(id) {
  if (blocks.value[id].length == 0) return;
  if (blocks.value[id][0].selected) {
    selectedElement.value = blocks.value[id][0];
  }
}

function moveBlock(id) {
  const oldTower = selectedElement.value.towerID;
  blocks.value[oldTower].splice(0, 1);
  blocks.value[id].unshift(selectedElement.value);
  blocks.value[id][0].selected = false;
  blocks.value[id][0].towerID = id;
  selectedElement.value = null;
  selectedElementStatus.value = null;
}

function changeBlockPosition(id) {
  if (
    blocks.value[id].length == 0 ||
    blocks.value[id][0].id > selectedElement.value.id
  ) {
    moveBlock(id);
    stepCounter.value++;
  } else if (blocks.value[id][0].id == selectedElement.value.id) {
    moveBlock(id);
  }
}

function checkPosibleWin(id) {
  if (id !== 0 && blocks.value[id].length == quantityBlocks.value) {
    isWin.value = true;
    stopTimer();
    setWinBlocksCount(getItemFromStorage());
    winBlocksCount.value = sessionStorage.getItem("winBlocksCount");
  }
}

function clickOnTower(towerID) {
  if (isFirstClickOnTower()) {
    startTimer();
    firstClickOnTower.value = true;
  }
  if (isWin.value) return;
  if (!selectedElementStatus.value) {
    selectBlock(towerID);
    entrySelectedElement(towerID);
  } else {
    changeBlockPosition(towerID);
    checkPosibleWin(towerID);
  }
}

const fillBlocks = () => {
  blocks.value[0].length = 0;
  blocks.value[1].length = 0;
  blocks.value[2].length = 0;
  [...Array(getItemFromStorage()).keys()].forEach((i) => {
    blocks.value[0].push({
      id: i,
      towerID: 0,
      style: `--width: ${25 + 10 * i}%; --bgc: ${colors[i]};`,
      selected: false,
    });
  });
};

onBeforeMount(() => {
  fillBlocks();
});
</script>

<style scoped lang="scss">
.display-none {
  display: none;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 400px;
  padding: 20px;
}

.setup-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.hanoi {
  border: 6px solid rgba(97, 12, 159, 0.8);
  width: 80%;
  height: 80%;
  background-color: rgba(97, 12, 159, 0.6);
  display: flex;
  flex-direction: row;
  gap: 5%;
  &__tower {
    position: relative;
    width: 30%;
    display: flex;
    gap: 2px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    &::before {
      z-index: 1;
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 100%;
      background-color: brown;
    }
  }
  &__block {
    z-index: 2;
    width: var(--width);
    background-color: var(--bgc);
    height: 20px;
    border-radius: 4px;
  }
}
.win-block {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 40px;
  gap: 20px;
}

strong {
  color: #6f0000;
}

button {
  border-radius: 5px;
  background-color: #ff5200;
  border: none;
  padding: 10px 20px;
  color: whitesmoke;
  font-family: Pixel;
  cursor: pointer;
}
.selected {
  opacity: 0.5;
}

@media screen and (max-width: 768px) {
  .hanoi__tower::before {
    width: 4px;
  }

  .setup-block {
    flex-direction: column;
    padding-bottom: 40px;
  }
}
</style>
