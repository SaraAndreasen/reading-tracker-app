import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { GlobalButton } from "../../assets/components/button";
import { Loader } from "../../assets/components/loader";

interface Book {
  key: string;
  title: string;
  cover_i?: number;
  author_name: string;
}

export function BookSearchScreen() {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  const searchBooks = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `http://openlibrary.org/search.json?q=${query}`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter book title"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <GlobalButton title="Search" onPress={searchBooks} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            {item.cover_i ? (
              <Image
                style={styles.bookCover}
                source={{
                  uri: `http://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`,
                }}
              />
            ) : (
              <Loader size={20} color="#3498db" />
            )}
            <Text>{item.title}</Text>
            <Text>{item.author_name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  bookItem: {
    marginVertical: 8,
    alignItems: "center",
  },
  bookCover: {
    width: 100,
    height: 150,
    marginBottom: 8,
  },
});
