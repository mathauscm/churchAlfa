import React from 'react';
import { View, StyleSheet } from 'react-native';
import FeedInstagram from './FeedInstagram';

const App = () => {
    return (
        <View style={styles.container}>
            <FeedInstagram />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
});

export default App;
