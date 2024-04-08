import "@expo/metro-runtime";
import "./global.css"
import HomeScreen from "./src/screens/Home";
import Collection from "./src/screens/Collection";
import ProfileScreen from "./src/screens/Profile";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { colours } from "./src/core/style";
import { Image, TouchableOpacity, View } from "react-native";
import Text, { MinText } from "./src/components/Text";

import { navigationRef, navigate } from './src/core/rootNavigation';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Inria Sans': require('./assets/fonts/InriaSans-Regular.ttf'),
    'Inria Sans Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerTitle: () => (null),
          headerLeft: () => (<Logo />),
          headerRight: () => (<Profile />)
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = () => (
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
)


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
  <TouchableOpacity className="flex flex-column items-center mr-5" onPress={() => navigate("Profile")}>
    <Ionicons name={'person'} size={24} color={colours.PRIMARY} />
    <MinText bold>Jungwon</MinText>
  </TouchableOpacity>
)