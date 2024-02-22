import styled from 'styled-components';
import userConfig from '../../../config';

const Wrapper = styled.div`
  border: 5px solid ${userConfig.primaryColor};
  border-radius: 50%;
  height: 150px;
  margin: 0 auto 15px auto;
  overflow: hidden;
  width: 150px;

  img {
    padding: 5px;
    margin-top: 25px;
  }
`;

export default Wrapper;