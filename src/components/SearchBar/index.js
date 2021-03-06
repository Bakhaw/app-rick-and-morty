import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { CharactersContext } from '../../context';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 48px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fdf9f3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
`;

const Input = styled.input`
  padding: 8px;
  width: calc(45vw - 16px); /* 16px = left (8px) and right (8px) padding */
  outline: 0;
  background: #e8e7e7;
  border: 0px;
  border-radius: 3px;
  color: #0a0a0a;
  font-size: 14px;
  @media (max-width: 960px) {
    width: calc(90vw - 16px);
  }
`;

function SearchBar() {
  const { filterCharacters } = useContext(CharactersContext);
  const [search, setSearch] = useState('');

  function onChange(e) {
    setSearch(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    filterCharacters('name', search);
  }

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input
          type='text'
          onChange={onChange}
          placeholder="Search - try 'Smith'"
        />
      </form>
    </Wrapper>
  );
}

export default SearchBar;
