import React from 'react'
import {Text,View,StyleSheet}from 'react-native'
import{createAppContainer} from 'react-navigation '
import{createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransactionScreen  from './screens/booktransations'
import SearchScreen from './screens/searchscreen'

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )

    }
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen},
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
