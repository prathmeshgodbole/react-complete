import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
    let BarFillHeight='0%';
    if()
  return <div className='chart-bar'>
      <div className='chart-bar__inner'>
          <div className='chart-bar__fill'></div>
      </div>
      <div className='chart-bar__label'>{props.lable}</div>
  </div>;
};
export default ChartBar;
