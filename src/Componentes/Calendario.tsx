import React, { Component } from "react";
import CalendarPicker from "react-native-calendar-picker";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

const Container = styled.View`
   flex: 1;
    backgroundColor: ${Colors.white};
    margin-top: 100,
`;

export default class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <Container>
        <CalendarPicker
          initialDate={new Date("2017-06-15")}
          selectedDayColor={Colors.mainCOlorPurpleLigth}
          onDateChange={this.onDateChange}
        />
      </Container>
    );
  }
}
