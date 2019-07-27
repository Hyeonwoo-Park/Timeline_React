import React from 'react';
import { BodyWrapper } from './Components';
import { HeaderContainer, PostContainer, FriendsContainer } from './Containers';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <BodyWrapper>
        <PostContainer/>
        <FriendsContainer/>
      </BodyWrapper>
    </div>
  );
}

export default App;
