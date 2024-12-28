// screens/BibliaScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import { books, fetchVerses } from '../appbiblia';
import { styles } from '../styles/styles';

function BibliaScreen() {
    const [view, setView] = useState('book');
    const [selectedBook, setSelectedBook] = useState(null);
    const [chapter, setChapter] = useState(1);
    const [verses, setVerses] = useState([]);
    const [selectedVerse, setSelectedVerse] = useState(null); // Versículo selecionado
    const [search, setSearch] = useState(''); // Campo de busca

    const filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
    );

    const fetchAndSetVerses = async () => {
        try {
            if (selectedBook) {
                const data = await fetchVerses(selectedBook.name, chapter);
                setVerses(data);
            }
        } catch (error) {
            console.error('Erro ao buscar versículos:', error);
        }
    };

    useEffect(() => {
        fetchAndSetVerses();
    }, [selectedBook, chapter]);

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={[styles.topBarButton, view === 'book' && styles.activeButton]}
                    onPress={() => {
                        setView('book');
                        setSelectedVerse(null); // Reseta seleção de versículo ao voltar
                    }}>
                    <Text style={styles.topBarText}>Book</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.topBarButton, view === 'chapter' && styles.activeButton]}
                    onPress={() => {
                        setView('chapter');
                        setSelectedVerse(null); // Reseta seleção de versículo ao voltar
                    }}>
                    <Text style={styles.topBarText}>Chapter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.topBarButton, view === 'verse' && styles.activeButton]}
                    onPress={() => setView('verse')}>
                    <Text style={styles.topBarText}>Verse</Text>
                </TouchableOpacity>
            </View>

            {view === 'book' && (
                <View style={styles.content}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search Book"
                        placeholderTextColor="#aaa"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                    <FlatList
                        data={filteredBooks}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.bookItem,
                                    selectedBook?.name === item.name && styles.activeBook,
                                ]}
                                onPress={() => {
                                    setSelectedBook(item);
                                    setView('chapter');
                                }}>
                                <Text style={styles.bookName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {view === 'chapter' && selectedBook && (
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>
                        {selectedBook.name}: Capítulos
                    </Text>
                    <FlatList
                        data={Array.from({ length: selectedBook.chapters || 0 }, (_, i) => i + 1)}
                        numColumns={7}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.chapterItem,
                                    chapter === item && styles.activeChapter,
                                ]}
                                onPress={() => {
                                    setChapter(item);
                                    setView('verse');
                                }}>
                                <Text style={styles.chapterNumber}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {view === 'verse' && selectedBook && (
                <View style={styles.content}>
                    {!selectedVerse ? (
                        <>
                            <Text style={styles.sectionTitle}>
                                {selectedBook.name} - Capítulo {chapter}: Versículos
                            </Text>
                            <FlatList
                                data={verses}
                                numColumns={5}
                                keyExtractor={(item) => item.verse.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={[
                                            styles.chapterItem,
                                            selectedVerse === item.verse && styles.activeChapter,
                                        ]}
                                        onPress={() => setSelectedVerse(item.verse)}>
                                        <Text style={styles.chapterNumber}>{item.verse}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </>
                    ) : (
                        <ScrollView style={styles.verseContainer}>
                            <Text style={styles.sectionTitle}>
                                {selectedBook.name} - Capítulo {chapter}
                            </Text>
                            {verses.map((verse) => (
                                <Text
                                    key={verse.verse}
                                    style={[
                                        styles.verseText,
                                        selectedVerse === verse.verse && styles.highlightedVerse,
                                    ]}>
                                    <Text style={styles.verseNumber}>{verse.verse} </Text>
                                    {verse.text}
                                </Text>
                            ))}
                        </ScrollView>
                    )}
                </View>
            )}
        </View>
    );
}

export default BibliaScreen;
