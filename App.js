
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login"
import HomeScreen from "./screens/Home"
import SignUpScreen from "./screens/SignUp"

import firebase from 'firebase/app';
import "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const firebaseConfig = {
  
  apiKey: "AIzaSyDLhx21srgx1FQdDATtEnUVHpmLI3Z9OvY",
  authDomain: "sp19bsec.firebaseapp.com",
  databaseURL: "https://sp19bsec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sp19bsec",
  storageBucket: "sp19bsec.appspot.com",
  messagingSenderId: "557840508073",
  appId: "1:557840508073:web:c751ad19acb6fe1730f5b8",
  measurementId: "G-56Z1T5YS4X",
  databaseURL: "https://sp19bsec-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });



  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;
