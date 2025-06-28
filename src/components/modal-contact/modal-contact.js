
import "./modal-contact.scss";



const   Modalcontact = ({ onHide, show}) =>{
if (!show) return null
 
return(

<div className="modal" show={show}
             onClick={onHide}> 
     <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">
            <form action="#">
                <div data-close onClick={onHide} className="modal__close">&times;</div>
                <div className="modal__title">Je vous recontacte le plus rapidement possible.</div>
                <input required placeholder="Votre nom" name="name" type="text" className="modal__input" />
                <input required placeholder="votre numéro de télephone " name="phone" type="phone" className="modal__input" />
                <button className="btn btn_dark btn_min">Me contacter</button>
             </form>
        </div>
     </div>
 </div>




     )
}
export default Modalcontact