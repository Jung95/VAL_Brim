<template>
  <div class="d-flex align-center flex-column">
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
            outlined
            rounded="lg"
            v-for="targetName in targets"
            :key="targetName"
            color="#BD3944"
            style="margin: 5px"
            @click="setTarget(targetName)"
          >
            {{ targetName }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="selectedTarget">
        <v-col cols="auto">
          <v-btn @click="showTarget">
            Show Target ({{
              selectedMap + " " + selectedTeam + " " + selectedTarget
            }})
            <v-dialog v-model="dialog" activator="parent" width="auto">
              <v-card>
                <v-card-text>
                  <img
                    height="500px"
                    id="target_img"
                    :src="currentTargetImagePath"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" block @click="dialog = false"
                    >Close Target Image</v-btn
                  >
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
export default {
  props: {
    selectedMap: String,
    selectedTeam: String, // 'Attacker' 또는 'Defender'
  },
  computed: {
    targets() {
      if (this.selectedMap && this.selectedTeam) {
        return this.target[this.selectedMap][this.selectedTeam] || [];
      }
      return [];
    },
  },
  watch: {
    // selectedMap 또는 selectedTeam이 변경될 때마다 실행됩니다.
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
      selectedTarget: "", // 현재 선택된 타겟의 이름을 저장
      currentTargetImagePath: "", // 현재 선택된 타겟의 이미지 경로를 저장
      target: {
        Bind: {
          Attacker: [
            "A-Box-Left",
            "A-Box-Center",
            "A-Box-Right",
            "B-Truck",
            "B-Triple",
            "B-Triple-Open",
          ],
          Defender: ["A-To-B-Truck", "A-To-B-Triple"],
        },
        Haven: {
          Attacker: [
            "A-Long",
            "A-Short",
            "A-Heaven",
            "B-Long",
            "B-Short",
            "B-Heaven",
          ],
          Defender: ["A-To-B-Long", "A-To-B-Short", "A-To-B-Heaven"],
        },
        Split: {
          Attacker: [
            "A-Ramp",
            "A-Site",
            "A-Heaven",
            "B-Ramp",
            "B-Site",
            "B-Heaven",
          ],
          Defender: ["A-To-B-Ramp", "A-To-B-Site", "A-To-B-Heaven"],
        },
        Icebox: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
        Breeze: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
        Fracture: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
        Sunset: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
        Lotus: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
        Pearl: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
        Ascent: {
          Attacker: ["A-Site", "A-Boat", "A-Top", "B-Site", "B-Boat", "B-Top"],
          Defender: ["A-To-B-Site", "A-To-B-Boat", "A-To-B-Top"],
        },
      },
    };
  },
  methods: {
    setTarget(targetName) {
      this.selectedTarget = targetName;
      this.$emit("update:selectedTarget", targetName);
    },
    showTarget() {
      this.currentTargetImagePath = `/${this.selectedMap}/${this.selectedTeam}/${this.selectedTarget}/target.jpg`;
    },
    resetTarget() {
      // 타겟을 초기화하고 이미지 경로를 비웁니다.
      this.selectedTarget = "";
      this.currentTargetImagePath = "";

      this.dialog = false;
    },
  },
};
</script>
