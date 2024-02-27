import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  padding-top: 20px;
  margin: 0 20px;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextMenu = styled.p`
  padding: 0;
  margin: 0;
  margin-right: 9px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: white;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonMenu = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`;
