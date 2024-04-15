import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
  name: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3EDDF",
    position: "relative",
  },
  back: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    width: "100%",
    height: 350,
    flex: 1,
  },
  backImg: {
    width: "100%",
    flex: 1,
    objectFit: "cover",
  },
 
  title: {
    alignSelf: "center",
    marginBottom: 15,
    fontWeight: 500,
    textTransform: "uppercase",
    width: "70%",
    textAlign: "center",
    color: "#0C0300",
  },
  descr: {
    textAlign: "center",
    fontWeight: 300,
    width: "50%",
  },
  text: {
    color: "rgba(12, 3, 0, 1)",
    textAlign: "center",
    fontWeight: 500,
    marginBottom: 15,
    // marginTop: 15,
  },
  icon: {
    // objectFit: 'contain',
    width: "30%",
    alignSelf: "center",
    marginBottom: 20,
    // width: 42%,
  },
  input: {
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    borderRadius: 20,
    borderColor: "rgba(12, 3, 0, 0.50)",
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
    padding: 15,
    marginBottom: 20,
    display: 'flex'
  },
  input_name: {
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    borderRadius: 20,
    borderColor: "rgba(12, 3, 0, 0.50)",
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
    padding: 0,
    marginBottom: 20,
    overflow: "hidden",
  },
  block: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // background-color: green,
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 2,
    right: 22,
    width: 50,
    height: 50,
  },
  iconCalendar: {
    width: 50,
    height: 50,
    objectFit: "contain",
    // flex: 1,
  },
  picker: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    right: 0,
    zIndex: 5,
    backgroundColor: "#F3EDDF",
  },

  container: {
    flex: 1,
    backgroundColor: "#F3EDDF",
    width: "100%",
    position: "relative",
    justifyContent: "space-between",
  },
});

export default styled;
