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

    background-color: #AAB;
    height: 50vh;
    width: 100%;
    padding: 12px;
    float: left;
    .price_boxes{


      .price_option{

          &:hover{

          }
      }
    }
  }

</style>
