import {
  View,
  Text,
  TextInput,
  FlatList,
  ImageBackground,
  Dimensions,
  // useWindowDimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import courses from '../../const/courses';
import {TouchableOpacity} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HomeScreen({navigation}) {
  const CourseCard = ({course}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CourseScreen', {data: course})}>
        <ImageBackground
          source={course.image}
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 50,
            width: windowWidth / 2 - 30,
            height: windowHeight / 3,
            overflow: 'hidden',
            paddingTop: 25,
            paddingLeft: 20,
            borderRadius: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              paddingBottom: 5,
              color: 'black',
            }}>
            {course.name}
          </Text>
          <Text style={{color: 'black', fontWeight: '600'}}>
            {course.totalCourse + ' Course'}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View>
        <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
          hey muavia
        </Text>
        <Text style={{fontSize: 18, color: '#61688B', marginTop: 15}}>
          Find a course you want to learn
        </Text>
        <View
          style={{
            height: 60,
            marginTop: 35,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            backgroundColor: '#D9D9D9',
            borderRadius: 30,
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="search" size={30} color="black" />
          <TextInput
            placeholder="search for anything"
            style={{fontSize: 18, marginLeft: 5, color: '#0E0E0E'}}
          />
        </View>
        <View
          style={{
            paddingVertical: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Categories
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6E8AFA'}}>
            see all
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
