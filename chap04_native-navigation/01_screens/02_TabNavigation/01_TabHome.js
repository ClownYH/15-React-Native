import { StyleSheet, Text, View } from "react-native"


const TabHome = () => {

    return (
        <View style={styles.rootContainer}>
            <Text>
                Tab home
            </Text>
        </View>
    )
}

export default TabHome;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})