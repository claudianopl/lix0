import styled from 'styled-components/native'

interface CircleProps {
  type: 'Descarte' | 'Tratamento' | 'Quiz' | string
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 8px;
  background: transparent;
  border-radius: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.gray_200};
`

export const Circle = styled.View<CircleProps>`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  margin-right: 8px;
  background-color: ${({ theme, type }) =>
    type === 'Tratamento'
      ? '#35A640'
      : type === 'Quiz'
      ? '#B83FCC'
      : '#5079E1'};
`
export const CircleContainer = styled.View`
  position: relative;
`

export const Content = styled.View`
  flex: 1;
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
`
