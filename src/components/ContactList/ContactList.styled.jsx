import styled from "styled-components";

export const UsersContactList = styled.ul`
  justify-content: center;
  list-style: none;
  padding: 0;
  padding-bottom: 10px;
  padding-top: 5px;
  margin: 0;
`;

export const ContactListItem = styled.li`
  padding: 7px 20px;
  margin-bottom: 10px;
  margin: 10px;
  border-radius: 5px;
  border-left: 10px solid #2ea8ee;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 18px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
`;

export const UserName = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 5px;
  padding: 0;
`;

export const UserNumber = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  margin: 5px;
  padding: 0;
`;

export const ContactListButton = styled.button`
  border-radius: 4px;
  border: none;
  width: 60px;
  height: 20px;
  text-transform: capitalize;
  &:hover {
    background-color: #dd0909;
    color: white;
  }
`;
