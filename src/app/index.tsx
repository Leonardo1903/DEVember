import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import DayListItem from "../components/DayListItem";

const days = [...Array(24)].map((val, i) => i + 1);

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
