'use client';

import { useDelayed, useIsSSR } from '@looped/hooks';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
import React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div``;

let BackgroundOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

let BackgroundInner = styled.div`
  pointer-events: none;
  transition: all 0.3s;
`;

let Content = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
  padding: 200px 20px 20px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px 20px 20px;
  }
`;

let ContentInner = styled.div`
  max-width: 1100px;
  margin: 0px auto;
`;

export let Page = ({ children }: { children: React.ReactNode }) => {
  let isServer = useIsSSR();
  let visible = useDelayed(!isServer, 200);

  return (
    <Wrapper>
      <BackgroundOuter>
        <BackgroundInner style={{ opacity: visible ? 1 : 0 }}>
          <ShaderGradientCanvas
            style={{
              position: 'absolute',
              top: 0
            }}
          >
            <ShaderGradient
              control="query"
              urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2300c900&color2=%235c5cdb&color3=%23cc71e1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
            />
          </ShaderGradientCanvas>
        </BackgroundInner>
      </BackgroundOuter>

      <Content>
        <ContentInner>{children}</ContentInner>
      </Content>
    </Wrapper>
  );
};
