import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component{
    render() {
      return (
        <Map google={this.props.google} zoom={8}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDQTAiFhOu331GeK8x5zqSkwW609Z7KIfA")
  })(MapContainer)