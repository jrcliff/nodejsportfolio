import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  .avatar {
    position: relative;
    vertical-align: middle;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
  }
  .avatar img {
    width: 100%;
    height: auto;
  }
`;
