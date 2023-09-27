import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/src/view/screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import CourseScreen from './app/src/view/screens/CourseScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
const stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{title: null, headerStyle: {elevation: 0}}}>
        <stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Icon
                name="sort"
                size={25}
                color="black"
                style={{marginLeft: 20}}
              />
            ),
            headerRight: () => (
              <Image
                style={{height: 40, width: 40, marginRight: 20}}
                source={require('./app/src/assets/person.png')}
              />
            ),
          }}></stack.Screen>
        <stack.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={({navigation}) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back-ios"
                  size={25}
                  color="black"
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Icon
                name="more-vert"
                size={25}
                color="black"
                style={{marginRight: 20}}
              />
            ),
          })}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
