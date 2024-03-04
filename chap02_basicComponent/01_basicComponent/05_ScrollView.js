import { Children } from "react"
import { ScrollView } from "react-native"

// 자식 컨텐츠를 스크롤할 때마다 렌더링한다. 수량이 적으면 이게 더 낫지만 많다면 flatList가 더 낫다.
const ScrollViewComponent = ({children}) => {

    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

export default ScrollViewComponent;