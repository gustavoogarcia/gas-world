import styled from 'styled-components';

export const Screen = styled.div`
  background: lightgray;
  width: ${({x}) => x}px;
  height: ${({y}) => y}px;
  position: relative;
`