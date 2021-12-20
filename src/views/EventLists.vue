<template>
  <div class="home">
    <h1>Events for Good</h1>
    <div class="events">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
      ></EventCard>
    </div>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";

export default {
  name: "Event Lists",
  components: { EventCard },
  data() {
    return {
      events: null,
    };
  },

  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.events {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
