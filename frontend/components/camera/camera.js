import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

class CameraComponent extends React.Component {
   
    takePicture() {
        this.setState({
            takeImageText: "... PROCESSING PICTURE ..."
        });
        this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
            this.setState({
                takeImageText: "PICTURE TAKEN",
                photo: data.uri
            }, console.log(data.uri))
        })
    }
  
    render(){
        return(
           <View style={{flex: 1}}>
                <Camera style={{flex: 1}}
                    ref={ref => { this.camera = ref; }}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                });
                            }}>
                            <Text>
                                Flip
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
                <View>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)} >
                        <Text>Take photo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
            
        
    }
    
}

export default  CameraComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
