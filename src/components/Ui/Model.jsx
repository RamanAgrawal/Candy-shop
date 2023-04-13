import classes from './Model.module.css'
import ReactDOM from 'react-dom'
import { ShowCartContext } from '../../contexts/ShowCartContext'
import { Fragment } from 'react'
const Backdrop=()=>{
    const {hideCart}=ShowCartContext()
    return <div className={classes.backdrop} onClick={hideCart}/>
}
const ModelOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement=document.getElementById('over-lay')

const Model=props=>{
    return <Fragment>
         
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
        
    </Fragment>
}
export default Model