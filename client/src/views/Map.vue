<template lang="html">
  <div id="leaflet-map">
    <LMap style="height: 500px; width: 100%"
      :center="[47.413220, -1.219482]">
      <LTileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></LTileLayer>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: "leaflet-map",
  components: {
    LMap, // LMap: LMap
    LTileLayer,
    LMarker
  }
}

</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#leaflet-map {
  height: 100%;
  width: 50%;
  margin-top: 100px;
  
}

h1 {
  text-align: center;
  margin-top: 100px;
  padding-top: 100px;
}

h2 {
  text-align: center;
  margin: 10px;
}
</style>
