ServerEvents.recipes(event => {
    event.shapeless(
        'minecraft:crimson_nylium',
        [
            'minecraft:netherrack',
            'minecraft:crimson_fungus'
        ]
    ).id('dawn:crimson_nylium')

    event.shapeless(
        'minecraft:warped_nylium',
        [
            'minecraft:netherrack',
            'minecraft:warped_fungus'
        ]
    ).id('dawn:warped_nylium')
})