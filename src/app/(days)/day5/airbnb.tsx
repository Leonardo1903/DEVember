import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";
import { useMemo, useState } from "react";
import { Stack } from "expo-router";
import Apartments from "@assets/data/apartments.json";
import CustomMarker from "@/components/CustomMarker";
import ApartmentListItem from "@/components/ApartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

type Apartment = (typeof Apartments)[0];

export default function airbnb() {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  // variables
  const snapPoints = useMemo(() => [80, "50%", "90%"], []);

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} initialRegion={mapRegion}>
        {Apartments.map((apartment) => (
          <CustomMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>

      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={styles.selectedContainer}
        />
      )}

      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {Apartments.length} places</Text>
          <BottomSheetFlatList
            data={Apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterSemiBold",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
  selectedContainer: {
    position: "absolute",
    bottom: 100,
    right: 10,
    left: 10,
  },
});
