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
        'minecraft:sniffer_egg',
        'minecraft:turtle_egg'
    ).id('dawn:sniffer_egg')

    event.replaceInput({output: 'farmersdelight:canvas'}, 'farmersdelight:straw', 'supplementaries:flax')

    event.shaped(
        'minecraft:phantom_membrane',
        [
            ' B ',
            'BCB',
            ' B '
        ],
        {
            B: 'createaddition:brass_rod',
            C: 'farmersdelight:canvas'
        }
    ).id('dawn:reinforced_canvas')

    event.remove({output: 'minecraft:stick', mod: 'quark'})
})

ServerEvents.tags('item', event => {
    event.add('dawn:ink_materials', [
        'minecraft:ink_sac',
        'minecraft:glow_ink_sac',
        'minecraft:black_dye'
    ])
})