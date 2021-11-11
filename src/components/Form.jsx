import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFrom: '2016-11-11', dateTo: '2020-11-11',
      isfilteredByDate: false,
      isFilteredByInt: false,
      moneyFrom: 120,
      moneyTo: 1200,
    };

    this.setdateFrom = this.setdateFrom.bind(this);
    this.setdateTo = this.setdateTo.bind(this);
    this.setMoneyFrom = this.setMoneyFrom.bind(this);
    this.setMoneyTo = this.setMoneyTo.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  allFilterts() {
    return this.getDateInterval()
      .filter((element, i) =>
        this.state.moneyFrom <= +element.slice(11) && this.state.moneyTo >= +element.slice(11))
  }

  renderDateIntervalAll() {
    return this.allFilterts()
      .map((element, i) => <div key={i}> {element.slice(0, 10)} </div>)
  }

  renderMoneyIntervalAll() {
    return this.allFilterts()
      .map((element, i) => <div key={i}> {element.slice(11)} </div>)
  }

  getDateInterval() {
    return this.props.dataTransfer
      .filter((element) =>
        Date.parse(element.slice(0, 10)) >= Date.parse(this.state.dateFrom)
        && Date.parse(element.slice(0, 10)) <= Date.parse(this.state.dateTo))
  }

  renderDateIntervalFromDateFilter() {
    return this.getDateInterval()
      .map((element, i) => <div key={i}> {element.slice(0, 10)} </div>)
  }

  renderMoneyIntervalFromDateFilter() {
    return this.getDateInterval()
      .map((element, i) => <div key={i}> {element.slice(11)} </div>)
  }

  getMoneyInterval() {
    return this.props.dataTransfer
      .filter((element, i) =>
        this.state.moneyFrom <= +element.slice(11) && this.state.moneyTo >= +element.slice(11))

  }

  renderDateIntervalFromMoneyFilter() {
    return this.getMoneyInterval()
      .map((element, i) => <div key={i}> {element.slice(0, 10)} </div>)
  }

  renderMoneyIntervalFromMoneyFilter() {
    return this.getMoneyInterval()
      .map((element, i) => <div key={i}> {element.slice(11)} </div>)
  }

  checkData() {
    this.setState({ isfilteredByDate: true })
    if (Date.parse(this.state.dateTo) - Date.parse(this.state.dateFrom) < 0)
      alert('Smth wrong')
  }


  setdateFrom(event) {
    this.setState({ dateFrom: event.target.value });
    this.checkData()
  }

  setdateTo(event) {
    this.setState({ dateTo: event.target.value });
    this.checkData()
  }

  setMoneyFrom(event) {
    this.setState({ moneyFrom: event.target.value });
    this.setState({ isFilteredByInt: true })
  }

  setMoneyTo(event) {
    this.setState({ moneyTo: event.target.value });
    this.setState({ isFilteredByInt: true })
  }

  resetFilter() {
    this.setState({ isFilteredByInt: false })
    this.setState({ isfilteredByDate: false })
    return
  }

  render() {
    return (
      <div>
        From:
        <input type="date" value={this.state.dateFrom} onChange={this.setdateFrom} />
        <p>To:  <input type="date" value={this.state.dateTo} onChange={this.setdateTo} /></p>
            From<input onChange={this.setMoneyFrom} type="text" value={this.state.moneyFrom} />
        <p>To <input onChange={this.setMoneyTo} type="text" value={this.state.moneyTo} /></p>
        <div> <button onClick={this.resetFilter}>Сбросить фильтр</button> </div>

        {!this.state.isfilteredByDate && !this.state.isFilteredByInt
          && <div>
            <span>Дата{<div>{this.props.dataTransfer.map((element, i) => <div key={i}> {element.slice(0, 10)} </div>)}</div>}</span>
            <span >Сумма{<div>{this.props.dataTransfer.map((element, i) => <div key={i}> {element.slice(11)} </div>)}</div>}</span>
          </div>}
        {this.state.isfilteredByDate && !this.state.isFilteredByInt
          && <div>
            <span>Дата{<div>{this.renderDateIntervalFromDateFilter()}</div>}</span>
            <span >Сумма{<div>{this.renderMoneyIntervalFromDateFilter()}</div>}</span>
          </div>}
        {!this.state.isfilteredByDate && this.state.isFilteredByInt
          && <div>
            <span>Дата{<div>{this.renderDateIntervalFromMoneyFilter()}</div>}</span>
            <span >Сумма{<div>{this.renderMoneyIntervalFromMoneyFilter()}</div>}</span>
          </div>}
        {this.state.isfilteredByDate && this.state.isFilteredByInt
          && <div>
            <span>Дата{<div>{this.renderDateIntervalAll()}</div>}</span>
            <span >Сумма{<div>{this.renderMoneyIntervalAll()}</div>}</span>
          </div>}
      </div>
    )
  }
}