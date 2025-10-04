import styled from 'styled-components';

let Wrapper = styled.footer`
  padding-bottom: 50px;

  p {
    font-size: 1.2em;
    color: white;
    line-height: 2em;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`;

export let Footer = () => {
  return (
    <Wrapper>
      <p>
        <span
          onClick={() => {
            window.open('https://metorial.com', '_blank');
          }}
        >
          Organized with ❤️ by <a href="https://metorial.com">Metorial</a>, the integration
          platform for agentic AI.
        </span>
        <br />
        <span>
          Big thanks to <a href="https://www.ycombinator.com">Y Combinator</a> for hosting and
          supporting us!
        </span>
      </p>
    </Wrapper>
  );
};
