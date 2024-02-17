ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        '2x createaddition:electrum_ingot',
        [
            'minecraft:gold_ingot',
            'create:zinc_ingot'
        ]
    ).heated()
    .id('dawn:mixing/electrum_alloying')

    event.recipes.create.mixing(
        'kubejs:adamantine_ingot',
        [
            'minecraft:iron_ingot',
            'createaddition:diamond_grit'
        ]
    ).heated()
    .id('dawn:mixing/adamantine')

    event.recipes.create.mixing(
        'minecraft:netherite_ingot',
        [
            'minecraft:netherite_scrap',
            'minecraft:iron_ingot'
        ]
    ).superheated()
    .id('dawn:mixing/steel')

    event.remove({id: 'minecraft:netherite_ingot'})
    event.replaceInput({input: 'minecraft:netherite_scrap', type: 'minecraft:crafting_shapeless'}, 'minecraft:netherite_scrap', 'minecraft:netherite_ingot')
})