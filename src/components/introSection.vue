<template>
<section class="home" :style="{'height': picHeight + 'vh'}">
  <div class="intro_text">
    <div class="main_text anime blank">
      {{mainText}}
    </div>
    <div class="under_text anime up">
      {{underText}}
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'introSection',
  data() {
    return {};
  },
  props: {
    picHeight: {
      type: Number,
      default: 90,
    },
    mainText: {
      type: String,
      default: 'mainText',
    },
    underText: {
      type: String,
      default: 'underText',
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
    background-image: url("../assets/intro.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
}

.intro_text {
    float: none;
    max-width: 80%;
    margin: auto;
    padding-top: 30vh;
}

.main_text,
.under_text {
    text-shadow: 2px 2px 2px black;
    color: white;
    font-weight: bold;
    font-style: italic;
    font-size: 4vh;
}

.main_text {
    font-size: 7vh;
}
</style>
