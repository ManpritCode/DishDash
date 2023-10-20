import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../componets/restaurant-info.componets";
import styled from "styled-components/native";
import { SafeArea } from "../../../componets/utility/safe-area.componets";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestuarentListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestuarantsScreen = () => (
  <>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestuarentListContainer
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
        { name: 15 },
      ]}
      renderItem={() => <RestuarantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </>
);
