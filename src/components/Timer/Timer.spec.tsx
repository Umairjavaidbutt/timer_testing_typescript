import React from "react"
import { shallow, mount } from "enzyme"
import Timer, { State } from "./Timer"


describe("Timer", () => {
  const container = shallow(<Timer />)

    it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })

    it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3)
  })
})

describe('mounted Timer', () => {
  const container = mount<Timer,{},State>(<Timer />);
  it('invokes startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance() as Timer, 'startTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.start-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes stopTimer when the stop button is clicked', () => {
    const spy = jest.spyOn(container.instance() as Timer,'stopTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.stop-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', () => {
    const spy = jest.spyOn(container.instance() as Timer, 'resetTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.reset-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change isOn state true when the start button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.start-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
  });

  it('should change isOn state false when the stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(25);
    expect(container.instance().state.seconds).toEqual(0);
 });
});