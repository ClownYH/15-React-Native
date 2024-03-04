import { SafeAreaView, StyleSheet } from "react-native"


const SafeAreaViewComponent = ({children, isDark}) => { // 상단 베젤을 보호

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: isDark? "black" : "white"}]}>
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaViewComponent;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})