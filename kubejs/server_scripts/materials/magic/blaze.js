ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:blaze_powder'})

    event.recipes.create.milling(
        [
            '2x minecraft:blaze_powder',
            Item.of('minecraft:blaze_powder').withChance(0.25)
        ],
        'minecraft:torchflower'
    ).id('dawn:milling/blaze_powder')

    event.recipes.create.compacting(
        'kubejs:blazing_ingot',
        '9x minecraft:blaze_powder'
    ).id('dawn:compacting/blazing_ingot')

    event.recipes.create.pressing(
        'kubejs:blazing_sheet',
        'kubejs:blazing_ingot'
    ).id('dawn:pressing/blazing_sheet')

    event.custom({
        type: 'createaddition:rolling',
        result: Item.of('2x minecraft:blaze_rod').toJson(),
        input: Item.of('kubejs:blazing_sheet').toJson()
    }).id('dawn:rolling/blazing_rod')

    event.shaped(
        'create:blaze_burner',
        [
            'RBR',
            'SSS'
        ],
        {
            R: 'minecraft:blaze_rod',
            B: 'kubejs:blazing_ingot',
            S: 'create:iron_sheet'
        }
    ).id('create:crafting/kinetics/empty_blaze_burner')
})