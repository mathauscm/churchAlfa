// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text, Linking } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/styles';

function HomeScreen() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                const response = await axios.get('http://192.168.2.12:5000/api/instagram');
                setPosts(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar feed:', error.message);
                setLoading(false);
            }
        };

        fetchInstagramFeed();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../imagens/logoprincipal.jpg')} style={styles.logo} />
            <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
                <Text style={styles.menuText}>☰</Text>
            </TouchableOpacity>
            {isSidebarVisible && (
                <View style={styles.sidebar}>
                    <TouchableOpacity style={styles.sidebarItem} onPress={toggleSidebar}>
                        <Text style={styles.sidebarText}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={toggleSidebar}>
                        <Text style={styles.sidebarText}>Sobre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={toggleSidebar}>
                        <Text style={styles.sidebarText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            )}
            {loading ? (
                <Text style={styles.loading}>Carregando feed...</Text>
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <View
                            style={[styles.post, index === 0 && styles.firstPost]}>
                            <Image source={{ uri: item.media_url }} style={styles.image} />
                            <Text style={styles.caption}>{item.caption}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(item.permalink)}>
                                <Text style={styles.link}>Ver no Instagram</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

export default HomeScreen;
