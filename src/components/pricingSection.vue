<template>
  <section class="pricing">
    <h1 class="anime blank">Pricing</h1>
    <div class="price_boxes">
      <div class="price_option"></div>
      <div class="price_option"></div>
      <div class="price_option"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pricingSection',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

  .pricing{
    width: 100%;
    height: 50vh;
    background-color: gray;
    padding: 12px;
    float: left;
  }

</style>
