import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const modal = props => {
          return(
            <Aux>
                <Backdrop show={props.show} modalClosed={props.cancel} />
                <div className={classes.Modal} style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>{props.children}</div>
            </Aux>
        )
    
} 

export default React.memo(modal,(prevProps,nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children)