import { Button, Text, View } from "react-native";


const StackComponent=({route, navigation})=>{

    const page = ()=>{
        navigation.navigate("StackView");
    }

    const tabRouter = ()=>{
        navigation.navigate("NestingNavigation");
    }

    return(
        <View>
            <Text>
                Stack View 화면
            </Text>
            <Button onPress={page} title="이동"/>
            <Text>Tap 메뉴 이동</Text>
            <Button onPress={tabRouter} title="Tab 이동"/>
        </View>
    )
}

export default StackComponent;