import "@expo/metro-runtime";
import "./global.css"
import HomeScreen from "./src/screens/Home";
import Collection from "./src/screens/Collection";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { colours } from "./src/core/style";
import { Image, View } from "react-native";
import Text, { MinText } from "./src/components/Text";



const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Inria Sans': require('./assets/fonts/InriaSans-Regular.ttf'),
    'Inria Sans Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: (iconOptions) => (
          getIcon(route.name, iconOptions)
        ),
        tabBarActiveTintColor: colours.PRIMARY,
        tabBarInactiveTintColor: colours.NEUTRAL_2,
        headerTitle: () => (null),
        headerLeft: () => (<Logo />),
        headerRight: () => (<Profile />)
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: (options) => getIcon("Home", options) }} />
        <Tab.Screen name="Collection" component={Collection} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const getIcon = (name, { focused, color, size }) => {
  let iconName = "";
  switch (name) {
    case "Home":
      iconName = "search"
      break;
    case "Collection":
      iconName = "bookmarks"
      break;

    default:
      break;
  }
  if (!focused) {
    iconName += '-outline'
  }
  return <Ionicons name={iconName} size={size} color={color} />
}


const Logo = () => (
  <Image source={require('./assets/Elicit_logo.png')} style={{ width: 75, height: 20, marginLeft: 20 }} />
)

const Profile = () => (
  <View className="flex flex-column items-center mr-5">
    <Ionicons name={'person'} size={24} color={colours.PRIMARY}/>
    <MinText bold>Jungwon</MinText>
  </View>
)