import { NativeWindStyleSheet } from 'nativewind';

import { Text, View} from 'react-native';


const Footer = () => {
    NativeWindStyleSheet.setOutput({
        default: "native",
    });

    return (
        // In Progress
        <View className="
            w-full 
            absolute 
            bottom-0 
            bg-white 
            p-5 flex
            items-center
            justify-center
        ">
            <Text className='text-gray-300'>Copyrights Preserved © {new Date().getFullYear()} Yale Clubs</Text>
        </View>
    );
}

export default Footer;