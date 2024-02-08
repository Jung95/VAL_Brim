<script setup>
import Map from "./components/Map.vue";
import Target from "./components/Target.vue";
import Team from "./components/Team.vue";
import LineUp from "./components/LineUp.vue";

import { ref, watch } from "vue";

// 선택된 맵과 팀을 저장하기 위한 반응형 데이터
const selectedMap = ref("Sunset");
const selectedTeam = ref("Attacker"); // 예시를 위해 초기값 설정
const selectedTarget = ref("");

// selectedMap이나 selectedTeam이 변경될 때 실행될 콜백 함수
const resetSelectedTarget = () => {
  selectedTarget.value = ''; // selectedTarget을 초기화합니다.
};

// selectedMap과 selectedTeam에 대한 감시자(watchers)를 설정합니다.
watch(selectedMap, resetSelectedTarget);
watch(selectedTeam, resetSelectedTarget);
</script>

<template>
  <Map @update:selectedMap="selectedMap = $event"></Map>
  <Target :selected-map="selectedMap" :selected-team="selectedTeam" @update:selectedTarget="selectedTarget = $event"></Target>
  <Team @update:selectedTeam="selectedTeam = $event"></Team>
  <LineUp :selected-map="selectedMap" :selected-team="selectedTeam" :selected-target="selectedTarget" v-if="selectedTarget"></LineUp>
</template>

<script>

</script>