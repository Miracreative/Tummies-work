import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
  active: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3EDDF",
    position: "relative",
  },
  title: {
    alignSelf: "center",
    marginBottom: 30,
    fontWeight: 500,
    textTransform: "uppercase",
    width: "70%",
    textAlign: "center",
    color: "#0C0300",
  },
  list: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: "#F3EDDF",
    width: "100%",
    // justifyContent: 'flex-start',
    position: "relative",
    justifyContent: "space-between",
  },
});

export default styled;
