globalThis.__DEV__ = true;

console.log('App.js carregado com sucesso!');

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

// Criação do Tab Navigator
const Tab = createBottomTabNavigator();

// Tela principal com a barra lateral e feed de notícias do Instagram
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
      {/* Imagem no topo esquerdo */}
      <Image
        source={require('./imagens/logoprincipal.jpg')}
        style={styles.logo}
      />

      {/* Botão de menu no topo direito */}
      <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Barra lateral direita */}
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

      {/* Conteúdo central: Feed do Instagram */}
      {loading ? (
        <Text style={styles.loading}>Carregando feed...</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.post,
                index === 0 && styles.firstPost, // Estilo específico para o primeiro post
              ]}
            >
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

// Tela da Bíblia
function BibliaScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Tela da Bíblia</Text>
    </View>
  );
}

// Tela do Devocional
function DevocionalScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Tela do Devocional</Text>
    </View>
  );
}

// Configuração do App
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Menu') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Bíblia') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Devocional') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#000',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Menu" component={HomeScreen} />
        <Tab.Screen name="Bíblia" component={BibliaScreen} />
        <Tab.Screen name="Devocional" component={DevocionalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 40,
    left: 10,
    width: 80,
    height: 80,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  menuText: {
    color: 'white',
    fontSize: 20,
  },
  sidebar: {
    position: 'absolute',
    top: 80,
    right: 0,
    width: 200,
    height: 180,
    backgroundColor: '#333',
    padding: 10,
  },
  sidebarItem: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  sidebarText: {
    color: 'white',
    fontSize: 18,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
  post: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  firstPost: {
    marginTop: 140, // Aumentado para baixar ainda mais a primeira imagem
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  caption: {
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
  },
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
