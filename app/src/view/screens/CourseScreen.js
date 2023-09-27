import {
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import React from 'react';

const CourseScreen = ({route}) => {
  const {data} = route.params;
  const BottomNavigationBar = () => {
    return (
      <View
        style={{
          height: 80,
          bottom: 0,
          zIndex: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            height: 60,
            width: 70,
            backgroundColor: '#FFEDEE',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Icon name="local-mall" style={{color: '#FF6670', fontSize: 25}} />
        </View>
        <View
          style={{
            height: 60,
            backgroundColor: '#6E8AFA',
            flex: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
            Buy Now
          </Text>
        </View>
      </View>
    );
  };

  const CourseContentList = ({content, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#E4E7F4'}}>
          {'0' + (index + 1)}
        </Text>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              fontWeight: '500',
              marginBottom: 5,
            }}>
            {'0' + content.time}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {' '}
            {content.title}
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#49CC96',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="play-arrow" style={{fontSize: 25, color: '#fff'}} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground
        source={data.image}
        style={{
          height: 400,
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <Image
          resizeMode="contain"
          source={require('../../assets/bestseller.png')}
          style={{width: 100, marginBottom: 10}}
        />

        <Text
          style={{color: 'black', fontSize: 25, fontWeight: 'bold', top: -35}}>
          Design thinking
        </Text>
        <View style={{top: -25, flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', marginRight: 5}}>
            <Icon
              name="people"
              size={25}
              style={{color: '#61688B', marginRight: 5}}
            />
            <Text style={{color: '#61688B', fontWeight: 'bold'}}>
              {data.students + 'k'}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="star"
              size={25}
              style={{color: '#61688B', marginRight: 5}}
            />
            <Text style={{color: '#61688B', fontWeight: 'bold'}}>
              {data.star + 'K'}
            </Text>
          </View>
        </View>
        <Text
          style={{fontSize: 25, fontWeight: 'bold', top: -10, color: 'black'}}>
          {'$' + data.price}
        </Text>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}>
        <Text
          style={{
            marginTop: 40,
            marginBottom: 20,
            marginHorizontal: 20,
            fontSize: 21,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Course Content
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default CourseScreen;