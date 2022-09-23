import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
  // state:()=> {
  //   return {
  //     name: "",
  //     spots: 0,
  //     members: [],
  //     new: "This is new",
  //   };
  // },
  state: () => ({
    name: "",
    spots: 0,
    members: [],
    new: "This is new",
  }),
  actions: {
    fill() {
      import("@/team.json").then((t) => {
        // let data = t;
        // this.$patch({
        //   name: data.name,
        //   spots: data.spots,
        //   members: data.members,
        // });
        this.$state = t.default;
      });
      return this.$state;
    },
    setNew() {
      this.$patch({
        new: "New Update",
      });
    },
    grow(num) {
      this.spots = num;
    },
    addNewMember(email) {
      let id = this.members.length + 1
      this.members.push({
        id: id.toString(),
        name: email.substring(0, email.lastIndexOf("@")),
        email: email,
        status: "Active",
      });
      console.log(this.members)
    },
  },
  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
