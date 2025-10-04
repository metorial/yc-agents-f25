'use client';

import styled from 'styled-components';
import metorialLogo from '../assets/metorial-full.svg';
import ycLogo from '../assets/yc-full.svg';
import { Footer } from '../components/footer';
import { Page } from '../components/page';

export const dynamic = 'force-static';

let HeaderTitle = styled.h1`
  font-size: 12em;
  font-weight: 500;

  @media (max-width: 1000px) {
    font-size: 4em;
    font-weight: 500;
  }
`;

let HeaderSubtitle = styled.h2`
  font-size: 1.4em;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.8em;
`;

let Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 100px;

  img {
    height: 60px;
  }

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 30px;
    margin-bottom: 50px;

    img {
      height: 40px;
    }
  }
`;

export default () => {
  return (
    <>
      <Page>
        <HeaderTitle>YC Agent Jam '25</HeaderTitle>

        <HeaderSubtitle>
          <span>Nov 1st & 2nd 2025</span>
          <br />
          <span>Y Combinator Office; San Francisco, California</span>
        </HeaderSubtitle>

        <Logos>
          <a href="https://www.ycombinator.com" target="_blank" rel="noreferrer">
            <img src={ycLogo.src} alt="Y Combinator Logo" />
          </a>
          <a href="https://www.metorial.com" target="_blank" rel="noreferrer">
            <img src={metorialLogo.src} alt="Metorial Logo" />
          </a>
        </Logos>

        <Footer />
      </Page>
    </>
  );
};
