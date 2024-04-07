import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colours, text } from '../core/style';
import { MinText, SubText, TitleText } from '../components/Text';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

export default function HomeScreen() {
    const [showConcepts, setShowConcepts] = useState(false)

    return (
        <View className='flex-1 justify-between items-center bg-BACKGROUND'>
            <View className="flex-row justify-between w-4/5">
                <Image src="" />
            </View>
            <View className='w-4/5'>
                <TitleText>
                    Explore scientific literature
                </TitleText>
                <View className='border-2 border-NEUTRAL bg-BACKGROUND_2 rounded-3xl my-5 p-5 pb-1 w-full max-w-3xl mx-auto'>
                    <TextInput
                        placeholderTextColor={colours.NEUTRAL_2}
                        style={[text.body, { color: colours.FOREGROUND, marginBottom: 25 }]}
                        placeholder='Ask a research question'
                    />
                    <View className='flex-row justify-between'>
                        <TouchableOpacity className='flex-row items-center'>
                            <Ionicons name="share-outline" size={15} color={colours.FOREGROUND} />
                            <SubText bold className='ml-1'>Upload PDFs</SubText>
                        </TouchableOpacity>
                        <View className='flex-row items-center'>
                            <Ionicons className='' name={`checkbox${showConcepts ? "" : "-outline"}`}
                                size={15} color={colours.FOREGROUND}
                                onPress={() => setShowConcepts((mode) => !mode)}
                            />
                            <SubText bold className='ml-1 mr-3'>Concepts</SubText>
                            <TouchableOpacity>
                                <Ionicons className='' name="arrow-forward-circle" size={40} color={colours.SECONDARY} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <SubText center>Trending right now</SubText>
                <TouchableOpacity style={styles.trends}>
                    <MinText center>How does family size and upbringing affect cognition?</MinText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.trends}>
                    <MinText center>What are the evolutionary changes in gut microbiome?</MinText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.trends}>
                    <MinText center>What are the emotional factors influencing economic decisions in behavioral economics?</MinText>
                </TouchableOpacity>
            </View>
            <View></View>
        </View>
    )
}

// <Base>
//     <View className='flex flex-col justify-center'>
//         <Text className="font-[32]">Explore scientific literature</Text>
//         <Text className="text-white">Opken up App.js to start working on your apple!</Text>
//     </View>
// </Base>
const styles = StyleSheet.create({
    trends: {
        borderRadius: 15,
        borderColor: colours.FOREGROUND,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 10,
        maxWidth: "70%"
    },
})