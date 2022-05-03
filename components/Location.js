import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const Location = () => {
    return ( <Map
    initialViewState={{
      longitude: 4.402125596945238,
      latitude:  51.221553116988886,
      zoom: 18
    }}
    style={{width: "100%", height: "25em", margin: "0 0 3em 0"}}
    mapStyle="mapbox://styles/mapbox/outdoors-v11"
    mapboxAccessToken="pk.eyJ1IjoicGF0cnlrcGlsaWNob3dza2kiLCJhIjoiY2wwMnBibTgyMDAxZzNrbGJlaTJpbXVmcCJ9.IvAYmE8zinQtA0qU8mXpjg"
  > 
  <Marker longitude={4.402125596945238} latitude={51.221553116988886} anchor="bottom">

  </Marker>
  </Map>
  );
}

export default Location;