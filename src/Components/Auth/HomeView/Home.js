import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import Publication from "../PublicationView/Publication";
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
    console.log(this.props.feed);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.feed}
          renderItem={({ item }) => <Publication item={item} />}
        />
        {/*
        <TouchableOpacity onPress={() => navigation.navigate("Author")}>
          <Text>Author</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Text>Comments</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24
  }
});

const mapStateTopProps = state => {
  return { feed: state.homeFeed.feed };
};

const mapDispatchToProps = dispatch => ({
  getPublications: () => {
    dispatch(getFeedPublications());
  }
});

export default connect(mapStateTopProps, mapDispatchToProps)(Home);
