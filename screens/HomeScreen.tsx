import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver now!
            </Text>
            <View className="flex-row items-center ">
              <Text className="font-bold text-xl">Current Location </Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 px-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
