import React, { Component } from 'react';
import { Buttons } from './Buttons';
import { ListAndValue } from './ListAndValue';
import {
  CONTENT_DIV,
  TITLE_H1,
  STATISTICS_DIV,
} from './styled/Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodResponse = () => {
    this.setState(ev => ({ good: ev.good + 1 }));
  };
  neutralResponse = () => {
    this.setState(ev => ({ neutral: ev.neutral + 1 }));
  };
  badResponse = () => {
    this.setState(ev => ({ bad: ev.bad + 1 }));
  };

  summaResponse = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  percentage = () => {
    let summa = this.state.good + this.state.neutral + this.state.bad;

    let goodRating = this.state.good * 100;
    let normalRating = this.state.neutral * 50;
    let badRating = this.state.bad * 0;

    let percent = (goodRating + normalRating + badRating) / summa;
    return percent.toFixed(1);
  };

  render() {
    return (
      <CONTENT_DIV>
        <TITLE_H1>Please leave feeedback</TITLE_H1>
        <Buttons
          good={this.goodResponse}
          neutral={this.neutralResponse}
          bad={this.badResponse}
        />
        <STATISTICS_DIV>
          <h2>
            Statistics
            {this.summaResponse() !== 0 && (
              <>
                <span>:</span>
              </>
            )}
          </h2>
          {this.summaResponse() !== 0 && (
            <ListAndValue
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              summa={this.summaResponse()}
              percentage={this.percentage()}
            />
          )}
        </STATISTICS_DIV>
      </CONTENT_DIV>
    );
  }
}

export default Feedback;
