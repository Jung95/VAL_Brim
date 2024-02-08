<script setup>
import Map from "./components/Map.vue";
import Target from "./components/Target.vue";
import Team from "./components/Team.vue";

import { ref } from "vue";

// 선택된 맵과 팀을 저장하기 위한 반응형 데이터
const selectedMap = ref("Bind");
const selectedTeam = ref("Attacker"); // 예시를 위해 초기값 설정
</script>

<template>
  <Map @update:selectedMap="selectedMap = $event"></Map>
  <Target :selected-map="selectedMap" :selected-team="selectedTeam" @update:selectedTarget="selectedTarget = $event"></Target>
  <Team @update:selectedTeam="selectedTeam = $event"></Team>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
