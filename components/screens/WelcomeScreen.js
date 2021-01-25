import React from 'react';
import { ImageBackground, StyleSheet , View,Text, Image, _View } from 'react-native';

function WelcomeScreen (props){
    return (
        <View>
        <ImageBackground 
        style={styles.background}
        source={require("../../assets/backgroundCp.jpg")} >

            <View style={styles.logoContainer}>
            <Image style={styles.logo}  
             source={require("../../assets/logo-red.png")} />
             <Text>Sell What You Don't Want</Text>
            </View>

            <View style={styles.loginButton}>
                <Text style={styles. loginText}>Login</Text>
            </View>

            <View style={styles.registerButton}>
                <Text style={styles. registerText}>Register</Text>
            </View>
        </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
  background:{
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      justifyContent: "flex-end",
      alignItems: "center",   // logo get at center
  },
  logo:{
      width: 100,
      height: 100,   
  },
  logoContainer:{
    position: "absolute",
    top: 39,
    alignItems: "center",
  },
  loginButton:{
    width: "100%",
    height: 50,
    backgroundColor: "#fff"
  },
  loginText:{
      color :"#1e90ff",
    fontSize: 20,
    alignSelf: "center",
    top: 7,
  },
  registerButton:{
      width: "100%",
      height: 50,
      backgroundColor: "#1e90ff",
  },
  registerText:{
    color :"#fff",
    fontSize: 20,
    alignSelf: "center",
    top:7, 
  }, 
});


export default WelcomeScreen;