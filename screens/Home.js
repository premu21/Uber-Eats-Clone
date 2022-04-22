import { ScrollView, SafeAreaView, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestaurantItems from '../components/Home/RestaurantItems'

const YELP_API_KEY =
  "uw2k7gIC-6VMnnBizKzYQf_xMgUlWa7DkZkfFB-hTw5jHLMuivN3AdHDwADeLCkeZV44pkS6PP4KwvGdWSzgOYgCUFK8eex13xJS35UvFexLEkF6VGnXG7_QxxZhYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRestaurantsFromYelp = () => {
    setLoading(true);
    const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Hollywood";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
    return fetch(yelpURL, apiOptions)
      .then(res => res.json())
      .then(json => {
        setRestaurantData(json.businesses)
      });
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [restaurantData])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {typeof(restaurantData) != undefined ? <RestaurantItems restaurantData={restaurantData} /> : <Text>Loading</Text>}
      </ScrollView>
    </SafeAreaView>
  )
}

