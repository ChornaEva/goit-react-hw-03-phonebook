import styled from "styled-components";

export const PhonebookTitle = styled.h1`
  padding: 20px;
  margin: 0;
  /* padding-top: 10px; */
`;

export const PhonebookInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 10px;
  margin-left: 5px;
`;
export const PhonebookLabel = styled.label`
  list-style: none;
  padding: 0;
  margin: 5px;
`;

export const PhonebookInput = styled.input`
  list-style: none;
  padding: 0;
  margin-left: 5px;
`;

export const AddButton = styled.button`
  border-radius: 4px;
  border: none;
  width: 120px;
  height: 25px;
  text-transform: capitalize;
  margin: 10px;
  padding: 0;
  &:hover {
    background-color: #2ea8ee;
    color: white;
  }
`;
