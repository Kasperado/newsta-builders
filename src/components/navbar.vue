<template>
  <div>
    <nav>
      <div class="nav_content" :style="{'max-width': navWidth + 'px' }">

        <div class="logo">
          <a href="#">
            <img src="../assets/logo.png" alt="logo" />
            <p>Newsta Builders</p>
          </a>
        </div>
        <ul ref="cm">
          <li v-for="n in navElements.reverse()" :key="n">
            <a class="list_link" v-scroll-to="{el: '.' + n.toLowerCase(), offset: -68, easing: 'ease', duration: 40 }">{{n}}</a>
          </li>
        </ul>
        <div @click="toggleMenu" class="mobile_menu">
          <img src="../assets/mobile_menu.png" alt="menu">
        </div>

      </div>
    </nav>
    <div class="nav_filler" :style="{'margin-top': fillerOffset + 'px' }"></div>
  </div>
</template>

<script>
function scrollFun() {
  if (document.body.scrollTop > 80
    || document.documentElement.scrollTop > 80
    || window.innerWidth < 730) {
    document.querySelectorAll('a.list_link').forEach((e) => {
      e.style.padding = '24px calc(1vw + 8px)';
      e.style.color = '#444';
      if(window.innerWidth < 730){
        e.style.backgroundColor = '#EEE';
      }
    });
    document.querySelector('.logo a img').style.width = '50px';
    document.querySelector('.logo a p').style.color = '#444';
    document.querySelector('nav').style.backgroundColor = '#EEE';
    document.querySelector('nav').style.borderBottom = '1px solid #AAA';
  } else {
    document.querySelectorAll('a.list_link').forEach((e) => {
      e.style.padding = '38px calc(1vw + 8px)';
      e.style.color = '#DDD';
      e.style.backgroundColor = 'initial';
    });
    document.querySelector('.logo a img').style.width = '80px';
    document.querySelector('.logo a p').style.color = '#DDD';
    document.querySelector('nav').style.backgroundColor = 'initial';
    document.querySelector('nav').style.borderBottom = 'none';
  }
}

document.addEventListener("scroll", scrollFun, false);
document.addEventListener('DOMContentLoaded', scrollFun, false);
document.addEventListener('resize', scrollFun, false);

export default {
  name: 'navbar',
  data() {
    return {};
  },
  props: {
    logoSrc: String,
    navElements: Array,
    navWidth: {
      type: Number,
      default: 1000,
    },
    fillerOffset: {
      type: Number,
      default: 0,
    },
  },
  methods: {

    toggleMenu() {
      const { cm } = this.$refs;
      if (cm.style.display === 'block') {
        cm.style.display = '';
      } else {
        cm.style.display = 'block';
      }
    },

  },
};
</script>

<style lang="scss" scoped>

  $navColor: #EEE;
  $textColor: #DDD;
  $textShadow: #DDD;

  nav{
    z-index: 100;
    user-select: none;
    position: fixed;
    width: 100%;
    margin: auto;
    top: 0;
    //Logo
    .logo{
      float: left;
      margin: 8px;
      a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 80px;
        }
        p{
          color: $textColor;
          font-weight: bold;
          font-size: 2.5vh;
          margin-left: 12px;
        }
      }
    }

    //Mobile menu
    .nav_content{
      margin: auto;
    }
    .mobile_menu{
      float: right;
      margin: 8px;
      height: 50px;
      img{
        max-height: 100%;
      }
    }
  }

  //Desktop Menu
  ul{
    list-style-type: none;
    display: none;
    position: absolute;
    top: calc(100% + 1px);
    width: 100%;
    li{
      width: 100%;
      float: right;
      border-bottom: solid 1px #AAA;
      cursor: pointer;

      a{
        padding: 38px calc(1vw + 8px);
        display: block;
        text-decoration: none;
        color: $textColor;
        font-weight: bold;
        font-style: italic;
        transition: background-color 0.5s, color 0.5s, text-shadow 0.5;
        &:hover{
            color: #aa5;
        }
      }
    }
  }

  //Anime
  img, .list_link, p, nav, a{
    transition: 0.4s;
  }

  @media (min-width: 730px) {

    .mobile_menu{
      display: none;
    }

    .logo{
      a{
        p{
          font-size: 3vh;
        }
      }
    }

    ul{
      display: block;
      top: 0;
      width: auto;
      position: static;
      li{
        width: auto;
        background-color: inherit;
        border-bottom: none;
      }
    }
}
</style>
