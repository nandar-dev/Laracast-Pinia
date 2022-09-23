<template>
  <div class="content">
    <TeamHeader @addmember="addMember" />

    <div class="place-self-center flex flex-col gap-y-3">
      <TeamMembers />
    </div>

    <TeamFooter />
  </div>
  <Teleport to="body">
    <ModalView :show="showModal" v-on:closemodal="closeModal">
      <!-- <template #main>
        <p>Need to add new member to your team?</p>

        <form class="mt-6 mb-6">
          <div class="flex gap-2">
            <input
              class="flex-1"
              type="email"
              placeholder="Email Address"
            />
            <button >Add</button>
          </div>
        </form>
      </template> -->
    </ModalView>
  </Teleport>
</template>

<script>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import ModalView from "@/components/Teams/ModalView.vue";
import { useTeamStore } from "@/store/TeamStore.js";

export default {
  name: "TeamView",
  components: {
    TeamHeader,
    TeamMembers,
    TeamFooter,
    ModalView,
  },
  data() {
    return {
      team: {
        name: "",
        spots: 0,
        members: [],
      },
      showModal: false,
    };
  },
  mounted() {
    let storeTeam = useTeamStore().fill();
    this.team = storeTeam;
    // setTimeout(() => {
    //   useTeamStore().grow(200);
    // }, 2000);
  },
  methods: {
    addMember() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    
  },
};
</script>

<style scoped>
.content {
  margin: 0px 5% 0px 5%;
}
</style>
