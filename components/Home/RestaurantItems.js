import { Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons"

export default function RestaurantItems(props) {
  const { restaurantData } = props;
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, key) => (
        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  )
}

const RestaurantImage = (props) => {
  console.log(props);
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  )
}

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-40 · min</Text>
    </View>
    <View
      style={{
        backgroundColor: "white",
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15
      }}
    >
      <Text>{props.rating}</Text></View>
  </View>
)