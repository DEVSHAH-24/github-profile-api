import React from "react";
import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
  } from "react-native-web";
// REDUNDANT FILE!
function SearchBarFcn({username,setUserName}){
	const onChange = (e) =>{
		setUserName(e)
	}
	return(
		<View>
		<TextInput
			placeholder="Search"
			type="text"
			onChangeText={(event) => onChange(event)}
			
		/>
		</View>
	);
}

export default SearchBarFcn;
