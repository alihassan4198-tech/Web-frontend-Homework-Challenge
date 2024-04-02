import styled from "@emotion/styled";

export const CardDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  height: 64px;
  width: 64px;
  padding: 5px;
  background-color: #ecf2ff;
`;

export const Username = styled.p`
  color: #545454;
  font-family: "Open Sans";
  margin: 0;
  display: flex;
  align-items: end;
  margin-left: 10px;
`;

export const Icon = styled.img`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h5`
  font-size: 16px;
  font-weight: 400;
  color: #545454;
  margin: 0;
`;

export const Container1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #4474FF;
  padding: 8px;
  border-radius: 5px;
  text-decoration: none;
`;

export const ButtonText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #4474FF;
`;