import React, { useEffect } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import kmp from "./pics/kmp.jpg"

const mapStyles = {
    width: '40%',
    height: '50%'
};

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          // for google map places autocomplete
          address: '',
    
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
      
          mapCenter: {
            lat: 49.2827291,
            lng: -123.1207375
          }
        };
      }
    
      handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        this.setState({ address });
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
    
            // update center state
            this.setState({ mapCenter: latLng });
          })
          .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <div className="container-fluid">

                <h1>Point Farm</h1>
                <div class="float-container">
                    <div className="float-child">
                    <div id='googleMaps'>
                        <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                        >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                            <input
                                {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                    >
                                    <span>{suggestion.description}</span>
                                    </div>
                                );
                                })}
                            </div>
                            </div>
                        )}
                        </PlacesAutocomplete>

                        <Map 
                        google={this.props.google}
                        style={mapStyles}
                        initialCenter={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }}
                        center={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }}
                        >
                        <Marker 
                            position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                            }} />
                        </Map>
                    </div>
                    </div> 

                    <div className="float-child">
                        <h2 class="kmp">Waiting for your code to deploy</h2>
                        <div class="container">
                            <div class="box">
                                <img src={kmp} width='300' height='250'></img>
                            </div>
                            <div class="box">
                                <img src={kmp} width='300' height='250'></img>
                            </div>
                            <div class="box">
                                <img src={kmp} width='300' height='250'></img>
                            </div>
                            <div class="box">
                                <img src={kmp} width='300' height='250'></img>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

            </div>
        );
    }
}
  export default GoogleApiWrapper({
      apiKey: 'AIzaSyAxyl1fKcj5-wP-4cT6BZD4u-zl0K8UR0E'
  })(Teams);
  