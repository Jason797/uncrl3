import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
};

class Homepage extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
    

    render() {
        return (
            <div className="container-fluid">
                
                <h1>Welcome to UNC Rocket League</h1>
                <div className="map">
                <Map
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={
                    {
                        lat: 35.9027,
                        lng: -79.0451
                    }
                    }
                > 
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'UNC Esports Arena'}
                        />
                        <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                        >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}
  export default GoogleApiWrapper({
      apiKey : 'AIzaSyAxyl1fKcj5-wP-4cT6BZD4u-zl0K8UR0E'
  })(Homepage);
  