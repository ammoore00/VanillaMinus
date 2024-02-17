ServerEvents.recipes(event => {
    event.shapeless(
        'supplementaries:antique_ink',
        [
            'minecraft:glass_bottle',
            '#dawn:ink_materials'
        ]
    ).id('dawn:antique_ink')

    event.recipes.create.filling(
        'supplementaries:antique_ink',
        [
            'minecraft:glass_bottle',
            Fluid.of('create_enchantment_industry:ink', 250)
        ]
    ).id('dawn:filling/antique_ink')

    event.recipes.create.haunting(
        Item.of('minecraft:sniffer_egg').withChance(0.25),
        'minecraft:turtle_egg'
    ).id('dawn:sniffer_egg')
})

ServerEvents.tags('item', event => {
    event.add('dawn:ink_materials', [
        'minecraft:ink_sac',
        'minecraft:glow_ink'
    ])
})