import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../componets/restaurant-info.componets";
import styled from "styled-components/native";
import { RestuarantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestuarentListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestuarantsScreen = () => {
  const { restuarants, isLoading, error } = useContext(RestuarantsContext);
  return (
    <>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestuarentListContainer
        data={restuarants}
        renderItem={({item}) =>{ 
         return (
          <RestuarantInfoCard  restuarant={item}/>
        )}
      }
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
};
