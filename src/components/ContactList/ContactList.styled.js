import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 20px;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const DeleteButton = styled.button`
  width: 50px;
  height: 20px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 5px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 400;
  color: #000000;
  background-color: #cccccc;

  :hover {
    border-color: #7a7a7a;
  }
  :active {
    background-color: #999999;
  }
`;
