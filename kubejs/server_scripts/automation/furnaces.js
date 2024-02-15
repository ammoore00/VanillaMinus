ServerEvents.recipes(event => {
    //event.remove({id: 'quark:building/crafting/furnaces/mixed_furnace'})

    // Misnamed recipe
    event.remove({id: 'quark:building/crafting/furnaces/cobblestone_furnace'})

    event.shaped(
        'quark:blackstone_furnace',
        [
            'SSS',
            //'C C',
            'S S',
            'SSS'
        ],
        {
            S: 'minecraft:blackstone',
            C: 'minecraft:copper_ingot'
        }
    ).id('quark:building/crafting/furnaces/blackstone_furnace')

    event.shaped(
        'quark:deepslate_furnace',
        [
            'SSS',
            //'C C',
            'S S',
            'SSS'
        ],
        {
            S: 'minecraft:cobbled_deepslate',
            C: 'minecraft:copper_ingot'
        }
    ).id('quark:building/crafting/furnaces/deepslate_furnace')

    event.remove({mod: 'quark', output: 'minecraft:blast_furnace'})

    event.shaped(
        'minecraft:blast_furnace',
        [
            'III',
            'IFI',
            'SSS'
        ],
        {
            I: 'createdeco:industrial_iron_sheet',
            F: '#dawn:furnaces',
            S: 'minecraft:smooth_stone'
        }
    ).id('minecraft:blast_furnace')
})

ServerEvents.tags('item', event => {
    event.add('dawn:furnaces', [
        'minecraft:furnace',
        'quark:deepslate_furnace',
        'quark:blackstone_furnace'
    ])
})