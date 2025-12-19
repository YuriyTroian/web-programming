import success_img from '../../img/success.png';

import './success.css'
import {useNavigate} from "react-router-dom";


function Success() {
    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate('/Catalog');
    };

    return (
        <section>
            <div className='success-box'>
                <img src={success_img} alt='successfull image'/>
                <h2>Success!</h2><br/>
                <a1>Your order was sent to processing!</a1>
                <a1>Check your email box for further information.</a1><br/>
                <button className='btn-to-catalog' onClick={goToCatalog}>Go back to Catalog</button>
            </div>
        </section>
    )

}

export default Success;