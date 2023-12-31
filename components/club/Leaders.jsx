import { NativeWindStyleSheet } from 'nativewind';

import { FlatList, Image, Text, View } from 'react-native';


const Leaders = ({leaders}) => {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  console.log(leaders);
  const displayLeader = (leader) => {
    return (
      <View className="mr-2 px-3 py-2 border-[1px] border-gray-100 rounded-md flex-row">
        <Image
          className='h-10 w-10 rounded-md bg-gray-100 mr-3'
          source={{ uri: leader?.image }}
        />
        <View className='flex-col justify-center'>
          <Text className='text-[15px] font-semibold'>
            {leader.first_name +" "+ leader.last_name}
            {leader.year && ("' " + String(leader.year).slice(-2))}
          </Text>
          <Text>{leader.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="mt-8">
        <Text className="font-bold text-2xl mb-3">Leaders</Text>
        <FlatList
            data={leaders}
            horizontal={true}
            scrollEnabled={true}
            renderItem={({ item }) => displayLeader(item)}
            keyExtractor={(item) => item.netid.toString()}
        />
    </View>
  );
}

export default Leaders;


