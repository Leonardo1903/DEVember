import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import TinderCard from "@/components/TinderCard";
import {
  useAnimatedReaction,
  useSharedValue,
  runOnJS,
} from "react-native-reanimated";
const dummyUsers = [
  {
    id: 1,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg",
    name: "Dani",
  },
  {
    id: 2,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/2.jpg",
    name: "Jon",
  },
  {
    id: 3,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/3.jpg",
    name: "Jessie",
  },
  {
    id: 4,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg",
    name: "Alice",
  },
  {
    id: 5,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/5.jpg",
    name: "Megan",
  },
  {
    id: 6,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg",
    name: "Kelsey",
  },
];

export default function tinder() {
  const activeIndex = useSharedValue(0);
  const [users, setUsers] = useState(dummyUsers);
  const [index, setIndex] = useState(0);

  useAnimatedReaction(
    () => activeIndex.value,
    (value, preValue) => {
      if (value !== index) {
        runOnJS(setIndex)(Math.floor(value));
      }
    }
  );

  useEffect(() => {
    if (index > users.length - 2) {
      setUsers((users) => [...users, ...dummyUsers.reverse()]);
    }
  }, [index]);

  const onResponse = (res: boolean) => {
    console.log(res);
  };

  return (
    <>
      <View style={styles.screen}>
        <Stack.Screen options={{ headerShown: false }} />

        <Text style={{ top: 70, position: "absolute" }}>
          Current Index: {index}
        </Text>

        {users.map((user, index) => (
          <TinderCard
            key={`${user.id}-${index}`}
            user={user}
            numOfCards={users.length}
            index={index}
            activeIndex={activeIndex}
            onResponse={onResponse}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
