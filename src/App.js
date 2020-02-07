import React, { Component } from 'react'
import styled from 'styled-components';
import Slider from 'react-awesome-slider';
import Navbar from './components/Navbar';

import picture from './assets/kent.jpg'


import GlobalStyle from './styles/Global';
const StripBanner = styled.div`
    position: relative;
    width: 100%;
    height: 1.5rem;
    background-color: green;
    display: flex;
    padding: 2rem;
    justify-content: flex-end;

    & p {
      font-size: 1.5rem;
      color: white;
    }
`;

const Content = styled.div`
    position: absolute;
    top: 9rem;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 60rem;
    margin: 0 auto;
    background-color: yellow;
    display: flex;
    
    @media(max-width: 768px){
      width: 100%;
      left: 0;
      right: 0;
      background-color: red;
    }
`;


const Footer = styled.div`
    position: relative;
    top: 65rem;
    bottom: 0;
    width: 100%;
    height: 30vh;
    background-color: black;
`;

const Image = styled.img`
    height: 85%;
    margin: auto 0;
`;

class App extends Component {
  state = {
    navbarOpen: false
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  render(){
    return(
      <>
        <GlobalStyle />
        <StripBanner>
          <p>Have questions? Call us on 256 77123123 | 256 734 324 123</p>
        </StripBanner>
        <Navbar 
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Content>
            <Image src={picture} alt />
        </Content>
        <Footer>
          <p>This is a footer</p>
        </Footer>
      </>
    )
  }
}


export default App;