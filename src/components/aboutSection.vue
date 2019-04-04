<template>
<section class="about">
  <h1 class="anime blank">About us</h1>
  <div class="block">
    <div class="img_holder anime left">
      <img src="../assets/plan.jpg" alt="plan">
    </div>
    <div class="text anime right">
      <span>
        <h3>What we do</h3>
        We are a construction company hiring over 50 professionals.
        Our main service is planning, desinging and building houses - all in less that 6 months!
        We also can do renovation and pool creation.
        Currently our service are only available in USA and Canada.
      </span>
    </div>
  </div>
  <div class="block">
    <div class="img_holder order anime right">
      <img src="../assets/house.jpg" alt="">
    </div>
    <div class="text order2 anime left">
      <span>
        <h3>Our workflow</h3>
        Within 2 weeks from the initial contact we will provide you with detailed plans of your future home and estimated cost of it.
        You will have infinite number of revisions.
        After the decision has been made we will build it up within 6 months.
        At the end of each month we will deliver to you precise progress report.
      </span>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'aboutSection',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about {
    width: 100%;
    color: white;
    border-top: 3px solid black;
    background: #000000;
    background: -moz-linear-gradient(top, #000000 0%, #b7ad63 96%);
    background: -webkit-linear-gradient(top, #000000 0%,#b7ad63 96%);
    background: linear-gradient(to bottom, #000000 0%,#b7ad63 96%);
    h1 {
        padding: 12px;
    }

    .block {
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: auto;
        padding: 4px;
        .img_holder {
            width: 100%;
            img {
                width: 100%;
                padding: 6px;
            }
        }

        .text {
            width: 100%;
            font-size: 18px;
            display: flex;
            align-items: center;
            span {
                font-size: 16px;
                margin: auto;
                max-width: 100%;
                padding: 12px;
                background-color: rgba(0,0,0,0.3);
                border-radius: 4px;
            }
        }
    }
}

@media (min-width: 480px) {
    .about {
        .block {
            width: 80%;
            padding: 12px;
        }
    }
}

@media (min-width: 756px) {
    .about {
        .block {
            flex-direction: row;
            width: 80%;
            padding: 12px;
            .order {
                order: 2;
            }

            .order2 {
                order: 1;
            }
            .img_holder {
                width: 50%;
                img {
                    width: 100%;
                    padding: 3vh;
                }
            }

            .text {
                width: 50%;
                span {
                    font-size: 17px;
                    max-width: 90%;
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .about {
        .block {
            .text {
                span {
                    font-size: 24px;
                    max-width: 80%;
                }
            }
        }
    }
}
</style>
