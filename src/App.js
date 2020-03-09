import React, { Component } from 'react'
import styled from 'styled-components';
import Slider from 'react-awesome-slider';
import Navbar from './components/Navbar';

import picture from './assets/kent.jpg'


import GlobalStyle from './styles/Global';
const StripBanner = styled.div`
    position: relative;
    width: inherit;
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
    width: 100%;
    overflow-x: hidden;
    height: 350px;
    background-color: #ddd;
    display: flex;
    flex-direction: column;


    @media(max-width: 768px){
      width: 100%;
      left: 0;
      right: 0;
      background-color: red;
    }
`;


const Footer = styled.div`
    position: relative;
    top: 50rem;
    bottom: 0;
    width: inherit;
    height: 30rem;
    background-color: #ffa0a0;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width:100%;
    object-fill: contain;
`;

const ServiceCard = styled.div`
  position: relative;
  display: flex;
  border: 1px solid;
  height: 120px;
  width: 20%;
  background-color: lightgreen;
  justify-content:${props => props.centered && `center`}
  align-items:${props => props.centered && `center`}
`;


const ModelCardItem = ({ title }) => (
  <ServiceCard>
      <img src={picture} style={{ width: '100%', objectFit: 'cover'}}/>
      <span style={{ position:'absolute', top: '50%', left: '50%', zIndex: 10, }}>
        <span style={{ color: 'white'}}>{title}</span>
      </span>
  </ServiceCard>
)

const PartnerCardItem = ({ title }) => (
  <ServiceCard centered>
    <span style={{ color: 'white'}}>{title}</span>
  </ServiceCard>
)

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
            <Navbar />
            <Content>
                <div style={{ flex: 3, border: '1px solid red'}}>Slider </div>
                <div style={{ flex: 1, display: 'flex', flexDirection:'row',border: '1px solid red'}}>
                    <span style={{ display: 'flex', flexDirection: 'column', border: '1px solid'}}>
                      <h2>About Us</h2>
                      <p>Fenviron is the organisation</p>
                    </span>
                    <div style={{margin: '1rem', border:'1px solid', display: 'flex',  flexDirection:'column'}}>
                      <h2>Products</h2>
                      <p>We have these products</p>
                    </div>
                </div>
                <div style={{ flex: 1, border: '1px solid red', display: 'flex', flexDirection: 'row'}}>
                    <ModelCardItem title='Commodity Association Trader' />
                    <ModelCardItem title='Private Services Provision' />
                    <ModelCardItem title='Champion Model' />
                    <ModelCardItem title='Value Adding Center' />
                </div>
                <div style={{ flex: 1, border: '1px solid red', display: 'flex', flexDirection: 'row' }}>
                    <PartnerCardItem title='Research Organisations'/>
                    <PartnerCardItem title='Government Ministries'/>
                    <PartnerCardItem title='Local Government'/>
                    <PartnerCardItem title='Local and International Traders'/>
                    <PartnerCardItem title='Farmer Organisations'/>
                    <PartnerCardItem title='Higher Learning Institutions'/>
                    <PartnerCardItem title='Machine Suppliers and Fabricators'/>
                </div>
            </Content>
            <Footer>
              <div style={{ display: 'flex', flexDirection: 'row'}}}>
                <div style={{ display: 'flex', flex: 1}}> Location </div>
                <div style={{ display: 'flex', flex: 3 }}> Organisation </div>
                <div style={{ display: 'flex', flex: 1}}> Quick Links </div>
              </div>
              <div style={{ width: inherit, display: 'flex', flexDirection: 'row'}}>
                Clothing
              </div
            </Footer>
      </>
    )
  }
}


export default App;
