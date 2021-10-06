import styled from 'styled-components'

export const ProfileContainer = styled.main`
  padding: 20px 20px 0;
  display: grid;
  grid-template-rows: 500px 1fr;
  background-color:pink;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`
export const ResetButton = styled.button`
  border-radius: 50%;
  padding: 10px;
  outline: none;
  background-color:#f5710c;
  color:white;
  font-weight:bolder;
  font-size:15px;
  border:none;
  cursor: pointer;
  :hover{
    background-color:#f5a30c;
  }
`