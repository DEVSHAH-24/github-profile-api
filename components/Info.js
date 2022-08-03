import React from "react";
import { Text } from "react-native";
import { View } from "react-native-web";

function UserInfoCard({ userData }) {
    return (
      <View>
        <Text>{userData.name}</Text>
        <Text>{userData.login}</Text>
        
        <Text>{userData.name}</Text>
      </View> 
    );
}
  
export default UserInfoCard;