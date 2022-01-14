import styled from "styled-components";

export const SBlockBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin-top: 50px;
`;

export const SBtn = styled.button`
  width: 120px;
  height: 50px;
  background-color: #33D6B6;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 24px;
  :hover {
    background-color: #048F73;
    transition: all 0.3s ease-out;
  }
`;
