import * as S from './Screen.styles';

export default function Screen({children, ...props}) {
  return <S.Screen {...props}>{children}</S.Screen>
}