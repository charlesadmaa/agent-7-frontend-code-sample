import { defineStore } from 'pinia';

export const msgAddedToListEventStore = defineStore({
  id: 'msgAddedToListEventStore',
  state: () =>
  ({
    message: String("")
  }),
  getters: {
    getEventMessage: (state) => state.message,
  },
  actions: {
    addEventMessage(message: any) {
      this.message = message
    },
    removeEventMessage(){
      this.message = ""
    },
  },
});
