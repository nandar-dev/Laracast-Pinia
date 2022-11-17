<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div>
          <slot name="main">
            <p>Need to add new member to your team?</p>

            <form
              v-on:submit.prevent="submitNewMember(email)"
              class="mt-6 mb-6"
            >
              <div class="flex gap-2">
                <input
                  class="flex-1"
                  type="email"
                  v-model="email"
                  placeholder="Email Address"
                />
                <button>Add</button>
              </div>
            </form>
          </slot>
        </div>
        <footer class="modal-footer">
          <div>
            <slot name="footer">
              <button class="close-btn" @click="$emit('closemodal')">
                close
              </button>
            </slot>
          </div>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script>
import { useTeamStore } from "@/store/TeamStore.js";
export default {
  name: "ModalView",
  props: {
    show: Boolean,
  },
  emits: ['closemodal'],
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitNewMember() {
      useTeamStore().addNewMember(this.email);
      this.$emit('closemodal')
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
  padding-top: 10px;
}
.close-btn {
  background: rgb(204, 203, 203);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(1.25);
}
.modal-enter-to {
  opacity: 1;
  transform: scale(1);
}

.modal-enter-active {
  transition-duration: 300ms;
}

.modal-leave-active {
  transition-duration: 200ms;
}

.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(1.25);
}

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
