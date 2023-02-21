import { Image } from 'react-native'
import React from 'react'
import {
  BuyButton,
  BuyButtonText,
  Container,
  CustomText,
  DescriptionContainer,
  FooterContainer,
  InformationsContainer,
  PhotoContainer,
  PriceContainer
} from './styles'
import { ICONS, IMAGES } from '../../assets'
import { theme } from '../../constants'

interface StoreScrollViewItemProps {
  isPercentage: boolean
  discount: number
  usedIn: string
  amountLeft: number
  price: number
  onPressFunction?: () => void
}

export const StoreScrollViewItem: React.FC<StoreScrollViewItemProps> = ({
  isPercentage,
  discount,
  usedIn,
  amountLeft,
  price,
  onPressFunction
}) => {
  return (
    <Container>
      <PhotoContainer source={IMAGES.logo} resizeMode="contain" />
      <DescriptionContainer>
        <InformationsContainer>
          <CustomText style={{ fontSize: 20 }}>
            {isPercentage ? `${discount}% OFF` : `R$${discount} OFF`}
          </CustomText>
          <CustomText>{usedIn}</CustomText>
          <CustomText>Quantidade: {amountLeft}</CustomText>
        </InformationsContainer>
        <FooterContainer>
          <PriceContainer>
            <CustomText style={{ color: theme.COLORS.primary_600 }}>
              {price}
            </CustomText>
            <Image source={ICONS.TrashBag} resizeMode="contain" />
          </PriceContainer>
          <BuyButton onPress={() => onPressFunction}>
            <BuyButtonText>EU QUERO</BuyButtonText>
          </BuyButton>
        </FooterContainer>
      </DescriptionContainer>
    </Container>
  )
}
