<template>
  <section class="about">
      <h1 class="anime blank">About us</h1>
      <div class="block">
        <div class="img_holder anime left">
          <img src="../assets/plan.jpg" alt="plan">
        </div>
        <div class="text anime right">
          <span><h2>What we do</h2>
            We are a construction company hiring over 50 professionals.
            Our main service is planning, desinging and building houses - all in less that 6 months!
            We also can do renovation and pool creation.
            Currently our service are only available in USA and Canada.</span>
        </div>
      </div>
      <div class="block">
        <div class="text anime left">
          <span><h2>Our workflow</h2>
            Within 2 weeks from the initial contact we will provide you with detailed plans of your future home and estimated cost of it.
            You will have infinite number of revisions.
            After the decision has been made we will build it up within 6 months.
            At the end of each month we will deliver to you precise progress report.
          </span>
        </div>
        <div class="img_holder anime right">
          <img src="../assets/house.jpg" alt="">
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

  .about{
    width: 100%;
    float: left;
    color: white;
    border-top: 3px solid black;
    background: #000000; /* Old browsers */
    background: -moz-linear-gradient(top, #000000 0%, #b7ad63 96%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #000000 0%,#b7ad63 96%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #000000 0%,#b7ad63 96%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#b7ad63',GradientType=0 ); /* IE6-9 */

    .block{
      width: 100%;
      margin: auto;
      padding: 4px;
        .img_holder{
          width: 100%;
          img{
            width: 100%;
            padding: 6px;
          }
        }

        .text{
          width: 100%;
          font-size: 18px;
          display: flex;
          align-items: center;
          span{
            font-size: 16px;
            margin: auto;
            max-width: 80%;
            padding: 12px;
            background-color: rgba(0,0,0,0.3);
            border-radius: 4px;
          }
        }
    }
  }


  @media (min-width: 730px) {
    .about{
      .block{
        width: 80%;
        padding: 2vh;
        display: flex;
          .img_holder{
            width: 50%;
            img{
              padding: 3vh;
            }
          }

          .text{
            font-size: 24px;
            width: 50%;
            span{
              font-size: 22px;
            }
          }
      }
    }
  }

</style>
