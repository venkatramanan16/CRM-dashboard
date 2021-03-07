import React from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-order'

const Files = () => {
     
       
        return(
            <Aux>
              <h1>File system</h1>
            </Aux>
        )
    }


export default WithErrorHandler(Files,axios)