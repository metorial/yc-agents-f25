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

let HostLabel = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  height: 60px; /* match logo height */
  line-height: 60px;
  font-weight: 500;
  font-size: 28px;

  @media (max-width: 768px) {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
`;

let ApplyButton = styled.a`
  display: inline-block;
  background: white;
  color: black;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 48px rgba(255, 255, 255, 0.5);
    color: black;
    text-decoration: none;
  }

  &:active {
    transform: translateY(0px) scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 20px;
    margin: 30px 0;
  }
`;

let FloatingApplyButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: white;
  color: black;
  padding: 16px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 201, 0, 0.4);
  z-index: 1000;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 12px 48px rgba(0, 201, 0, 0.6);
    color: black;
    text-decoration: none;
  }

  &:active {
    transform: translateY(0px) scale(0.95);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 14px 20px;
    font-size: 14px;
  }
`;

let Apply = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 0px 80px 0px;
`;

let ApplyExtra = styled.p`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
`;

export default () => {
  return (
    <>
      <Page>
        <HeaderTitle>YC Agent Jam '25</HeaderTitle>

        <HeaderSubtitle>
          <span>Nov 1st–2nd, 2025</span>
          <br />
          <span>Y Combinator Office — San Francisco, California</span>
        </HeaderSubtitle>

        <Apply>
          <div>
            <ApplyButton href="/apply">Don't Miss Out - Apply Now</ApplyButton>
          </div>
          <ApplyExtra>
            Limited spots available • <u>Guaranteed YC interview</u> for winner
          </ApplyExtra>
        </Apply>

        <Logos>
          <HostLabel>Hosted by</HostLabel>
          <a href="https://www.metorial.com" target="_blank" rel="noreferrer">
            <img src={metorialLogo.src} alt="Metorial Logo" />
          </a>
          <a href="https://www.ycombinator.com" target="_blank" rel="noreferrer">
            <img src={ycLogo.src} alt="Y Combinator Logo" />
          </a>
        </Logos>

        <Box title="About the Event">
          <p>
            <strong>Metorial (YC F25)</strong> is hosting a 24-hour overnight hackathon at the{' '}
            <strong>Y Combinator Office</strong> in San Francisco - bringing together the most
            talented developers, builders, and future founders to push the limits of what AI
            agents can do.
          </p>

          <p>
            We're inviting the most <em>cracked</em> devs, top students, and industry engineers
            ready to start their own companies. Come build something insane, meet other
            founders, and compete for a chance to win a{' '}
            <strong>guaranteed YC interview</strong>.
          </p>

          <p>
            <strong>Andrew Miklas</strong>, YC Partner and co-founder of PagerDuty, will join
            us as a judge and at the closing ceremony to announce the winners and share
            insights from YC's founder community.
          </p>
        </Box>

        <Box title="About Metorial">
          <p>
            Metorial (YC F25) is the Vercel for MCP. We let developers connect their LLMs to
            external tools and data via MCP. You can deploy 600+ MCP servers in just three
            clicks and connect your LLMs to them in a single SDK call.
          </p>
          <br />
          <p>
            With Metorial, we solve the three biggest issues with deploying MCP at scale:
            speed, security, and scaling. Servers deploy in seconds without any infrastructure
            configuration. We have strong per-user isolation combined with OAuth. And our
            serverless infrastructure is the <strong>only one</strong> that supports
            hibernation and sub-second cold starts.
          </p>
          <br />
          <p>
            Learn more at{' '}
            <a href="https://www.metorial.com" target="_blank" rel="noreferrer">
              metorial.com
            </a>
            .
          </p>
        </Box>

        <Box title="Sponsors & Partners">
          <p>
            We're assembling a lineup of world-class sponsors to support builders and founders
            throughout the event. Sponsors will appear here as they're confirmed — stay tuned
            for updates.
          </p>
          <br />

          <p>
            Interested in sponsoring? Reach out at{' '}
            <a href="mailto:founders@metorial.com">founders@metorial.com</a>.
          </p>
        </Box>

        <div style={{ textAlign: 'center', margin: '80px 0 40px 0' }}>
          <ApplyButton href="/apply">Ready to Join? Apply Now</ApplyButton>
        </div>

        <Footer />
      </Page>

      <FloatingApplyButton href="/apply">🚀 Apply</FloatingApplyButton>
    </>
  );
};
