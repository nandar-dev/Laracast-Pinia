<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">
      {{ team.name }} - {{ team.spots }} Member Team
    </h5>
    <!-- <pre>{{members}}</pre> -->
  </footer>
</template>

<script>
import { useTeamStore } from "@/store/TeamStore.js";
export default {
  name: "TeamFooter",
  data() {
    return {
      team: useTeamStore(),
      members: useTeamStore().members,
    };
  },
  mounted(){
    setTimeout(() => {
      this.members = this.team.members;
    }, 100);
  }
};
</script>

<style></style>
