// styles/styles.js
import { StyleSheet, Dimensions } from "react-native";

// Obtemos a largura da tela para tornar os botões responsivos
const { width } = Dimensions.get("window");

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
    // aqui inicia o styles de biblia
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: '#1',
        paddingVertical: 60,
    },
    topBarButton: {
        height: 50,
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, // Para bordas arredondadas
        backgroundColor: '#222', // Cor de fundo padrão
        borderWidth: 0, // Remova bordas pretas
    },
    activeButton: {
        backgroundColor: '#4CAF50', // Cor do botão ativo
        borderWidth: 0, // Garante que não haverá borda
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
        width: width * 0.8, // Responsivo: 90% da largura da tela
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
        width: 40, // Largura do botão
        height: 40, // Altura do botão
        margin: 5, // Espaçamento entre os botões
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        borderWidth: 2, // Borda visível
        borderColor: '#4CAF50', // Cor da borda
        borderRadius: 10, // Bordas arredondadas
        backgroundColor: '#000', // Fundo do botão
    },
    chapterNumber: {
        fontSize: 18, // Tamanho da fonte para torná-lo visível
        color: '#FFF', // Altere para uma cor visível, como branco ou preto
        textAlign: 'center', // Centraliza o texto dentro do botão
        fontWeight: 'bold', // Opcional, para destacar
    },
    verseText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    verseNumber: {
        fontWeight: 'bold',
    },
    highlightedVerse: {
        backgroundColor: '#333',
        padding: 5,
        borderRadius: 5,
    },
});
