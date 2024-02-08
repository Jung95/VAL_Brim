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
            @click="setTargetImage(targetName)"
          >
            {{ targetName }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn>
            Show Target
            <v-dialog v-model="dialog" activator="parent" width="auto">
              <v-card>
                <v-card-text>
                   <v-img :src="currentTargetImagePath"></v-img>
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
  watch:{

  },
  data() {
    return {
    dialog: false,
    currentTargetImagePath: '', // 현재 선택된 타겟의 이미지 경로를 저장
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
  methods:{
    setTargetImage(targetName) {
      this.currentTargetImagePath = `/${this.selectedMap}/${this.selectedTeam}/${targetName}/target.jpg`;
    },
  }
};
</script>
