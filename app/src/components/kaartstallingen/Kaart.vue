<template>
  <div id="kaart"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from 'axios'
import Stalling from '../../../models/Stalling'

export default {
  name: "Kaart",
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoicm9vbzFvIiwiYSI6ImNrd2wzZDB5NDF5azYyd21qZHhoYjhuMHQifQ.lTQ0btLppOyhbqtKKWuXLA";
    const map = new mapboxgl.Map({
      container: "kaart", // container ID
      center: [3.71667, 51.05], // starting position [lng, lat]
      zoom: 13, // starting zoom
      style: "mapbox://styles/mapbox/streets-v11", // style URL or style object
      hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
      // Use `transformRequest` to modify requests that begin with `http://myHost`.
      transformRequest: (url, resourceType) => {
        if (resourceType === "Source" && url.startsWith("http://myHost")) {
          return {
            url: url.replace("http", "https"),
            headers: { "my-custom-header": true },
            credentials: "include", // Include cookies for cross-origin requests
          };
        }
      },
    });
    map.name = "none";
    this.refreshStallingen();
  }, methods: {
      refreshStallingen() {
            axios.get('https://data.stad.gent/explore/dataset/real-time-bezettingen-fietsenstallingen-gent/download/?format=json&timezone=Europe/Brussels&lang=en')
            .then((results) => {
                results = JSON.stringify(results)
                let stallingen = [];
                console.log(results.data)
                for(let result in JSON.stringify(results.data)){
                    console.log(result)
                    stallingen.push(new Stalling(
                        result.fields.facilityname,
                        result.fields.bezetting,
                        result.fields.freeplaces,
                        result.fields.totalplaces,
                        result.fields.locatie))

                }
                this.stallingen = stallingen
               // console.log(this.stallingen)
            })
        }
  }

};
</script>

<style scoped>
#kaart {
    height: 900px;
    width: 100%;
    margin-top: -60px !important; 
}
</style>
