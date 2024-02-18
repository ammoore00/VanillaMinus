ServerEvents.recipes(event => {
    event.recipes.create.haunting(
        'minecraft:crimson_fungus',
        'farmersdelight:red_mushroom_colony'
    ).id('create:haunting/crimson_fungus')

    event.shapeless(
        'minecraft:crimson_nylium',
        [
            'minecraft:netherrack',
            'minecraft:crimson_fungus'
        ]
    ).id('dawn:crimson_nylium')
    
    event.recipes.create.haunting(
        'minecraft:warped_fungus',
        'farmersdelight:brown_mushroom_colony'
    ).id('create:haunting/warped_fungus')

    event.shapeless(
        'minecraft:warped_nylium',
        [
            'minecraft:netherrack',
            'minecraft:crimson_fungus'
        ]
    ).id('dawn:warped_nylium')
})