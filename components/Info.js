import React from "react";
import { StyleSheet,Text, Image } from "react-native";
import { View } from "react-native-web";

function UserInfoCard({ userData }) {
  return (
    <View>
      <View>
        <Text>{userData.name != 'undefined' ? "Name will appear here" : userData.name}</Text>
        <Text>{userData.login != 'undefined' ? "Login ID will appear here" : userData.login}</Text>

        
          {/* <Image
            style = {styles.stretch}
          
            source={{
              uri:
                
                   "https://reactnative.dev/img/tiny_logo.png",
            }}
          /> */}
        
        <Text>Public repos</Text>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50
  }
})
export default UserInfoCard;
