<template>
  <header class="flex justify-between">
    <div>
      <button
        @click="add"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining"
      >
        Add Member ({{ team.spotsRemaining }} Spots Left)
      </button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        😄
        <h3>{{ team.name }} Team {{ news }}</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useTeamStore } from "@/store/TeamStore.js";

export default {
  name: "TeamHeader",
  data() {
    return {
      team: useTeamStore(),
      news: "",
    };
  },
  mounted() {
    useTeamStore().setNew();
    let aa = useTeamStore().fill();
    this.news = aa.new;
  },
  methods: {
    add() {
      this.$emit("addmember");
    },
  },
};
</script>

<style></style>
