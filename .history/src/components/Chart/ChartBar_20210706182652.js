import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
    let barFillHeight='0%';
    if(props.max>0){
        barFillHeight=Math
    }
  return <div className='chart-bar'>
      <div className='chart-bar__inner'>
          <div className='chart-bar__fill'></div>
      </div>
      <div className='chart-bar__label'>{props.lable}</div>
  </div>;
};
export default ChartBar;
