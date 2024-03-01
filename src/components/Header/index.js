import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import ContainerWrapper from './container-wrapper';

import HeaderWrapper from './header-wrapper';

function Header({ config }) {
  const { author, description, social } = config;

  return (
    <HeaderWrapper>
    <div className='background-banner'>
      {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        
        </div>
        <div className='rounded name-box'>
          <H1><Link to="/">{author}</Link></H1>
        </div>
    <Container>
      <ContainerWrapper>
        <P>{description}</P>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
      </ContainerWrapper>
      
    </Container> 
    </HeaderWrapper>
    
  );
}

export default Header;