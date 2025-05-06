import { View, StyleSheet, Text } from "react-native";
import MapView, { Region } from "react-native-maps";
import { useMemo, useState } from "react";
import { Stack } from "expo-router";
import Apartments from "@assets/data/apartments.json";
import CustomMarker from "@/components/CustomMarker";
import ApartmentListItem from "@/components/ApartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

type Apartment = (typeof Apartments)[0];

export default function Airbnb() {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  // BottomSheet snap points
  const snapPoints = useMemo(() => [80, "50%", "90%"], []);

  // Map region state
  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Map View */}
      <MapView style={styles.map} initialRegion={mapRegion}>
        {Apartments.map((apartment) => (
          <CustomMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>

      {/* Selected Apartment */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={styles.selectedContainer}
        />
      )}

      {/* Bottom Sheet */}
      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.listTitle}>Over {Apartments.length} places</Text>
          <BottomSheetFlatList
            data={Apartments}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
            renderItem={({ item }) => (
              <ApartmentListItem
                apartment={item}
                onPress={() => setSelectedApartment(item)}
              />
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  bottomSheetContent: {
    flex: 1,
  },
  flatListContent: {
    gap: 10,
    padding: 10,
  },
});