'use client';

import { useInterval } from '@looped/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import metorialLogo from '../../assets/metorial-full.svg';
import { Page } from '../../components/page';

import anthropicLogo from '../../assets/sponsors/Anthropic_Logo_0.svg';
import audrionLogo from '../../assets/sponsors/audrion.svg';
import captainLogo from '../../assets/sponsors/captain.png';
import covalLogo from '../../assets/sponsors/coval.webp';
import mantelLogo from '../../assets/sponsors/mantle.png';
import morphllmLogo from '../../assets/sponsors/morphllm.svg';
import naturalLogo from '../../assets/sponsors/natural.png';
import nivaraLogo from '../../assets/sponsors/nivara.png';
import openaiLogo from '../../assets/sponsors/OpenAI_Logo_0.svg';
import puddleLogo from '../../assets/sponsors/puddle.png';
import unsiloedLogo from '../../assets/sponsors/unsiloed.png';
import vectusLogo from '../../assets/sponsors/vectus.png';
import vercelLogo from '../../assets/sponsors/Vercel_Logo_0.svg';
import vvLogo from '../../assets/sponsors/vv.svg';
import workloopaiLogo from '../../assets/sponsors/workloopai.png';

let sponsors = [
  { name: 'Anthropic', logo: anthropicLogo },
  { name: 'Audrion', logo: audrionLogo },
  { name: 'Captain', logo: captainLogo },
  { name: 'Coval', logo: covalLogo },
  { name: 'Morph LLM', logo: morphllmLogo },
  { name: 'Natural', logo: naturalLogo },
  { name: 'Nivara', logo: nivaraLogo },
  { name: 'OpenAI', logo: openaiLogo },
  { name: 'Puddle', logo: puddleLogo },
  { name: 'Unsiloed', logo: unsiloedLogo },
  { name: 'Vectus', logo: vectusLogo },
  { name: 'Vercel', logo: vercelLogo },
  { name: 'Workloop AI', logo: workloopaiLogo },
  { name: 'Violent Ventures', logo: vvLogo },
  { name: 'Mantle', logo: mantelLogo }
];

let Scene = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

let BigContentScene = styled(Scene)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

let BigTimerText = styled(motion.div)`
  font-size: 13rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;

  i {
    font-size: 3rem;
    text-align: center;
    font-style: normal;
  }

  .part {
    display: inline-block;
    width: 8rem;
    text-align: center;
  }
`;

let BigText = styled(motion.div)`
  font-size: 8rem;
  font-weight: 600;
  max-width: 80vw;
  text-align: center;
  text-wrap: balance;
`;

let MediumText = styled(motion.div)`
  font-size: 5rem;
  font-weight: 600;
  max-width: 80vw;
  text-align: center;
  text-wrap: balance;
`;

let BigLogo = styled(motion.div)`
  img {
    width: 50vw;
    height: auto;
  }
`;

let SponsorLogo = styled(motion.div)`
  img {
    width: 40vw;
    height: 30vh;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
`;

let Notice = styled(motion.div)`
  position: fixed;
  bottom: 3rem;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;

let TimerTop = styled(motion.div)`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;

  .part {
    display: inline-block;
    width: 1.2rem;
    text-align: center;
  }
`;

let AnimatedDigit = ({ digit }: { digit: string }) => (
  <AnimatePresence mode="popLayout">
    <motion.span
      key={digit}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ display: 'inline-block' }}
      className="part"
    >
      {digit}
    </motion.span>
  </AnimatePresence>
);

let AnimatedNumber = ({ children }: { children: string }) => (
  <>
    {children.split('').map((digit, i) => (
      <AnimatedDigit key={`${i}-${digit}`} digit={digit} />
    ))}
  </>
);

let useNow = () => {
  let [now, setNow] = useState(new Date());

  useInterval(() => {
    setNow(new Date());
  }, 1000);

  return now;
};

let useBlink = (interval: number) => {
  let [on, setOn] = useState(true);

  useInterval(() => {
    setOn(on => !on);
  }, interval);

  return on;
};

let multiplier = 1000 * 5;
let sponsorDuration = multiplier;

let scenes = [
  { name: 'timer', duration: multiplier * 6 },
  { name: 'agent-jam', duration: multiplier * 3 },
  { name: 'timer', duration: multiplier * 2 },
  { name: 'metorial', duration: multiplier * 3 },
  { name: 'metorial-twitter', duration: multiplier * 3 },
  { name: 'timer', duration: multiplier * 2 },
  { name: 'vv', duration: multiplier, chance: 0.3 },
  { name: 'timer', duration: multiplier * 2 },
  { name: 'yc-thanks', duration: multiplier * 3 },
  { name: 'timer', duration: multiplier * 2 },
  { name: 'sponsors', duration: sponsorDuration * sponsors.length }
];

export default () => {
  let now = useNow();

  let [start, setStart] = useState(() => new Date('2025-11-01T19:15:00Z'));
  let [end, setEnd] = useState(() => new Date('2025-11-02T16:30:00Z'));

  useInterval(() => {
    fetch('/config.json')
      .then(res => res.json())
      .then(data => {
        if (data.start) setStart(new Date(data.start));
        if (data.end) setEnd(new Date(data.end));
      });
  }, 1000 * 15);

  let diff = end.getTime() - now.getTime();
  let blink = useBlink(1200);

  let isOver = diff <= 0;
  let isBeforeStart = now.getTime() < start.getTime();

  let timerOffset = 1000 * 60 * 5;

  let currentTime = now.getTime();

  let isNearStart = Math.abs(currentTime - start.getTime()) <= timerOffset;
  let isNearEnd = Math.abs(currentTime - end.getTime()) <= timerOffset;

  let lessThan1HourToEnd = diff <= 1000 * 60 * 60;
  let lessThan30MinToEnd = diff <= 1000 * 60 * 30;
  let lessThan10MinToEnd = diff <= 1000 * 60 * 10;
  let lessThan5MinToEnd = diff <= 1000 * 60 * 5;
  let lessThan1MinToEnd = diff <= 1000 * 60 * 1;

  let started20SecOrLessAgo = !isBeforeStart && now.getTime() - start.getTime() <= 20000;
  let mustShowTimer = isNearStart || isNearEnd;

  let [sceneIndex, setSceneIndex] = useState(0);
  if (mustShowTimer) sceneIndex = 0;
  if (started20SecOrLessAgo) sceneIndex = scenes.findIndex(s => s.name == 'agent-jam');

  let scene = scenes[sceneIndex].name;

  let notice: string | null = null;
  if (!scene.includes('metorial')) notice = 'Organized by Metorial';
  if (isBeforeStart) notice = `YC Agent Jam '25 is about to begin!`;
  if (isNearStart && isBeforeStart) notice = `Get ready for YC Agent Jam '25!`;
  if (scene == 'sponsors') notice = `Thank you to our sponsors and supporters!`;
  if (lessThan1HourToEnd)
    notice = `Less than 1 hour remaining. Submit at ychackathon.com/submit`;
  if (lessThan30MinToEnd)
    notice = `Less than 30 minutes remaining. Submit at ychackathon.com/submit`;
  if (lessThan10MinToEnd)
    notice = `Less than 10 minutes remaining. Submit at ychackathon.com/submit`;
  if (lessThan5MinToEnd)
    notice = `Less than 5 minutes remaining. Submit at ychackathon.com/submit`;
  if (lessThan1MinToEnd)
    notice = `Less than 1 minute remaining. Submit at ychackathon.com/submit`;
  if (isOver) {
    if (scene == 'timer') {
      notice = null;
    } else {
      notice = `YC Agent Jam '25 has ended. Thank you for joining us!`;
    }
  }

  let isNotTimer = scene !== 'timer';

  useEffect(() => {
    if (!scene) return;

    let currentScene = scenes[sceneIndex];

    let nextIndex = (sceneIndex + 1) % scenes.length;
    let nextScene = scenes[nextIndex];

    while (nextScene.chance && Math.random() > nextScene.chance) {
      nextIndex = (nextIndex + 1) % scenes.length;
      nextScene = scenes[nextIndex];
    }

    if (isOver && nextScene.name == 'timer') {
      nextIndex = (nextIndex + 1) % scenes.length;
      nextScene = scenes[nextIndex];
    }

    let timeout = setTimeout(() => {
      setSceneIndex(nextIndex);
    }, currentScene.duration);

    return () => clearTimeout(timeout);
  }, [scene]);

  let sceneProps = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5 }
  };

  let bigTextProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, delay: 0.1 }
  };

  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor(diff / (1000 * 60)) % 60;
  let seconds = Math.floor(diff / 1000) % 60;

  let timerKey = 'normal-timer';
  let timer = (
    <span>
      <AnimatedNumber>{hours.toString().padStart(2, '0')}</AnimatedNumber>
      <span style={{ opacity: blink ? 1 : 0, transition: 'all .2s' }}>:</span>
      <AnimatedNumber>{minutes.toString().padStart(2, '0')}</AnimatedNumber>
      <span style={{ opacity: blink ? 1 : 0, transition: 'all .2s' }}>:</span>
      <AnimatedNumber>{seconds.toString().padStart(2, '0')}</AnimatedNumber>
    </span>
  );

  if (isOver) {
    timerKey = 'over-timer';
    timer = <i>YC Agent Jam '25 has ended.</i>;
  } else if (isBeforeStart) {
    timerKey = 'start-timer';

    let diffStart = start.getTime() - now.getTime();
    let hours = Math.floor(diffStart / (1000 * 60 * 60));
    let minutes = Math.floor(diffStart / (1000 * 60)) % 60;
    let seconds = Math.floor(diffStart / 1000) % 60;
    timer = (
      <>
        <i>Starts in </i>
        <span>
          <AnimatedNumber>{hours.toString().padStart(2, '0')}</AnimatedNumber>
          <span style={{ opacity: blink ? 1 : 0, transition: 'all .2s' }}>:</span>
          <AnimatedNumber>{minutes.toString().padStart(2, '0')}</AnimatedNumber>
          <span style={{ opacity: blink ? 1 : 0, transition: 'all .2s' }}>:</span>
          <AnimatedNumber>{seconds.toString().padStart(2, '0')}</AnimatedNumber>
        </span>
      </>
    );
  }

  let [sponsorIndex, setSponsorIndex] = useState(0);

  useEffect(() => {
    if (scene !== 'sponsors') {
      setSponsorIndex(0);
      sponsors = sponsors.sort(() => Math.random() - 0.5);
      return;
    }

    let timeout = setTimeout(() => {
      let nextSponsorIndex = (sponsorIndex + 1) % sponsors.length;
      if (nextSponsorIndex >= sponsors.length) return;

      setSponsorIndex(nextSponsorIndex);
    }, sponsorDuration * 1000);

    return () => clearTimeout(timeout);
  }, [scene, sponsorIndex]);

  return (
    <Page>
      <AnimatePresence mode="wait">
        {scene == 'timer' && (
          <BigContentScene key={`timer-${timerKey}`} {...sceneProps}>
            <BigTimerText {...bigTextProps}>{timer}</BigTimerText>
          </BigContentScene>
        )}

        {scene == 'metorial' && (
          <BigContentScene key="metorial" {...sceneProps}>
            <BigLogo {...bigTextProps}>
              <img src={metorialLogo.src} alt="Metorial Logo" />
            </BigLogo>
          </BigContentScene>
        )}

        {scene == 'agent-jam' && (
          <BigContentScene key="agent-jam" {...sceneProps}>
            <BigText {...bigTextProps}>
              {isBeforeStart || isNearStart
                ? `Welcome to YC Agent Jam '25`
                : `YC Agent Jam '25`}
            </BigText>
          </BigContentScene>
        )}

        {scene == 'metorial-twitter' && (
          <BigContentScene key="metorial-twitter" {...sceneProps}>
            <MediumText {...bigTextProps}>
              Follow @MetorialAI on Twitter for updates!
            </MediumText>
          </BigContentScene>
        )}

        {scene == 'vv' && (
          <BigContentScene key="metorial-twitter" {...sceneProps}>
            <MediumText {...bigTextProps}>Follow @vvioletventures</MediumText>
          </BigContentScene>
        )}

        {scene == 'yc-thanks' && (
          <BigContentScene key="yc-thanks" {...sceneProps}>
            <MediumText {...bigTextProps}>Thanks to Y Combinator for hosting us.</MediumText>
          </BigContentScene>
        )}

        {scene == 'sponsors' && (
          <BigContentScene key="sponsors" {...sceneProps}>
            <AnimatePresence mode="wait">
              <SponsorLogo
                key={sponsors[sponsorIndex].name}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.5 }}
              >
                <img src={sponsors[sponsorIndex].logo.src} alt={sponsors[sponsorIndex].name} />
              </SponsorLogo>
            </AnimatePresence>
          </BigContentScene>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {notice && (
          <Notice
            key={notice}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {notice}
          </Notice>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isNotTimer && !isOver && (
          <TimerTop
            key="timer-top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {timer}
          </TimerTop>
        )}
      </AnimatePresence>
    </Page>
  );
};
