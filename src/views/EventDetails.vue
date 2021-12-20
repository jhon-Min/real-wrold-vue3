<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>Loading....</div>
</template>

<script>
import EventService from "../services/EventService";

export default {
  name: "Event Details",
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },

  created() {
    EventService.getEvent(this.id)
      .then((response) => (this.event = response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
</style>