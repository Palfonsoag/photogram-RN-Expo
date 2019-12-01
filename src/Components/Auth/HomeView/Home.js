import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getFeedPublications } from "../../../Store/Actions/HomeActions";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getPublications();
  }
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Author")}>
          <Text>Author</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Text>Comments</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateTopProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  getPublications: () => {
    dispatch(getFeedPublications());
  }
});

export default connect(mapStateTopProps, mapDispatchToProps)(Home);
