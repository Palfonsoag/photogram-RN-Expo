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
    console.log(this.props.session);
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
        console.log(JSON.parse(JSON.stringify(user)));
        dispatch(sessionCheckAction(JSON.parse(JSON.stringify(user))));
      } else {
        console.log("No existe sesion");
        dispatch(logoutAction());
      }
    });
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(RoutesDispatcher);
