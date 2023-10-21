import styled from "styled-components";

const GridLayoutTestPage = () => {
  const data = [
    {
      title: "aaa",
      result: "xxx",
      detail: "bbbbbbbbbbbbbbbbb",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <div>xxx1</div>
        <div>xxx2</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>234</div>
      </Wrapper>
      <Wrapper>
        <Box1>aiueo</Box1>
        <div>AAAAAAAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>AAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>AAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>AAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
      </Wrapper>
      <Wrapper>
        <Box1>aiueo</Box1>
        <div>AAAAAAAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>AAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>AAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
        <div>AAAA</div>
        <div>kkk</div>
        <div>32</div>
        <div>BBBB</div>
        <div>fff</div>
        <div>234</div>
      </Wrapper>
    </Container>
  );
};

export default GridLayoutTestPage;

const Container = styled.div`
  div:first-child > div {
    background: #f00;
  }
`;

const templateColumns = "60px 60px 60px 60px 60px 60px 60px";

const HeadCell = styled.div`
  background: #f00;
  color: #fff;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${templateColumns};
  width: 420px;
  background: #fff;
  color: #000;
  box-sizing: border-box;

  border: 0px solid #999;

  > div {
    box-sizing: border-box;

    border: 1px solid #999;
    word-wrap: break-word;
  }

  > .header {
  }
`;

const Box1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  background: #ccf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box2 = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 5;
  background: #fcc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
