import {Component, Fragment} from 'react';
import React from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest'

import {Carousel} from 'react-bootstrap';
import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
    text-decoration: none;
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;
const Header = styled.h2`
  font-size: 22px;
`;
export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, 0.2);
  box-shadow: 5px 5px 10px rgba(0,0,0, 0.2);
`;

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+',
      position: ''
    }
    // this.nextYear = this.nextYear.bind(this)
  }
  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  // nextYear() {
  //   this.setState(state => ({
  //     years: state.years + 1
  //   }))
  // }
  commitInputChanges = (e, color) => {
    this.setState({
      position: e.target.value
    })
  }
  render() {
    const {name, surname, link} = this.props;
    const {years, text, position} = this.state;
    return (
      <EmpItem active>
        {/* <button onClick={() => this.nextYear()}>{text}</button> */}
        <Button onClick={this.nextYear}>{text}</Button>
        <Header>My name is {name} , surname - {surname}, age - {years}, position - {position} </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </EmpItem>
    )
  }
}
const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto; 
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div> 
  )
}
const HelloGreatings = () => {
  return (
    <div style={{width: '600px', margin: '0 auto'}}>
      <DynamicGreating color={'primary'}>
        <h2>Hello world</h2>
      </DynamicGreating>
    </div>
  )
}

const Message = (props) => {
  return (
    <h2> The counter is {props.counter}</h2>
  )
}
class Counter extends Component {
  state = {
    counter: 0
  }
  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }
  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>  
          Click my
        </button>
        {this.props.render(this.state.counter)}
        {/* <Message counter={this.state.counter}/> */}
      </>
    )
  }
}
function App() {
  return (
    <Wrapper>
      <Counter render={counter => (
        <Message counter={counter}/>
      )}/>
      <HelloGreatings/>
      <BootstrapTest
        left = {
          <DynamicGreating color={'primary'}>
            <h2>This weel was hard</h2>
            <h2>Hello world</h2>
          </DynamicGreating>
        }
        right = {
          <Carousel>
            <Carousel.Item>
                <img
                    style={{hight: '266px'}}
                    className="d-block w-100"
                    src="https://picsum.photos/200/300?random=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{hight: '266px'}}
                    className="d-block w-100"
                    src="https://picsum.photos/200/300?random=2"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{hight: '266px'}}
                className="d-block w-100"
                src="https://picsum.photos/200/300?random=3"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        }
      />

      {/* <WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com'/> */}
      {/* <WhoAmI name={{firstName: 'Alex'}} surname='Shepard' link='vk.com'/> */}
      <WhoAmI name='John' surname='Smith' link='facebook.com'/>
      <WhoAmI name='Alex' surname='Shepard' link='facebook.com'/>
    </Wrapper>
  );
}

export default App;
