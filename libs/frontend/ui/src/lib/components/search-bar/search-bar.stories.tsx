
import React from 'react';
import { SearchBar, SearchBarProps  } from './search-bar';

export default {
  component: SearchBar,
  title: 'SearchBar'
};

export const primary = () => {
  
  
  const props:SearchBarProps = {
    requestPrimeMedian: ('requestPrimeMedian', ),
  };
  

  return <SearchBar requestPrimeMedian = {props.requestPrimeMedian}  />;
};