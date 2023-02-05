import styled from 'styled-components';

const Text = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.lightCyan};
  line-height: 33px;
  margin-top: 20px;
`;

export default Text;