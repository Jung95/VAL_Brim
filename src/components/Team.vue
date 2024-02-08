<template>
    <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation v-model="selectedTeam" bg-color="#FD4556" grow>
            <v-btn @click="updateTeam(0)">
                <v-icon>mdi-sword</v-icon>
                Attacker
            </v-btn>

            <v-btn @click="updateTeam(1)">
                <v-icon>mdi-shield</v-icon>
                Defender
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            selectedTeam: 0, // 0: Attacker, 1: Defender
        };
    },
    methods: {
        updateTeam(newVal) {
            this.selectedTeam = newVal;
            if (newVal === 0) {
                this.$emit('update:selectedTeam', 'Attacker');
            } else {
                this.$emit('update:selectedTeam', 'Defender');
            }
        },
    },
}
</script>
