import React from 'react';
import Home from './components/Home.js';
import Mortgage from './components/Mortgage.js';
import $ from 'jquery';

export const HouseIdContext = React.createContext({
  houseArr: [],
  currentHouse: {},
});
const port = 8081;
// db data goes to this.state.currenthouse = (1) record
export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      mortgage: true,
      houseList: [this.props.rand],
      currentHouse: {
        propertyID: 0,
        downPayment: 80000,
        hoa: 2000,
        propertyTax: (1.2 * 0.01) * 1000000,
        propertyTaxPercent: 1.2,
        zestimate: 1000000
      },
      comparableHomes: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    this.setState({ [target]: !this.state[target] });
  }

  componentDidMount() {
    let propertyID = Number(window.location.pathname.replace(/\//, ''));
    if (propertyID > 0) {
      $.get(`http://localhost:${port}/listings/` + propertyID, result => {
      // $.get('http://su-casa-overview.us-west-1.elasticbeanstalk.com/listings/' + propertyID, result => {
        console.log('specific req success', result);
        let data = {
          propertyID: result[0].propertyid,
          downPayment: result[0].downpayment,
          hoa: result[0].hoa,
          propertyTax: result[0].propertytaxx,
          propertyTaxPercent: result[0].propertytaxpercent,
          zestimate: result[0].price,
        };
        this.setState({currentHouse: data});
      }, 'json');
    } else {
      // $.get('http://su-casa-overview.us-west-1.elasticbeanstalk.com/listings', result => {
      $.get(`http://localhost:${port}/listings`, result => {
        console.log('random req success ', result);
        let data = {
          propertyID: result[0].propertyid,
          downPayment: result[0].downpayment,
          hoa: result[0].hoa,
          propertyTax: result[0].propertytaxx,
          propertyTaxPercent: result[0].propertytaxpercent,
          zestimate: result[0].price
        };
        this.setState({currentHouse: data});
      }, 'json');
    }
    // const randArr = [];
    // while (randArr.length < 30) {
    //   const rand = Math.floor(Math.random() * 100);
    //   if (!this.state.houseList.includes(rand) && !randArr.includes(rand)) {
    //     randArr.push(rand);
    //   }
    // }
    // this.setState({ comparableHomes: randArr });
  }

  render() {
    return (
      <HouseIdContext.Provider value={this.state}>
        <div>
          {/*<Home*/}
            {/*status={this.state.home}*/}
            {/*expand={this.handleClick}*/}
            {/*current={this.state.currentHouse}*/}
          {/*/>*/}
          <Mortgage status={this.state.mortgage}  property ={this.state.currentHouse} expand={this.handleClick} />
        </div>
      </HouseIdContext.Provider>
    );
  }
}
