import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import SearchBarFcn from './components/SearchBar';
import Main from './components/FetchComponent';
import UserInfoCard from './components/Info';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClzkXRH_mOI-WyKvF7h3cSyQ-CLutaI7c",
//   authDomain: "github-api-66ce7.firebaseapp.com",
//   projectId: "github-api-66ce7",
//   storageBucket: "github-api-66ce7.appspot.com",
//   messagingSenderId: "708508000411",
//   appId: "1:708508000411:web:47c652ef87701f9289e63e"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Main>
        <UserInfoCard/>
      </Main>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
