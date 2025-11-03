import React from 'react'

function Select(props) {
    let { settings } = props;
    let { label, id, name } = settings;
    return(

         <div className="select">
             <label htmlFor="filters__by-name" className="filters__by-name">{label}</label>
             <select id={id} className="filters__by-name" name={name}>
                 {props.options.map(option => (
                     <option key={option.value} value={option.value}>
                         {option.label}
                     </option>
                 ))}
             </select>

        </div>
    );
}

export default Select;