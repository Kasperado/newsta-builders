<template>
<section class="contact">
  <h1 class="anime blank">Contact</h1>
  <div class="info">
    <div class="text anime right">
      <p>Address: 129 Lafayette St New York, NY 10013</p>
      <p>Email: office@newstabuilders.com</p>
      <p>Phones:</p>
      <p> +673 4254 3124</p>
      <p> +673 9314 1584</p>
    </div>
  </div>
  <div class="info">
    <div class="map anime blank">
      <googleMap defer></googleMap>
    </div>
  </div>
</section>
</template>

<script>
import googleMap from "./googleMap.vue";

export default {
  name: 'contactSection',
  components: {
    googleMap,
  },
};
</script>

<style lang="scss" scoped>
.contact {
    width: 100%;
    height: auto;
    background-color: #232425;
    padding: 18px;
    color: white;
}

.info {
    font-weight: bold;
    padding: 12px;
    float: left;
    text-align: left;
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
        border-left: 2px solid white;
        p {
            padding: 8px;
            font-size: 20px;
        }
    }

    .map {
        width: 100%;
        height: 350px;
        padding: 12px;
    }
}

@media (min-width: 730px) {

    .info {
        width: 50%;
        height: 400px;
    }

}
</style>
