import React from "react"
import { shallow } from "enzyme"
import TimerButton from "./TimerButton"

describe("TimerButton", () => {
  const container = shallow(
      <TimerButton
        buttonAction={jest.fn()}
        buttonValue={""}
        className=""
      />
    )
  

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})