import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { counterAdd, counterSubtract } from './store/actions';

import CounterComponent from './components/counter';

class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <CounterComponent />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.counterAddFunction()}><Text>INCREASE</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.counterSubtractFunction()}><Text>DECREASE</Text></TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {

  },
  buttonContainer: {

  },
});



const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    counterAddFunction: () => dispatch(counterAdd()),
    counterSubtractFunction: () => dispatch(counterSubtract()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);