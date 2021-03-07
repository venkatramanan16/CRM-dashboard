import React from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-order'

const dashboard = () => {
     
       
        return(
            <Aux>
              <h1>Welcome to dashboard</h1>
            </Aux>
        )
    }


export default WithErrorHandler(dashboard,axios)