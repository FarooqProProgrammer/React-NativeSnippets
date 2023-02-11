import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Stack: {
      screen: StackNavigator,
    },
  },
  {
    initialRouteName: 'Stack',
  }
);

const AppContainer = createAppContainer(DrawerNavigator);

const App = () => (
  <AppContainer />
);

export default App;
