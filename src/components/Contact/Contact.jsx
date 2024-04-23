import css from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
const Contact = ({ contactData: { name, number, id }, onDelete }) => {

    return (
        <div className={css.contactWrapper}>
        <div >
                <p>
                    <FontAwesomeIcon className={css.icon} icon={faUser} />
                    {name}
                </p>
           <p>
          <FontAwesomeIcon className={css.icon} icon={faPhone} />
          {number}
        </p>
  
        </div>
        <button className={css.deleteBtn} onClick={() => onDelete(id)}>Delete</button></div>
)

}

export default Contact;