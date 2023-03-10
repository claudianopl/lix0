import styled from 'styled-components/native'
import { SafeAreaView as CustomSafeAreaView } from 'react-native-safe-area-context'

export const SafeAreaViewContainer = styled(CustomSafeAreaView)`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  padding: 16px;
`
