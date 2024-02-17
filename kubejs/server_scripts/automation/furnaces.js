ServerEvents.recipes(event => {
    event.remove({id: 'quark:building/crafting/furnaces/mixed_furnace'})
    event.remove({id: 'quark:building/crafting/furnaces/cobblestone_furnace'})

    event.shaped(
        'minecraft:furnace',
        [
            'SSS',
            'S S',
            'SSS'
        ],
        {
            S: 'minecraft:cobblestone'
        }
    ).id('minecraft:furnace')

    event.remove({mod: 'quark', output: 'minecraft:blast_furnace'})

    event.shaped(
        'minecraft:blast_furnace',
        [
            'III',
            'IFI',
            'SSS'
        ],
        {
            I: 'create:iron_sheet',
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