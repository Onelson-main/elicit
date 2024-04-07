import { StyleSheet, TextProps, Text as Textt } from 'react-native'
import { colours, text } from '../core/style'

interface extraTextProps {
    bold?: boolean,
    center?: boolean
}
export default function Text(props: TextProps & extraTextProps) {
    return (
        <Textt style={[text.body, parseExtraStyle(props)]} {...props}>
            {props.children}
        </Textt >
    )
}

export function TitleText(props: TextProps & extraTextProps) {
    return (
        <Text  {...props} style={text.title}>
            {props.children}
        </Text>
    )
}

export function SubText(props: TextProps & extraTextProps) {
    return (
        <Textt style={[text.subtext, parseExtraStyle(props)]} {...props}>
            {props.children}
        </Textt >
    )
}

export function MinText(props: TextProps & extraTextProps) {
    return (
        <Textt style={[text.subtext, { fontSize: 8 }, parseExtraStyle(props)]} {...props}>
            {props.children}
        </Textt >
    )
}

const parseExtraStyle = (props: extraTextProps & TextProps) => {
    return StyleSheet.create({
        textStyle: {
            fontWeight: props.bold ? "bold" : "400",
            textAlign: props.center ? "center" : "left"
        }
    }).textStyle
}