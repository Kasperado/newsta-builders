<template>
<section class="pricing">
  <h1 class="anime blank">Pricing</h1>
  <div class="price_boxes">

    <div class="price_option anime left">
      <div class="name">House Renovation</div>
      <div class="desc">Renovating everything you on your possesion -
        restoration of fence, entry road repair or even renewal of your entire house!
      </div>
      <div class="cost">Cost: Varies from service</div>
    </div>

    <div class="price_option anime blank">
      <div class="name">House Construction</div>
      <div class="desc">We will create your dream house within 6 months from decision.
        Price may wary from estimated.</div>
      <div class="cost">Cost: 200k-400k $</div>
    </div>

    <div class="price_option anime right">
      <div class="name">Pool Creation</div>
      <div class="desc">We will design and build pool next to your house.<br>
        You will get 20% off if ordered with house building service.</div>
      <div class="cost">Cost: 15k - 40k $</div>
    </div>

  </div>
</section>
</template>

<script>
export default {
  name: 'pricingSection',
};
</script>

<style lang="scss" scoped>
$egdeColor: #232425;

.pricing {
    background-color: #CCC;
    width: 100%;
    padding: 12px;
    h1 {
        margin-bottom: 12px;
        color: #242525;
    }
    .price_boxes {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin: auto;
        padding: 18px;
        .price_option {
            margin: 12px;
            height: auto;
            width: 100%;
            max-width: 300px;
            background-color: #787970;
            border-radius: 5px;

            .cost,
            .desc,
            .name {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
            }

            .name {
                font-size: 18px;
                font-weight: bold;
                height: 15%;
                background-color: $egdeColor;
                border-radius: 5px 5px 0 0;
            }

            .desc {
                height: 70%;
                width: 180px;
                margin: auto;
            }

            .cost {
                height: 15%;
                background-color: $egdeColor;
                border-radius: 0 0 5px 5px;
            }
        }
    }
}

@media (min-width: 964px) {

    .pricing {
        .price_boxes {
            max-width: 1200px;
            padding: 12px;
            .price_option {
                border-radius: 5px;
                height: 300px;
                .name {
                    font-size: 24px;
                    padding: 4px;
                }
                .desc {
                    font-size: 20px;
                    width: 80%;
                }

                .cost {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
