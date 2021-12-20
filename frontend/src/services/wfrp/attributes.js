const _attributes = [
    { name: "Weapon Skill", attribute: "WS", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Ballistic Skill", attribute: "BS", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Strength", attribute: "S", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Toughness", attribute: "T", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Initiative", attribute: "I", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Agility", attribute: "AG", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Dexterity", attribute: "DEX", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Intelligence", attribute: "INT", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Willpower", attribute: "WP", baseValue: 0, rolledValue: 0, advancements: 0 },
    { name: "Fellowhip", attribute: "FEL", baseValue: 0, rolledValue: 0, advancements: 0 },
];

const currentValue = (attribute) => {
    return attribute.baseValue + attribute.rolledValue + attribute.advancements;
};

const changeRolledValue = (attributes, attribute, value) => {
    return attributes.map(attr => {
        if(attr.attribute === attribute) {
            return {...attr, rolledValue: value};
        }
        return attr;
    })
}

const createAttributes = (race=null) => {
    switch (race) {
        case "dwarf":
            return _attributes.map(attr => {
                if (attr.attribute === 'WP') {
                    return { ...attr, baseValue: 40 }
                } else if (['WS', 'T', 'DEX'].indexOf(attr.attribute) !== -1) {
                    return { ...attr, baseValue: 30 }
                } else if (['AG', 'FEL'].indexOf(attr.attribute) !== -1) {
                    return { ...attr, baseValue: 10 }
                } else {
                    return { ...attr, baseValue: 20 }
                }

            })
        case "elf":
            return _attributes.map(attr => {
                if (attr.attribute === 'I') {
                    return { ...attr, baseValue: 40 }
                } else if (['WS', 'BS', 'AG', 'DEX', 'INT', 'WP'].indexOf(attr.attribute) !== -1) {
                    return { ...attr, baseValue: 30 }
                } else {
                    return { ...attr, baseValue: 20 }
                }

            })
        case "halfling":
            return _attributes.map(attr => {
                if (['BS', 'WP', 'DEX', 'FEL'].indexOf(attr.attribute) !== -1) {
                    return { ...attr, baseValue: 30 }
                } else if (['WS', 'S'].indexOf(attr.attribute) !== -1) {
                    return { ...attr, baseValue: 10 }
                } else {
                    return { ...attr, baseValue: 20 }
                }

            })
        case "human":
            return _attributes.map(attr => {
                return { ...attr, baseValue: 20 }
            })
        default:
            return [ ..._attributes ];
    }
}

export default _attributes;
export {createAttributes, currentValue, changeRolledValue};

