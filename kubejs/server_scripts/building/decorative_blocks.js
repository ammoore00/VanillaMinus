ServerEvents.recipes(event => {
    event.recipes.create.haunting(
        'minecraft:purpur_block',
        'quark:midori_block'
    ).id('minecraft:purpur_block')

    event.shaped(
        'supplementaries:globe',
        [
            'WR',
            'RR',
            'SS'
        ],
        {
            W: '#minecraft:wool',
            R: 'createaddition:gold_rod',
            S: 'create:golden_sheet'
        }
    ).id('dawn:globe')

    event.shaped(
        'supplementaries:timber_frame',
        [
            'SS',
            'SS'
        ],
        {
            S: '#forge:rods/wooden'
        }
    ).id('supplementaries:timber_frame')

    event.shaped(
        'minecraft:lightning_rod',
        [
            'I',
            'R',
            'R'
        ],
        {
            I: 'minecraft:copper_ingot',
            R: 'createaddition:copper_rod'
        }
    ).id('minecraft:lightning_rod')

    event.stonecutting(
        '2x quark:blaze_lantern',
        'kubejs:blazing_ingot'
    ).id('quark:building/crafting/blaze_lantern')

    event.remove({output: /mcwtrpdoors:.*_ranch_trapdoor/})
    event.remove({output: /mcwtrpdoors:.*_bark_trapdoor/})

    event.shapeless(
        'minecraft:tinted_glass',
        [
            '#forge:glass/colorless',
            'minecraft:amethyst_shard'
        ]
    ).id('minecraft:tinted_glass')
})