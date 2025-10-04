import styled from 'styled-components';

let BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

let BoxTop = styled.div`
  border: solid 15px white;
  padding: 30px;

  @media (max-width: 768px) {
    border: solid 10px white;
    padding: 20px;
  }
`;

let BoxTitle = styled.h2`
  font-size: 4.5em;
  font-weight: 600;

  @media (max-width: 1000px) {
    font-size: 2.5em;
    font-weight: 500;
  }
`;

let BoxContent = styled.div`
  background: white;
  padding: 50px;
  color: black;

  p {
    line-height: 1.8em;
    font-size: 1.1em;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
  }

  h2 {
    font-size: 2.5em;
    font-weight: 600;
  }

  h3 {
    font-size: 2em;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    padding: 30px;

    p {
      font-size: 1em;
    }

    h1 {
      font-size: 2em;
      font-weight: 600;
    }

    h2 {
      font-size: 1.5em;
      font-weight: 500;
    }

    h3 {
      font-size: 1.2em;
      font-weight: 500;
    }
  }
`;

export let Box = ({
  title,
  children
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <BoxWrapper>
      <BoxTop>
        <BoxTitle>{title}</BoxTitle>
      </BoxTop>

      <BoxContent>{children}</BoxContent>
    </BoxWrapper>
  );
};
