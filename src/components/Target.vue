<template>
  <div class="d-flex align-center flex-column">
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn outlined rounded="lg" v-for="(count, targetName) in targets" :key="targetName" color="#BD3944"
            style="margin: 5px" @click="setTarget(targetName)">
            {{ targetName }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="selectedTarget">
        <v-col cols="auto">
          <v-btn @click="showTarget" color="#dc3d4b">
            Show Target ({{ selectedMap + " " + selectedTeam + " " + selectedTarget }})
            <v-dialog v-model="dialog" activator="parent" width="auto">
              <v-card>
                <v-card-text>
                  <img height="500px" id="target_img" :src="currentTargetImagePath" />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" block @click="dialog = false">Close Target Image</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import jsonData from '../assets/lineUpData.json';

export default {
  props: {
    selectedMap: String,
    selectedTeam: String, // 'Attacker' 또는 'Defender'
  },
  computed: {
    targets() {
      const teamData = this.target[this.selectedMap]?.[this.selectedTeam];
      return teamData ? teamData : {};
    },
  },
  watch: {
    selectedMap() {
      this.resetTarget();
    },
    selectedTeam() {
      this.resetTarget();
    },
  },
  data() {
    return {
      dialog: false,
      selectedTarget: "",
      target: jsonData,
      currentTargetImagePath: "",
    };
  },
  methods: {
    setTarget(targetName) {
      this.selectedTarget = targetName;
      // 이미지 경로 업데이트 또는 필요한 액션을 여기서 수행
      this.$emit('update:selectedTarget', this.selectedTarget);
      this.showTarget();
    },
    showTarget() {
      // 실제 프로젝트 구조에 맞게 이미지 경로를 설정하세요
      this.currentTargetImagePath = `/${this.selectedMap}/${this.selectedTeam}/${this.selectedTarget}/target.jpg`;
    },
    resetTarget() {
      this.selectedTarget = "";
      this.currentTargetImagePath = "";
      this.dialog = false;
    },
  },
};
</script>
