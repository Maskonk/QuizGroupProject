<template>
  <div id="footer" style="height: 85%; width: 85%">
    <l-map style="height: 100%; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
      <l-polygon
      :lat-lngs="polygon.latlngs"
      :color="polygon.color">
      </l-polygon>
  </l-map>
</div>
</div>
</template>

<script>
import Vue from "vue"
import {LMap, LTileLayer, LPolygon } from 'vue2-leaflet';
import Vue2Leaflet from "vue2-leaflet"
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-polygon', LPolygon)

export default {
  name: "vue-map",
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 3.5,
      center: [42.02902, 94.667816],
      // markerLatLng: [47.313220, -1.319482],
      polygon: {
        latlngs: [
          [47.3220688, 52.5668335],
          [52.9653905, 55.3793335],
          [54.1658510, 70.3207397],
          [54.7279907, 91.4144897],
          [57.3296719, 109.2562866],
          [55.7503036, 118.6439937],
          [54.9389769, 135.3055806],
          [54.1744929, 139.8771287],
          [53.2380987, 141.3716732],
          [48.4720108, 140.0969147],
          [42.7943929, 133.2395926],
          [34.9495535, 119.2048665],
          [35.6796096, 103.1142899],
          [37.3745226, 87.1138717],
          [37.6533832, 78.3224331],
          [33.6557808, 63.0253300],
          [36.6728249, 54.0580627],
          [47.3425451, 52.6514325]
        ],
        color: 'red'
    },
  };
  // methods: {
  //   zoomUpdated (zoom) {
  //     this.zoom = zoom;
  //   },
  //   centerUpdated (center) {
  //     this.center = center;
  //   },
  //   boundsUpdated (bounds) {
  //     this.bounds = bounds;
  //   }
  // },
  components: {
    LMap,
    LTileLayer,
    LPolygon
    }
  }
}
</script>

<style lang="css">
#footer {
  position: absolute;
  bottom: 5%;
  align: center;
  }
</style>
