import React from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-order'

const settings = () => {
     
       
        return(
            <Aux>
              <h1>Settings</h1>
            </Aux>
        )
    }


export default WithErrorHandler(settings,axios)