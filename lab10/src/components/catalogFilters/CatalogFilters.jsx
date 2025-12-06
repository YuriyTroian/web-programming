import './catalogFilters.css';
import ButtonApply from "../buttonApply/ButtonApply";
import Select from "../select/Select";

import React, {useState} from "react";

const CatalogFilters = ({onFilterApply}) => {
    const nameOptions = [
        {value: "Any name", label: "Any name"},
        {value: "Diamond", label: "Diamond"},
        {value: "Rubin", label: "Rubin"},
        {value: "Smaragd", label: "Smaragd"},
        {value: "Stone", label: "Stone"},
    ];

    const priceOptions = [
        {value: "Any price", label: "Any price"},
        {value: "1-500 $", label: "1-500 $"},
        {value: "500-1000 $", label: "500-1000 $"},
        {value: "more than 1000 $", label: "more than 1000 $"},
    ];

    const strengthOptions = [
        {value: "Any strength", label: "Any strength"},
        {value: "low", label: "low"},
        {value: "medium", label: "medium"},
        {value: "high", label: "high"},
    ];

    const nameSettings = {
        id: 'filters__by-name',
        label: 'Filter by name:',
        name: 'name',
        class_name: 'name',
    }

    const priceSettings = {
        id: 'filters__by-price',
        label: 'Filter by price:',
        name: 'price',
        class_name: 'price',
    }

    const strengthSettings = {
        id: 'filters__by-strength',
        label: 'Filter by strength:',
        name: 'strength',
        class_name: 'strength',
    }

    const selectArray = [
        {options: nameOptions, settings: nameSettings},
        {options: priceOptions, settings: priceSettings},
        {options: strengthOptions, settings: strengthSettings},
    ];

    const handleApplyClick = () => {
        const selectedFilters = {
            name: document.getElementById(nameSettings.id).value,
            price: document.getElementById(priceSettings.id).value,
            strength: document.getElementById(strengthSettings.id).value,
        };

        onFilterApply(selectedFilters);
    };

    return (
        <section>
            <div className="catalog-filters">
                <div className="catalog-filters__types">
                    {selectArray.map((single_select) => (
                        <div className={single_select.settings.class_name} key={single_select.settings.id}>
                            <Select options={single_select.options} settings={single_select.settings}/>
                        </div>
                    ))}
                </div>
                <input type="search" id="mySearch" className="catalog-filters__search"
                       placeholder="Search the stones…"/>
                <div className="catalog-filters__button">
                    <ButtonApply onClick={handleApplyClick}/>
                </div>
            </div>
        </section>
    );
}

export default CatalogFilters;