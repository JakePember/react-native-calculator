import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { Constants } from 'expo'
import FullScreenCalculatorScreen from './calculator-container'

export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          {/*<View style={styles.statusBar} />*/}
          <FullScreenCalculatorScreen/>
        </View>
    )
  }
}

// const styles = StyleSheet.create({
//   statusBar: {
//     backgroundColor: '#ff8d00',
//     height: Constants.statusBarHeight
//   }
// })