import styled from 'styled-components';

export const Fruit = styled.div`
  position: absolute;
  background: green;
  width: 20px;
  height: 20px;
  top: ${({y}) => y}px;
  left: ${({x}) => x}px;
`