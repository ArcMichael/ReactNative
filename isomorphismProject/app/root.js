import React from 'react';
import {
    Navigator,
    Text,
    View,
    Image,
    TouchableHighlight,
    StyleSheet
} from "react-native"
import { Provider } from 'react-redux';

import Swiper from 'react-native-swiper';

import store from './store/configureStore';

import Home from "./containers/Home"

export default class Root extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {

        return (
            <Provider store={ store } key="SOA">
                <View>
                    <Swiper style={styles.wrapper} loop>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
            </Provider>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


