'use client';

import styled from 'styled-components';
import metorialLogo from '../assets/metorial-full.svg';
import ycLogo from '../assets/yc-full.svg';
import { Box } from '../components/box';
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

        <Box title="Hello world this is a test">
          <p>
            I'm baby viral Brooklyn mustache sus. Fixie ascot plaid listicle, fit actually
            vinyl disrupt hella kale chips narwhal echo park gatekeep Brooklyn. Gochujang
            hexagon tofu, narwhal selvage praxis taiyaki try-hard stumptown godard. Edison bulb
            austin hoodie slow-carb XOXO flexitarian synth biodiesel cardigan JOMO. JOMO vinyl
            mumblecore direct trade four dollar toast man braid ugh viral cornhole palo santo
            keytar cronut church-key cupping mukbang.
          </p>

          <p>
            Chicharrones gatekeep godard you probably haven't heard of them cray. Drinking
            vinegar neutral milk hotel mumblecore lomo, semiotics kitsch pork belly taxidermy
            fit pop-up tacos tbh cronut. 3 wolf moon polaroid la croix sriracha taxidermy.
            Narwhal kale chips pickled migas roof party you probably haven't heard of them
            thundercats tousled poutine kitsch shoreditch kinfolk. Tilde kale chips twee,
            cold-pressed keytar deep v fanny pack paleo fingerstache.
          </p>
        </Box>

        <Box title="Organized by Metorial">
          <p>
            I'm baby viral Brooklyn mustache sus. Fixie ascot plaid listicle, fit actually
            vinyl disrupt hella kale chips narwhal echo park gatekeep Brooklyn. Gochujang
            hexagon tofu, narwhal selvage praxis taiyaki try-hard stumptown godard. Edison bulb
            austin hoodie slow-carb XOXO flexitarian synth biodiesel cardigan JOMO. JOMO vinyl
            mumblecore direct trade four dollar toast man braid ugh viral cornhole palo santo
            keytar cronut church-key cupping mukbang.
          </p>

          <p>
            Chicharrones gatekeep godard you probably haven't heard of them cray. Drinking
            vinegar neutral milk hotel mumblecore lomo, semiotics kitsch pork belly taxidermy
            fit pop-up tacos tbh cronut. 3 wolf moon polaroid la croix sriracha taxidermy.
            Narwhal kale chips pickled migas roof party you probably haven't heard of them
            thundercats tousled poutine kitsch shoreditch kinfolk. Tilde kale chips twee,
            cold-pressed keytar deep v fanny pack paleo fingerstache.
          </p>
        </Box>

        <Footer />
      </Page>
    </>
  );
};
