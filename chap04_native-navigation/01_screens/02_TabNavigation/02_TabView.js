import { Button, Text, View } from "react-native";


const TabView = ({router, navigation}) => {

    const StackPage = () => {
        navigation.navigate("StackComponent");
    }

    return (
        <View>
            <Text>
                새로운 화면
            </Text>
            <View>
                <Button title="Stack 이동" onPress={StackPage}/>
            </View>
        </View>
    )
}

export default TabView;