<template>
<div id="app">
  <navbar logoSrc="../assets/logo.png" :navElements="['Home','About','Pricing','Contact']" :navWidth="1200" :fillerOffset="0"></navbar>

  <introSection :picHeight="100" mainText="Looking to create history?" underText="Build it with us!"></introSection>
  <aboutSection></aboutSection>
  <pricingSection></pricingSection>
  <contactSection></contactSection>
</div>
</template>

<script>
import navbar from './components/navbar.vue';
import introSection from './components/introSection.vue';
import aboutSection from './components/aboutSection.vue';
import pricingSection from './components/pricingSection.vue';
import contactSection from './components/contactSection.vue';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    navbar,
    introSection,
    aboutSection,
    pricingSection,
    contactSection,
  },
  methods: {
    fadingFun() {
      const elements = document.querySelectorAll('.anime');
      const windowHeight = window.innerHeight;
      for (var i = 0; i < elements.length; i++) {
        // Check for every element if at least 50% of it's height is shown on screen >> if so, animate
        let positionFromTop = elements[i].getBoundingClientRect().top + (elements[i].offsetHeight / 2);
        if (positionFromTop - windowHeight <= 0) {
          elements[i].className = elements[i].className.replace('anime', ''); // Remove opacity 0
          let type = elements[i].className.match(/(left|right|up|blank)/g).toString(); // Get type of animation
          elements[i].className = elements[i].className.replace(type, 'fadeIn' + type.charAt(0).toUpperCase() + type.slice(1)); // Switch class
        }
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.fadingFun, false);
    this.fadingFun();
  }

};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

h1 {
    font-size: 32px;
}

$selectColor: #676869;
::selection {
    background: $selectColor;
}
::-moz-selection {
    background: $selectColor;
}

html {
    scroll-behavior: smooth;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
}

#app {
    font-family: 'Roboto Slab', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #2c3e50;
}

.anime {
    opacity: 0;
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.fadeInLeft {
    animation: fadeInLeft 1.25s forwards;
}

.fadeInRight {
    animation: fadeInRight 1.25s forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

.fadeInUp {
    animation: fadeInUp 1.25s forwards;
}

@keyframes fadeInBlank {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fadeInBlank {
    animation: fadeInBlank 1.25s forwards;
}
</style>
