ServerEvents.recipes(event => {
    event.shapeless(
        'supplementaries:antique_ink',
        [
            'minecraft:glass_bottle',
            '#btw:ink_materials'
        ]
    ).id('btw:antique_ink')

    event.recipes.create.filling(
        'supplementaries:antique_ink',
        [
            'minecraft:glass_bottle',
            Fluid.of('create_enchantment_industry:ink', 250)
        ]
    ).id('btw:filling/antique_ink')
})

ServerEvents.tags('item', event => {
    event.add('btw:ink_materials', [
        'minecraft:ink_sac',
        'minecraft:glow_ink'
    ])
})