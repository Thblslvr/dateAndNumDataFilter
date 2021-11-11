import React, { Component } from 'react'
import Form from './Form'


export default class Data extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cash: [
                {
                    date: "2015-03-13",
                    money: 1590
                },
                {
                    date: "2016-11-03",
                    money: 190
                },
                {
                    date: "2017-12-13",
                    money: 10
                },
                {
                    date: "2018-12-13",
                    money: 100
                },
                {
                    date: "2019-03-13",
                    money: 1100
                },
                {
                    date: "2019-04-13",
                    money: 1200
                },
                {
                    date: "2019-05-15",
                    money: 1300
                },
                {
                    date: "2020-03-13",
                    money: 1400
                },
                {
                    date: "2020-06-13",
                    money: 100
                },
                {
                    date: "2020-07-20",
                    money: 1100
                },
                {
                    date: "2026-03-13",
                    money: 1200
                }
            ]
        }
    }

    render() {

        return (
            <div>
                <Form
                    dataTransfer={this.state.cash.map((element, i) =>
                        (element.date + ' ' + element.money)) } />
            </div>
        )
    }
}
