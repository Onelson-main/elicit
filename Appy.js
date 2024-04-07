import "@expo/metro-runtime";
import "./global.css"
// import { NativeWindStyleSheet } from "nativewind";
import HomeScreen from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

// NativeWindStyleSheet?.setOutput?.({
//   default: "native",
// });

export default function App() {
  return (
    // <HomeScreen />
    <View className='flex-1 justify-center items-center bg-BACKGROUND'>
      <StatusBar style='auto' />
      <Text className='text-center mt-3 text-title font-bold text-FOREGROUND'>
        Reloading
      </Text>
     
      {/* Additional components goes here */}

    </View>

  );
}


const styles = StyleSheet.create({
  Base: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
