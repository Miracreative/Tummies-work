import {View, SafeAreaView, Text} from 'react-native';
import styled from './style.scss';

export default function Spinner({active=false}) {
    return (
        <View style={active ? [styled.spinner, styled.active] : styled.spinner}>
            <SafeAreaView>
                <View style={styled.loader}></View>
            </SafeAreaView>
        </View>
    )
}