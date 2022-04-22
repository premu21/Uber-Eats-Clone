import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}


const HeaderButton = (props) =>
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30
    }}
    onPress={() =>
      props.setActiveTab(props.text)
    }
  >
    <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontWeight: "900", fontSize: 15 }}>{props.text}</Text>
  </TouchableOpacity>
