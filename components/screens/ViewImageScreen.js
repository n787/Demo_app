import React from 'react';
import { Image,StyleSheet, View } from 'react-native';
import colors from "./config/color";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}
        >
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
        <Image  resizeMode= "contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        width: 40,
        height: 40,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top : 10,
        left: 30,
    },
    container:{
        backgroundColor: "#000",
        //width: "100%",
       //height:"100%",
    },
    deleteIcon:{
        width: 40,
        height: 40,
        backgroundColor: "#4ecdc4",
        position: "absolute",
       top:10,
       right:30,
    },
    image:{
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;