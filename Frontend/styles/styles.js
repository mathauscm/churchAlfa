// styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        zIndex: 10, // Garante que está acima da sidebar
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
        zIndex: 5, // Sidebar deve estar acima de outros componentes
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
        marginTop: 140,
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
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#111',
        paddingVertical: 50,
    },
    topBarButton: {
        height: 50,
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#222',
    },
    activeButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    topBarText: {
        color: 'white',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    searchBar: {
        backgroundColor: '#222',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    bookItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 5,
        width: '80%',  // Definindo a largura para 80%
        marginHorizontal: '10%', // Centraliza o item horizontalmente
    },
    
    bookName: {
        color: 'white',
        fontSize: 16,  // Ajuste o tamanho da fonte conforme necessário
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    chapterItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 5,
    },
    chapterNumber: {
        color: 'white',
    },
    verseText: {
        color: 'white',
        marginBottom: 10,
    },
    verseNumber: {
        fontWeight: 'bold',
    },
});
