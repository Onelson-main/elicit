import { TextProps } from "react-native"

export const colours = {
    FOREGROUND: "#20454B",
    BACKGROUND: "#F8F8F7",
    BACKGROUND_2: "#FFFFFF",
    NEUTRAL: "#EFEEED",
    NEUTRAL_2:"#BDCACC",
    SECONDARY: "#88BAC1",
    PRIMARY:"#13717C"
    // SECONDARY: "",
}

export const sizes = {
    BORDER_RADIUS: 15,
    S_1: 5,
    S_2: 10,
    S_3: 15,
}


export const text = {
    title: {
        fontFamily:"Inria Sans",
        fontSize: 32,
        lineSpacing: 35,
        color: colours.FOREGROUND,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:15,
    } as TextProps["style"],
    body: {
        fontFamily:"Inria Sans",
        fontSize: 16,
        lineSpacing: 23,
        color: colours.FOREGROUND,
    } as TextProps["style"],
    subtext: {
        fontFamily:"Inria Sans",
        fontSize: 12,
        lineSpacing: 23,
        color: colours.FOREGROUND,
    } as TextProps["style"],
}