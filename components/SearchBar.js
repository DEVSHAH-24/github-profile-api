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
  
function SearchBar({username, setUsername}){
	const onChange = (e) =>{
		setUsername(e.target.value)
	}
	return(
		<View>
		<TextInput
			placeholder="Search"
			type="text"
			onChangeText={(event) => {onChange(event)}}
			onKeyUp={(event) => {onChange(event)}}
			onPaste={(event) => {onChange(event)}}
		/>
		</View>
	);
}

export default SearchBar;
