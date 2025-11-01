'use client';

import { motion } from 'motion/react';
import styled from 'styled-components';
import metorialLogo from '../assets/metorial-full.svg';
import anthropicLogo from '../assets/sponsors/anthropic.png';
import audrionLogo from '../assets/sponsors/audrion.svg';
import captainLogo from '../assets/sponsors/captain.png';
import covalLogo from '../assets/sponsors/coval.png';
import morphllmLogo from '../assets/sponsors/morphllm.svg';
import naturalLogo from '../assets/sponsors/natural.png';
import nivaraLogo from '../assets/sponsors/nivara.png';
import openaiLogo from '../assets/sponsors/openai.png';
import puddleLogo from '../assets/sponsors/puddle.png';
import unsiloedLogo from '../assets/sponsors/unsiloed.png';
import vectusLogo from '../assets/sponsors/vectus.png';
import vercelLogo from '../assets/sponsors/vercel.png';
import bearLogo from '../assets/sponsors/bear.png';
import ripplingLogo from '../assets/sponsors/rippling.svg';
import workloopaiLogo from '../assets/sponsors/workloopai.png';
import vvLogo from '../assets/vv.png';
import ycLogo from '../assets/yc-full.svg';
import { Box } from '../components/box';
import { Footer } from '../components/footer';
import { Page } from '../components/page';

export const dynamic = 'force-static';

let HeaderTitle = styled(motion.h1)`
  font-size: 12em;
  font-weight: 500;

  @media (max-width: 1000px) {
    font-size: 4em;
    font-weight: 500;
  }
`;

let HeaderSubtitle = styled(motion.h2)`
  font-size: 1.4em;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.8em;
`;

let Logos = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 100px;

  img {
    height: 54px;
  }

  .openai-logo {
    height: 63px;
  }

  .vercel-logo {
    height: 41px;
  }

  .morphllm-logo {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  .vv-logo {
    height: 36px;
  }

  .audrion-logo {
    height: 36px;
  }

  .coval-logo {
    height: 50px;
  }

  .mantle-logo {
    height: 120px;
  }

  .puddle-logo {
    width: 180px;
    height: auto;
  }

  .vectus-logo {
    width: 225px;
    height: auto;
  }

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 30px;
    margin-bottom: 50px;

    img {
      height: 36px;
    }

    .openai-logo {
      height: 45px;
    }

    .vercel-logo {
      height: 27px;
    }

    .morphllm-logo {
      filter: brightness(0) saturate(100%) invert(100%);
    }

    .vv-logo {
      height: 27px;
    }

    .audrion-logo {
      height: 25px;
    }

    .coval-logo {
      height: 34px;
    }

    .mantle-logo {
      height: 120px;
    }

    .puddle-logo {
      width: 135px;
      height: auto;
    }

    .vectus-logo {
      width: 135px;
      height: auto;
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

let FloatingButtons = styled.nav`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 15px;
  z-index: 1000;
`;

let FloatingButton = styled(motion.a)`
  background: white;
  color: black;
  padding: 16px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  z-index: 1005;

  &:hover {
    transform: scale(1.05);
    color: black;
    text-decoration: none;
    box-shadow: 0 8px 32px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 14px 20px;
    font-size: 14px;
  }
`;

let Apply = styled(motion.div)`
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
        <HeaderTitle
          initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: 'easeOut', delay: 0.5 }}
        >
          YC Agent Jam '25
        </HeaderTitle>

        <HeaderSubtitle
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        >
          <span>Nov 1st–2nd, 2025</span>
          <br />
          <span>Y Combinator Office — San Francisco, California</span>
        </HeaderSubtitle>

        <Apply
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
        >
          <div>
            <ApplyButton>Applications Closed</ApplyButton>
          </div>
          <ApplyExtra>
            Limited spots available • <u>Guaranteed YC interview</u> for winner
          </ApplyExtra>
        </Apply>

        <Logos
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
        >
          <HostLabel>Hosted by</HostLabel>
          <a href="https://www.metorial.com" target="_blank" rel="noreferrer">
            <img src={metorialLogo.src} alt="Metorial Logo" />
          </a>
          <a href="https://www.ycombinator.com" target="_blank" rel="noreferrer">
            <img src={ycLogo.src} alt="Y Combinator Logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/violetventures/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vvLogo.src} alt="Violet Ventures Logo" className="vv-logo" />
          </a>
        </Logos>

        <Logos
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.6 }}
        >
          <HostLabel>Supported by</HostLabel>
          <img src={naturalLogo.src} alt="Natural" />
          <img src={openaiLogo.src} alt="OpenAI" className="openai-logo" />
          <img src={vercelLogo.src} alt="Vercel" className="vercel-logo" />
          <img src={anthropicLogo.src} alt="Anthropic" />
          <img src={ripplingLogo.src} alt="Rippling" />
          <img src={captainLogo.src} alt="Captain" />
          <img src={morphllmLogo.src} alt="MorphLLM" className="morphllm-logo" />
          <img src={workloopaiLogo.src} alt="Workloop AI" />
          <img src={unsiloedLogo.src} alt="Unsiloed AI" />
          <img src={nivaraLogo.src} alt="Nivara" />
          <img src={audrionLogo.src} alt="Audrion" className="audrion-logo" />
          <img src={covalLogo.src} alt="Coval" className="coval-logo" />
          <img src={puddleLogo.src} alt="Puddle" className="puddle-logo" />
          <img src="/assets/sponsors/mantle.png" alt="Mantle" className="mantle-logo" />
          <img src={vectusLogo.src} alt="Vectus" className="vectus-logo" />
          <img src={bearLogo.src} alt="Bear" className="bear-logo" />
        </Logos>

        <Box title="About the Event" delay={1.8}>
          <p>
            <a href="https://metorial.com" target="_blank" rel="noreferrer">
              <strong>Metorial (YC F25)</strong>
            </a>{' '}
            is hosting a 24-hour overnight hackathon at the{' '}
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

        <Box title="About Metorial" delay={2.0}>
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

        <Box title="Sponsors & Partners" delay={2.2}>
          <p>
            We've assembled an incredible lineup of world-class sponsors to support builders
            and founders throughout the event. Our sponsors include Natural, OpenAI, Vercel,
            Anthropic, Captain, MorphLLM, Workloop AI, Unsiloed AI, Nivara, Audrion, Coval,
            Mantle, Puddle, and Vectus.
          </p>
          <br />

          <p>
            Interested in sponsoring? Reach out at{' '}
            <a href="mailto:founders@metorial.com">founders@metorial.com</a>.
          </p>
        </Box>

        {/* <div style={{ marginBottom: '80px' }}>
          <ApplyButton href="/apply">Ready to Join? Apply Now</ApplyButton>
        </div> */}

        <Footer />

        <FloatingButtons>
          <FloatingButton
            href="/discord"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 1.2 }}
          >
            Join our Discord
          </FloatingButton>
          {/* <FloatingButton
            href="/apply"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 1 }}
          >
            🚀 Apply
          </FloatingButton> */}
        </FloatingButtons>
      </Page>
    </>
  );
};
