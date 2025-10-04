'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useWindowScroll } from 'react-use';
import styled from 'styled-components';

let Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  z-index: 500;
`;

let Inner = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

let Logo = styled.span`
  height: 46px;
  padding: 0px 5px;
  display: flex;
  color: black;
  background: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  // Triangle on the left
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -25px;
    border-top: 23px solid transparent;
    border-right: 25px solid rgba(255, 255, 255, 0.85);
    border-bottom: 23px solid transparent;
  }

  // Triangle on the right
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -25px;
    border-top: 23px solid transparent;
    border-left: 25px solid rgba(255, 255, 255, 0.85);
    border-bottom: 23px solid transparent;
  }
`;

export let Nav = () => {
  let { y } = useWindowScroll();

  return (
    <Wrapper
      initial={{ y: -100, scale: 0.6 }}
      animate={y < 300 ? { y: -100, scale: 1 } : { y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <Inner>
        <Link href="/">
          <Logo>YC Agent Jam '25</Logo>
        </Link>
      </Inner>
    </Wrapper>
  );
};
