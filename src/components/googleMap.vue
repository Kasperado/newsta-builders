<template>
  <div class="google-map"></div>
</template>
<script>
export default{
  ready: function() {
    var myOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(25.761680, -80.19179)
    };
    var map = new google.maps.Map(document.querySelector(".google-map"), myOptions);
  }
};
</script>
<style scoped>

  .google-map{
    min-width: 100px;
    min-height: 100px;
  }

</style>
