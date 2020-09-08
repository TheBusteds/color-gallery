import React from 'react';
import './App.css';
import { getRandomColor } from "./utils/color";

// interface IFormProps {
//   action: string;
// }

// export interface IFormState {
//   lum: string;
// }

// class Index extends React.Component<IFormProps, IFormState> {
class Index extends React.Component {
  // constructor(props: IFormProps) {
  //   super(props);
  //   this.state = { lum: '' };
  // }
  render() {
    return (
      <div>
        <form className='row'>
          {getRandomColor().map((color) => (
            <div className='checkFilter'>
              <label>
                {color[0].name}
              </label>
              <input type="checkbox" name={color[0].name} checked />
            </div>
          ))}
          {/* <select value={this.state.lum}>
            <option value="">All</option>
            <option value="darken">Darken</option>
            <option value="lighten">Lighten</option>
          </select> */}
        </form>
        <div className='column'>
          {getRandomColor().map((color) => (
            <div className='row'>
              {color.map((col) => (
                <div className="box">
                  <div className="box-fill" style={{ backgroundColor: JSON.parse(JSON.stringify(col)).hex }}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Index;
