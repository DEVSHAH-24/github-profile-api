import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  //search
  container: {
    alignItems: "center",
    paddingHorizontal: 5,
    flex: 1,
  },
  searchLogout: {
    flexDirection: "row",
    alignItems: "space-between",
    padding: 10,
    alignContent: "space-between",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
    color: "green",
  }, //
  stretch: {
    //user info card
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },
  userContainer: {
    alignItems: "center",
    padding: 35,
  },
  subheadingTextStyle: {
    fontSize: 15,
    fontWeight: "400",
    paddingVertical: 5, //
  },
  itemTextStyle: {
    fontSize: 16,
    fontWeight: "700",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#ddd8e6",
    borderRadius: 25,
  },
  mutedText: {
    fontWeight: "bold",
    color: "grey",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 5,
    height: 30,
  },
  button: {
    backgroundColor: "#000ffa",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "80%",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  buttonOutline: {
    marginTop: 2,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    alignItems: "center",
  },
  loginScreenContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
