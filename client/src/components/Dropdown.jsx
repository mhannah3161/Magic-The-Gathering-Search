import React from 'react';
import Select from 'react-select';
import themes from '../utils/schema.json'


const Dropdown = ({ selectedTheme, setSelectedTheme }) => {
    const options = [];

    Object.keys(themes).forEach((theme) => {
        options.push({
            value: theme,
            label: theme.charAt(0).toUpperCase() + theme.slice(1),
        });
    });

    return (
        <div className='theme-dropdown DD'>
            <span>Choose Your Mana</span>
            <Select 
            className='select-filter'
            onChange={(e) => {
                setSelectedTheme(themes[e.value])
            }}
            value={selectedTheme}
            options={options}
            // theme={(theme) => ({
            //     ...theme,
            //     borderRadius: 3,
            //     colors: {
            //         ...theme.colors,
            //         primary25: '#7573CD',
            //         primary: '#1E1C79',
            //     },
            // })}
            />
        </div>
    )
}

export default Dropdown;