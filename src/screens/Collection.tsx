import { View, Image } from "react-native";
import Text, { TitleText } from "../components/Text";
// @ts-ignore
import clipboard from "../../assets/clipboard.png"
import Button from "../components/Button";

export default function Collection() {
    return (
        <View className='flex-1 items-center bg-BACKGROUND'>
            <TitleText className="mt-7">Collection</TitleText>
            <View className="items-center rounded w-4/5 max-w-xl p-3 bg-BACKGROUND_2 border-NEUTRAL border-[1px]">
                <Image source={require('../../assets/clipboard.png')}
                    style={{ height: 250, width: 250 }}
                />

                <TitleText className="text-SECONDARY"> Ooops..</TitleText>
                <Text >Your collection is empty</Text>
                <Text bold className="mb-3">Let's rectify that</Text>
                <Button title="Upload Papers" iconName="share-outline" />
                <Button title="Connect Zotero" iconName="link-outline" secondary />
            </View>

        </View>
    )
}