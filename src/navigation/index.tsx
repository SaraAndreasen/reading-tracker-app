import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MyGoals } from "./goals/Goals";
import { MyStats } from "./stats/Stats";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BookSearchScreen } from "../books/bookOverview";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export function MainNavigation() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#EBDF73",
          tabBarInactiveTintColor: "#B8B27F",
          tabBarStyle: { backgroundColor: "#33311A" },
        }}
      >
        <Tab.Screen
          name="Books"
          component={BookSearchScreen}
          options={{
            headerTitle: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"book"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Goals"
          component={MyGoals}
          options={{
            headerTitle: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"trophy"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={MyStats}
          options={{
            headerTitle: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"stats-chart"} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
