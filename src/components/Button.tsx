import Ionicons from '@expo/vector-icons/Ionicons';
import Text from "../components/Text";
import { ButtonProps, TouchableOpacity, View } from "react-native";
import { colours } from '../core/style';

interface button_props {
    iconName?: keyof typeof Ionicons.glyphMap,
    title: string,
    secondary?: boolean,
}
export default function Button(props: button_props & ButtonProps) {
    let { title, iconName, secondary } = props
    return (
        <TouchableOpacity {...props} className={`p-4 px-8 m-2 rounded-xl flex-row items-center ${secondary ? 'bg-BACKGROUND border-[1px] border-NEUTRAL_2' : 'bg-PRIMARY'} active:bg-NEUTRAL`}>
            <Text style={{ fontWeight: "bold", color: secondary ?colours.PRIMARY:colours.BACKGROUND }}>{title}</Text>
            <Ionicons name={iconName} size={18} color={secondary ?colours.PRIMARY:colours.BACKGROUND}
                className='ml-2' />
        </TouchableOpacity>
    )
}