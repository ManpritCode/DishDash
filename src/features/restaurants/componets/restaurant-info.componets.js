import React from "react";
import { Text, View, Image,Platform } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../componets/spacer/spacer.componets";

const RestuarantCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space[3]};

`;
const RestuarantCardCover = styled(Card.Cover)`
  color: ${(props) => props.theme.colors.bg.primary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.sizes[1]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.sizes[1]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  
`;
const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex:1
`;
const RatingRow = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Restaurant ",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674825837.jpg?fit=around|562.5:360&crop=562.5:360;*,*",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestuarantCard elevation={4}>
      <RestuarantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <RatingRow>
            {ratingArray.map((item ,index) => (
              <SvgXml  key={index} xml={star} width={20} height={20} />
            ))}
          </RatingRow>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error"  style={{ color: "red",fontSize:Platform.OS === "ios"? "10%" :15,alignSelf:"center"}}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestuarantCard>
  );
};
