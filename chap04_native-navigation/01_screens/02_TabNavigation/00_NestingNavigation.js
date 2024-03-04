import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabHome from "./01_TabHome";
import TabView from "./02_TabView";
import {Ionicons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const NestingNavigation = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={TabHome}
                options={{
                    tabBarIcon:({focued}) => focued? (<Ionicons name="home" size={30} color="red"/>) : (<Ionicons name="home" size={30} color="black"/>),
                    tabBarBadge:3
                }}
            />
            <Tab.Screen
                name="rootPage"
                component={TabView}
                options={{
                    tabBarIcon:({focued}) => focued? (<Ionicons name="eye-outline" size={30} color="red"/>) : (<Ionicons name="eye-outline" size={30} color="black"/>)
                }}
            />
        </Tab.Navigator>
    )
}

export default NestingNavigation;