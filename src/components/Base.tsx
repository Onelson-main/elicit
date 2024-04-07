import { View, ViewProps, StyleSheet } from "react-native";
import { colours } from "../core/style";

export default function Base(props: ViewProps) {
    return (
        <View {...props} style={styles.base}>
            {props.children}
        </View>
    )
}

let styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: colours.BACKGROUND
    }
})