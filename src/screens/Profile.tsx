import { View, Text as RNText, TouchableOpacity, ScrollView } from "react-native";
import Text, { TitleText } from "../components/Text";
// @ts-ignore
import clipboard from "../../assets/clipboard.png"
import Button from "../components/Button";

export default function Profile() {
    return (
        <ScrollView className='flex-1 items-stretch p-4 bg-BACKGROUND'>
            <TitleText style={{ textAlign: "left" }} className="mt-7 text-left">Account settings</TitleText>
            <View className="bg-BACKGROUND_2 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full mb-8">
                <View className="p-4 flex-row justify-between items-center border-NEUTRAL border-b-[1px]">
                    <Text bold>Personal details</Text>
                    <TouchableOpacity className="border-NEUTRAL border-[1px] p-2 px-4 rounded-md">Edit</TouchableOpacity>
                </View>
                <View className="p-4">
                    <Text bold>Email</Text>
                    <Text className="mb-4">jungwoon@yahoo.com</Text>
                    <Text bold>Display Name</Text>
                    <Text>Jungwoon</Text>
                </View>
            </View>

            <View className="bg-BACKGROUND_2 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full mb-8">
                <View className="p-4 border-NEUTRAL border-b-[1px]">
                    <Text bold>Credits & Usage</Text>
                    <Text className="my-2">Running workflows on Elicit costs credits. If you run out of credits you won’t be able to run workflows any more. To get more credits, upgrade to our Plus plan.
                    </Text>
                </View>
                <RNText className=" text-center text-xl font-medium">4,820 credits remaining</RNText>
                <View className="mx-auto">
                    <Button title="Get More" />
                </View>
            </View>

            <View className="bg-BACKGROUND_2 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full">
                <View className="p-4 border-NEUTRAL border-b-[1px]">
                    <Text bold>Integrations</Text>
                    <Text className="my-2">Connect Elicit to other applications</Text>
                </View>
                <View className="p-4 flex-row justify-between items-center">
                    <View className="flex-row flex-1">
                        <RNText className="text-red-800 text-4xl m-3">Z</RNText>
                        <View className="flex-1">
                            <Text bold>Zotero</Text>
                            <Text>import papers from your zotero Collections</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="border-NEUTRAL border-[1px] p-2 px-4 rounded-md">Connect</TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}