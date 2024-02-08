<template>
    <v-card>
        <v-tabs v-model="selectedMapIndex" bg-color="#FD4556" center-active align-tabs="center">
            <!-- 탭들을 동적으로 생성합니다 -->
            <v-tab v-for="(map, index) in maps" :key="index">{{ map }}</v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            selectedMapIndex: 0, // 선택된 탭의 인덱스를 저장합니다.
            selectedMap: '', // 선택된 탭의 이름을 저장합니다.
            maps: ['Sunset', 'Lotus', 'Pearl', 'Fracture', 'Breeze', 'Icebox', 'Bind', 'Haven', 'Split', 'Ascent'], // 탭의 이름을 담은 배열입니다.
        };
    },
    mounted() {
        // 초기 선택된 탭의 이름을 설정합니다.
        this.selectedMap = this.maps[this.selectedMapIndex];
    },
    watch: {
        selectedMapIndex(newVal) {
            // 선택된 탭의 인덱스를 바탕으로 탭의 이름을 업데이트합니다.
            this.selectedMap = this.maps[newVal];
            // 선택된 맵의 이름을 부모 컴포넌트로 전달합니다.
            this.$emit('update:selectedMap', this.maps[newVal]);
        }
    },
};
</script>
