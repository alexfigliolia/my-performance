import React, { Component } from "react";
import type { OptionalChildren } from "Tools/Types";

export class Search extends Component<OptionalChildren> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 512 512"
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M497.914,497.913a48.085,48.085,0,0,1-68.008,0L345.043,413.05a222.6,222.6,0,0,1-120.659,35.717C100.469,448.767,0,348.313,0,224.383S100.469,0,224.384,0C348.315,0,448.768,100.452,448.768,224.383A222.872,222.872,0,0,1,413.05,345.059l84.864,84.863A48.066,48.066,0,0,1,497.914,497.913Zm-273.53-433.8A160.274,160.274,0,1,0,384.658,224.382,160.271,160.271,0,0,0,224.384,64.109Z"
        />
      </svg>
    );
  }
}
