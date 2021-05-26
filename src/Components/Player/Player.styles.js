import styled from 'styled-components';

export const Player = styled.div`
  position: absolute;
  background: red;
  width: 20px;
  height: 20px;
  top: ${({y}) => y}px;
  left: ${({x}) => x}px;
`