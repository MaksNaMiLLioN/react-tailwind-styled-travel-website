import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TopSection } from './containers/TopSection';
import tw from 'twin.macro';
import { ExploreSection } from './containers/ExploreSection';


const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
    </AppContainer>
  );
}

export default App;
