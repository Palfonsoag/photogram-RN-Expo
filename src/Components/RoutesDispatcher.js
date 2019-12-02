import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { authentication } from "../Store/Services/Firebase";
import NonAuthRoutes from "./NonAuth/NonAuthRoutes";
import TabNavigator from "./Auth/AuthRoutes";
import {
  sessionCheckAction,
  logoutAction
} from "../Store/Actions/LoginActions";
class RoutesDispatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.authentication();
  }
  render() {
    return (
      <View style={styles.container}>
        {!this.props.session.uid ? <NonAuthRoutes /> : <TabNavigator />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
const mapStateTopProps = state => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = dispatch => ({
  authentication: () => {
    authentication.onAuthStateChanged(user => {
      if (user) {
        dispatch(sessionCheckAction(JSON.parse(JSON.stringify(user))));
      } else {
        dispatch(logoutAction());
      }
    });
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(RoutesDispatcher);
