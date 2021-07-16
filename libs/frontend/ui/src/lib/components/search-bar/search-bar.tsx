import { useState } from 'react';

import {ButtonType, CustomButton} from '../button/button';

export interface SearchBarProps {
  requestPrimeMedian: (e: Event, searchNumber: number) => void;
}

export function SearchBar(props: SearchBarProps) {
  const [searchNumber, setSearchNumber] = useState(10);

  return (
    <form id='search-bar-form' onSubmit={(e: any) => props.requestPrimeMedian(e, searchNumber)}>
      <input id='search-bar-input'
        type="number"
        min={3}
        max={100000000}
        value={searchNumber}
        onChange={(e) => setSearchNumber(Number.parseInt(e.target.value))}
      />
      <CustomButton type={ButtonType.submit} text='Get Results' onClick={(e: any)=>props.requestPrimeMedian(e, searchNumber)} />
    </form>
  );
}

export default SearchBar;
