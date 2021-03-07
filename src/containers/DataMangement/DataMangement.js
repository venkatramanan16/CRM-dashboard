import React from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-order'

const dataManagement = () => {
     
       
        return(
            <Aux>
              <h1>Data management system</h1>
            </Aux>
        )
    }


export default WithErrorHandler(dataManagement,axios)