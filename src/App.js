import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component} from 'react';
export class MapContainer extends Component {
render() {
  return (
    <Map
          google={this.props.google}
          initialCenter={{
            lat: 33.491190599999996,
            lng:  73.0982555
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
      <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
      <InfoWindow onClose={this.onInfoWindowClose}>
       <div>
        <h1>Test</h1>
       </div>
      </InfoWindow>
  </Map>
 );
 }
}
export default GoogleApiWrapper((props)=>({
  apiKey: props.apiKey,
  language:props.language,
}))(MapContainer)