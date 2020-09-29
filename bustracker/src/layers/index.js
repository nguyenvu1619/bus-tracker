import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';
import {GeoJsonLayer} from '@deck.gl/layers';

function CustomGeoJsonLayer(map){
    const overlay = new DeckOverlay({
        layers: [
          new GeoJsonLayer({
            data: "http://localhost:8888/routes.json",
            pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getRadius: 100,
    getLineWidth: 1,
    getElevation: 30
          })
        ]
      });
      // Add overlay to map
      overlay.setMap(map);
}

export default CustomGeoJsonLayer