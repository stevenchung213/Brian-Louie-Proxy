import React from 'react';
import NumberFormat from 'react-number-format';
import Template from './Template.js';
import MortgageChart from './MortgageChart.js';
// import { HouseIdContext } from '../Main.js';
import MortgageChartLegend from './MortgageChartLegend';

const data = {
  propertyid: 0,
  downpayment: 80000,
  hoa: 2000,
  price: 1000000,
  propertytaxpercent: 1.2
};

class MortgageBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      // price: 0,
      // downpayment: 0,
      downpaymentpercent: 0,
      loan: 'Fixed30Year',
      interest: 4.176,
      propertytax: (this.state.data.propertytaxpercent * 0.01) * this.state.data.price,
      // propertytaxpercent: 1.2,
      insurance: 1200,
      // hoa: 0,
      pmi: 0,
      displayTaxes: true,
      displayPmi: false,
      prevtax: 0,
      previns: 0,
      prevpmi: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.select = this.select.bind(this);
    this.checkPmi = this.checkPmi.bind(this);
    this.checkTaxAndInsurance = this.checkTaxAndInsurance.bind(this);
    this.checkPmi = this.checkPmi.bind(this);
    this.getPmi = this.getPmi.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // here could do whatever is necessary with submitted value, currently didn't implement
  }

  select(e) {
    this.setState({ loan: e.target.value });
  }

  componentDidMount() {
    // this.setState({
    //   price: this.zestimate,
    //   downpayment: Math.floor(this.zestimate * 0.0425),
    //   propertytax: Math.floor(
    //     this.zestimate * (this.state.propertytaxPercent / 100),
    //   ),
    // });
    this.getPmi();
  }

  checkPmi() {
    if (this.state.displayPmi) {
      this.setState({ prevpmi: this.state.pmi });
      this.setState({ pmi: 0 });
    } else {
      this.getPmi();
    }
    this.setState({ displayPmi: !this.state.displayPmi });
  }

  getPmi() {
    const stillOwed = this.state.data.price - this.state.data.downpayment;
    const pmi = Math.floor((stillOwed * 0.005) / 12);
    this.setState({ pmi });
  }

  checkTaxAndInsurance() {
    if (this.state.displayTaxes) {
      this.setState({
        prevtax: this.state.data.propertytax,
        previns: this.state.insurance,
      });
      this.setState({ propertytax: 0, insurance: 0 });
    } else {
      this.setState({
        propertytax: this.state.prevtax,
        insurance: this.state.previns,
      });
    }
    this.setState({ displayTaxes: !this.state.displayTaxes });
  }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    let insurance = Math.floor(this.state.insurance / 12);
    let taxes = Math.floor(this.state.data.propertytax / 12);
    const getPni = (total, years, rate) => {
      const percent = rate / 100 / 12;
      const months = years * 12;
      return (
        (total * (percent * Math.pow(1 + percent, months)))
        / (Math.pow(1 + percent, months) - 1)
      );
    };

    const pni = this.state.loan === 'Fixed15Year'
      ? Math.floor(
        getPni(
          this.state.data.price - this.state.data.downpayment,
          15,
          this.state.interest,
        ),
      )
      : Math.floor(
        getPni(
          this.state.data.price - this.state.data.downpayment,
          30,
          this.state.interest,
        ),
      );
    taxes = this.state.displayTaxes ? taxes : 0;
    insurance = this.state.displayTaxes ? insurance : 0;
    const total = insurance + taxes + this.state.data.hoa + pni + this.state.pmi;
    const data = [
      { name: 'P&I', value: pni, fill: '#0074E4' },
      { name: 'Insurance', value: insurance, fill: '#62AEF7' },
      { name: 'Taxes', value: taxes, fill: '#3290E9' },
      { name: 'PMI', value: this.state.pmi, fill: '#1A5198' },
      { name: 'HOA', value: this.state.data.hoa, fill: '#D8FOF9' },
    ];
    const legendProps = {
      pni,
      insurance,
      taxes,
      hoa: this.state.data.hoa,
      pmi: this.state.pmi,
    };
    const lessThan100 = (values) => {
      const { floatValue } = values;
      return floatValue >= 0.0 && floatValue <= 100.0;
    };
    const lessThanPrice = (values) => {
      const { floatValue } = values;
      return floatValue >= 0.0 && floatValue <= this.state.data.price;
    };
    return (


            <div id="mortgage-wrapper">
              <div id="mortgage-input-container">
                <form id="mortgage-input-form" onSubmit={this.handleSubmit}>
                  <label>Home price</label>
                  <br />
                  <NumberFormat
                    value={this.state.data.price}
                    className="mortgage-num-input"
                    decimalScale={0}

                    displayType="input"
                    thousandSeparator
                    prefix="$"
                    onValueChange={(values) => {
                      const { value } = values;
                      this.getPmi();
                      this.setState({ price: Number(value) });
                    }}
                  />
                  <br />
                  <label>Down payment</label>
                  <br />
                  <NumberFormat
                    className="mortgage-num-input mortgage-shorter"
                    value={this.state.data.downpayment}
                    decimalScale={0}

                    displayType="input"
                    isAllowed={lessThanPrice}
                    thousandSeparator
                    prefix="$"
                    onValueChange={(values) => {
                      const { value } = values;
                      this.getPmi();
                      const dp = {...this.state.data};
                      dp.downpayment = Number(value);
                      this.setState({ dp });
                    }}
                  />
                  <NumberFormat
                    className="mortgage-percent"
                    value={this.state.data.price / this.state.data.downpayment}
                    name="downpayment-percent"
                    isAllowed={lessThan100}
                    defaultValue={4.25}
                    displayType="input"
                    suffix="%"
                    onValueChange={(values) => {
                      const { value } = values;
                      const dp = {...this.state.data};
                      dp.downpayment = this.state.data.price * (value / 100);
                      this.setState({ dp });
                    }}
                  />

                  <br />
                  <label>Loan program</label>
                  <br />
                  <select
                    id="mortgage-select"
                    value={this.state.loan}
                    onChange={this.select}
                  >
                    <option value="Fixed30Year">30-year fixed</option>
                    <option value="Fixed15Year">15-year fixed</option>
                    <option value="ARM5">5/1 ARM</option>
                  </select>
                  <br />
                  <label>Interest rate</label>
                  <br />
                  <NumberFormat
                    className="mortgage-num-input"
                    name="price"
                    isAllowed={lessThan100}
                    defaultValue={4.176}
                    displayType="input"
                    decimalScale={3}
                    fixedDecimalScale
                  />
                  <br />
                  <input
                    type="checkbox"
                    id="pmi-checkbox"
                    onClick={this.checkPmi}
                  />
                  <label>Include PMI</label>
                  <br />
                  <input
                    type="checkbox"
                    id="tax-insurance-checkbox"
                    onClick={this.checkTaxAndInsurance}
                    checked
                  />
                  <label>Include taxes/insurance</label>
                  <br />
                  <label>Property tax</label>
                  <br />
                  <NumberFormat
                    className="mortgage-num-input mortgage-shorter"
                    value={this.state.data.propertytax}
                    decimalScale={0}
                    isAllowed={lessThanPrice}
                    defaultValue={this.state.data.propertytax}
                    displayType="input"
                    thousandSeparator
                    prefix="$"
                    onValueChange={(values) => {
                      const { value } = values;
                      const pt = {...this.state.data};
                      pt.propertytax = Number(value);
                      this.setState({ pt });
                    }}
                  />
                  <NumberFormat
                    className="mortgage-percent"
                    value={(this.state.data.price / this.state.data.propertytax).toFixed(3)}
                    name="downpayment-percent"
                    defaultValue={1.2}
                    displayType="input"
                    isAllowed={lessThan100}
                    suffix="%"
                    onValueChange={(values) => {
                      const { value } = values;
                      this.setState({
                        propertytax: this.state.data.price * (value / 100),
                      });
                    }}
                  />
                  <br />
                  <label>Home insurance</label>
                  <br />
                  <NumberFormat
                    className="mortgage-num-input mortgage-shorter"
                    value={this.state.insurance}
                    isAllowed={lessThanPrice}
                    decimalScale={0}

                    displayType="input"
                    thousandSeparator
                    prefix="$"
                    onValueChange={(values) => {
                      const { value } = values;
                      this.setState({ insurance: Number(value) });
                    }}
                  />
                  <br />
                  <label>HOA dues</label>
                  <br />
                  <NumberFormat
                    className="mortgage-num-input mortgage-shorter"
                    value={this.state.data.hoa}
                    decimalScale={0}

                    displayType="input"
                    thousandSeparator
                    prefix="$"
                    onValueChange={(values) => {
                      const { value } = values;
                      this.setState({ hoa: Number(value) });
                    }}
                  />
                  <br />
                </form>
              </div>
              <img
                id="chart-dots"
                src="https://s3-us-west-1.amazonaws.com/housing-hr/chart-dots.png"
              />
              <MortgageChartLegend data={legendProps} />
              <div id="mortgage-chart-container">
                <MortgageChart data={data} total={total} />
              </div>
            </div>

    );
  }
}

const Mortgage = Template(MortgageBase, 'Mortgage');

export default Mortgage;
