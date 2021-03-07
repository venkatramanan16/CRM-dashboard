import React from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-order'

const Timer = () => {
     
       
        return(
            <Aux>
              <h1>Time management system</h1>
            </Aux>
        )
    }


export default WithErrorHandler(Timer,axios)