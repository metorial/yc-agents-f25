'use client';

import { motion } from 'motion/react';
import styled from 'styled-components';
import { Box } from '../../components/box';
import { Footer } from '../../components/footer';
import { Page } from '../../components/page';

export const dynamic = 'force-static';

let SuccessContainer = styled.div`
  text-align: left;
  max-width: none;
  margin: 0;
  padding: 15px 20px;
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

let HeaderTitle = styled(motion.h1)`
  font-size: 3.2em;
  font-weight: 500;
  color: white;
  margin: 0 0 25px 0;
  padding: 0;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.6em;
    margin: 0 0 20px 0;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 2.2em;
    margin: 0 0 15px 0;
  }
`;

let FloatingButtons = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 15px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

let BackLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
  margin: 15px 0 0 0;
  display: inline-block;

  &:hover {
    color: white;
    text-decoration: underline;
  }
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
    padding: 14px 20px;
    font-size: 14px;
  }
`;

let PageOverride = styled.div`
  max-width: none !important;
  margin: 0 !important;
  padding: 0;
  width: 100%;
`;

let CompactBox = styled(motion.div)`
  .box-wrapper {
    margin-bottom: 40px !important;

    @media (max-width: 768px) {
      margin-bottom: 25px !important;
    }
  }

  .box-content {
    padding: 30px !important;

    @media (max-width: 768px) {
      padding: 20px !important;
    }
  }

  .box-title {
    font-size: 2.5em !important;

    @media (max-width: 768px) {
      font-size: 1.8em !important;
    }
  }
`;

export default function ThanksPage() {
  return (
    <>
      <Page>
        <PageOverride>
          <SuccessContainer>
            <div>
              <HeaderTitle
                initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.3, ease: 'easeOut', delay: 0.5 }}
              >
                Application Submitted!
              </HeaderTitle>

              <CompactBox
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
              >
                <Box title="What's Next?">
                  <p>
                    We'll review your application
                    and get back to you soon about your spot at the hackathon.
                  </p>
                  <br />
                  <p>
                    <strong>Stay in the loop:</strong> Join our Discord and follow us on
                    X for event updates, networking opportunities, and important
                    announcements leading up to the hackathon.
                  </p>
                </Box>
              </CompactBox>

              <BackLink
                href="/"
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
              >
                ← Go back
              </BackLink>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            >
              <Footer />
            </motion.div>
          </SuccessContainer>
        </PageOverride>
      </Page>

      <FloatingButtons
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.4 }}
      >
        <FloatingButton
          href="/discord"
          target="_blank"
          rel="noopener"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.6 }}
        >
          Join Discord
        </FloatingButton>
        <FloatingButton
          href="https://x.com/MetorialAI"
          target="_blank"
          rel="noopener"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.8 }}
        >
          Follow on X
        </FloatingButton>
      </FloatingButtons>
    </>
  );
}
