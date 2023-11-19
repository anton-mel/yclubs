
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { Defs, LinearGradient, Stop, Svg } from "react-native-svg";

import { View, Text, Pressable } from "react-native";
import Logo from "../assets/logo";
import ModesSVG from "../assets/modes";
import Menu from "./Menu";


const Header = () => {
    const navigation = useRouter();
    const [openMenu, setOpenMenu] = useState(false);

    NativeWindStyleSheet.setOutput({
        default: "native",
    });
    
    return (
        <View className="w-full flex-row absolute z-10 justify-between bg-white py-5 px-[110px]">
            <Pressable className="flex-row items-center" onPress={() => navigation.push(`/`)}>
                <Logo/>
                <Text selectable={false} className="ml-5 font-semibold text-[16px]">Yale Clubs</Text>
            </Pressable>
            <View className="flex-row items-center">
                <View className="mr-10 flex-row items-center gap-x-11">
                    <Pressable onPress={() => navigation.push(`/`)}>
                        <Text selectable={false} className="text-[15px]">Catalog</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.push(`/worksheet`)}>
                        <Text selectable={false} className="text-[15px]">Worksheet</Text>
                    </Pressable>
                    <View>
                        <ModesSVG/>
                    </View>
                </View>
                <View>
                    <View 
                        className={`
                        group-isolate 
                        w-[40px]
                        rounded-[9px]`}
                    >

                        <Pressable 
                            onPress={() => setOpenMenu(!openMenu)}
                        >
                            <Svg width="100%" height="40" className="rounded-md">
                                <Defs>
                                    <LinearGradient id="userGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <Stop offset="0%" style={{ stopColor: "#EFBFFF", stopOpacity: 1 }} />
                                        <Stop offset="100%" style={{ stopColor: "#5897FF", stopOpacity: 1 }} />
                                    </LinearGradient>
                                </Defs>
                                <rect width="100%" height="40" fill="url(#userGradient)" />
                            </Svg>
                        </Pressable>

                        {openMenu && (<Menu 
                            navigation={navigation} 
                        />)}

                    </View>
                </View>
            </View>
        </View>
    );
}

export default Header;