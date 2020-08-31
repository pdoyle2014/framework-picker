import React from 'react';
import styles from './TableBody.module.css'


const tableBody = (props) => {

  console.log('the display sequence is: ' + props.seq);

  let frameworksObj = {
    react: props.state.react,
    angular: props.state.angular,
    ember: props.state.ember,
    vue: props.state.vue
  }


  return(
    <table>
      <tbody>
        {props.seq.map( el => {
              return(
                <tr>
                  <td>{el}</td>
                  <td>{el}</td>
                  <td>{el}</td>
                  <td>{el}</td>
                </tr>
              )
            }
        )}

      </tbody>
    </table>
)
}



export default tableBody;
