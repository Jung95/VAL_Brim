<template>
    <v-card>
        <v-tabs v-model="selectedMapIndex" bg-color="#FD4556" center-active align-tabs="center">
            <!-- JSON 데이터에서 추출한 맵 이름들로 탭들을 동적으로 생성합니다 -->
            <v-tab v-for="(mapName, index) in mapNames" :key="index">{{ mapName }}</v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
import jsonData from '../assets/lineUpData.json';

export default {
    data() {
        return {
            selectedMapIndex: 0, // 선택된 탭의 인덱스를 저장합니다.
            selectedMap: '', // 선택된 탭의 이름을 저장합니다.
            mapNames: [], // JSON 데이터에서 추출한 맵의 이름들을 저장합니다.
        };
    },
    mounted() {
        // JSON 데이터에서 맵의 이름들을 추출하여 mapNames 배열에 저장합니다.
        this.mapNames = Object.keys(jsonData);
        // 초기 선택된 탭의 이름을 설정합니다.
        this.updateSelectedMap();
    },
    watch: {
        selectedMapIndex() {
            // 선택된 탭의 인덱스가 변경될 때마다 선택된 맵의 이름을 업데이트합니다.
            this.updateSelectedMap();
        }
    },
    methods: {
        updateSelectedMap() {
            // 선택된 탭의 인덱스를 바탕으로 탭의 이름을 업데이트하고 부모 컴포넌트로 전달합니다.
            this.selectedMap = this.mapNames[this.selectedMapIndex];
            this.$emit('update:selectedMap', this.selectedMap);
        }
    }
};
</script>
