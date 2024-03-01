import styled from 'styled-components';
import Background from './simple-pattern.jpg';
import userConfig from '../../../config'

const HeaderWrapper = styled.header`
  text-align: center;

  .rounded {
    border-radius: 8px;
  }

  a {
    color: #212529 !important;
  }

  .name-box {
    background: ${userConfig.primaryColor};
    text-align: center;
    font-size: 30px;
    position: relative;
    display: inline-block;
    z-index: 100;
    margin-bottom: 20px;
  }

  .background-banner {
    padding: 50px 0 0 0;
    background-image: url(${Background});
    margin-bottom: -40px;
}
`;

export default HeaderWrapper;