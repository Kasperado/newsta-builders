<template>
  <GmapMap
  :center="center"
  :zoom="12"
  map-type-id="terrain"
  style="width: 100%; height: 100%;"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
    />
  </GmapMap>
</template>
<script>
export default{
  data() {
    return{
      center: { lat : 40.718812, lng : -74.000076 },
      markers: [
        {
          position: { lat : 40.718812, lng : -74.000076 },
        },
      ]
    }
  }
};
</script>

<style>
</style>
