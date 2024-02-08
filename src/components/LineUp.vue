<template>
    <v-container class="mb-12">
        <v-row align="center" no-gutters>
            <v-col v-for="n in folderCount" :key="n">
                <v-card class="pa-2 ma-2" color="#FD4556" @click="">
                    <img :src="getImagePath(n)" alt="Lineup" width="100%" @click="showImage(n)">
                      <v-btn color="white" block @click="showPosition(n)">Show Position</v-btn>
                </v-card>
            </v-col>
        </v-row>

        <!-- 이미지 전체 화면 보기 대화상자 -->
        <v-dialog v-model="dialog" width="80vw">
            <v-card>
                <img :src="currentImagePath">
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import jsonData from '../assets/lineUpData.json';

export default {
    props: {
        selectedMap: String,
        selectedTeam: String,
        selectedTarget: String,
    },
    data() {
        return {
            dialog: false, // 대화상자 상태
            currentImagePath: '', // 현재 보여줄 이미지 경로
        };
    },
    computed: {
        folderCount() {
            const targetInfo = jsonData[this.selectedMap]?.[this.selectedTeam]?.[this.selectedTarget];
            return targetInfo || 0;
        },
    },
    methods: {
        getImagePath(n) {
            // 이미지 경로 생성 함수
            return `/${this.selectedMap}/${this.selectedTeam}/${this.selectedTarget}/${n}/lineup.jpg`;
        },
        showImage(n) {
            // 이미지 클릭 시 실행할 함수
            this.currentImagePath = this.getImagePath(n); // 현재 이미지 경로 업데이트
            console.log(this.currentImagePath);
            this.dialog = true; // 대화상자 열기
        },
        showPosition(n){
            console.log(n);
           this.currentImagePath = `/${this.selectedMap}/${this.selectedTeam}/${this.selectedTarget}/${n}/position.jpg`;
           console.log(this.currentImagePath);
           this.dialog = true; // 대화상자 열기
        }
    },
};
</script>
