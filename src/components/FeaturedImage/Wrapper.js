import styled from 'styled-components';
import userConfig from '../../../config';

const Wrapper = styled.div`
  margin: -65px -90px 50px;

  @media only screen and (max-width: ${userConfig.siteMaxWidth}) {
    margin: -65px -5px 50px;
  }
`;

export default Wrapper;