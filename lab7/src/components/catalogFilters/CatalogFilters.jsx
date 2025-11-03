import './catalogFilters.css'
import ButtonApply from "../buttonApply/ButtonApply";
import Select from "../select/Select";
import React from "react";

function CatalogFilters(){
    const nameOptions = [
        { value: "name", label: "Any name"},
        { value: "name", label: "Diamond"},
        { value: "name", label: "Rubin"},
        { value: "name", label: "Smaragd"},
        { value: "name", label: "Stone"},
    ];


    const priceOptions = [
        {value: "price", label: "Any price"},
        {value: "price", label: "1-500 $"},
        {value: "price", label: "500-1000 $"},
        {value: "price", label: "more than 1000 $"},
    ];

    const strengthOptions = [
        {value: "strength", label: "Any strength"},
        {value: "strength", label: "low"},
        {value: "strength", label: "medium"},
        {value: "strength", label: "high"},
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
        { options: nameOptions, settings: nameSettings },
        { options: priceOptions, settings: priceSettings },
        { options: strengthOptions, settings: strengthSettings },
    ];

    return(
        <section>
            <div className="catalog-filters">
                <div className="catalog-filters__types">
                    {selectArray.map((single_select) => (
                        <div className={single_select.settings.class_name}>
                            <Select options={single_select.options} settings={single_select.settings}/>
                        </div>
                    ))}
                </div>
                <ButtonApply/>
            </div>
        </section>


    );
}

export default CatalogFilters;