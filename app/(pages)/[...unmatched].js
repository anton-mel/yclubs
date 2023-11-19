import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthWrapper from "../../components/AuthWrapper";
import { NativeWindStyleSheet } from "nativewind";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Unmatched = () => {
    NativeWindStyleSheet.setOutput({
        default: 'native',
    });

    return (
        <SafeAreaView className="w-ful">
            <AuthWrapper>
                <Header />
            </AuthWrapper>
            <View className="flex-col w-full min-h-screen justify-center items-center">
                <Text className="text-4xl font-semibold">Page not found</Text>
                <Text className='mt-2'>If you think this is an error, please <Pressable className='text-sky-500'>let us know</Pressable> and we will take a look.</Text>
            </View>
            <Footer />
        </SafeAreaView>
    );
}

export default Unmatched;