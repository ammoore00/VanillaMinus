ServerEvents.recipes(event => {
    event.remove({output: 'create_sa:fan_component'})
    event.remove({output: 'create_sa:vault_component'})
    event.remove({input: 'create_sa:vault_component'})
    
    event.remove({output: 'create_enchantment_industry:experience_rotor'})

    event.shaped(
        'create_sa:brass_drill_head',
        [
            ' A ',
            'AIA'
        ],
        {
            A: 'create:andesite_alloy',
            I: 'minecraft:iron_ingot'
        }
    ).id('create_sa:brass_drill_head_recipe')

    event.remove({output: 'create_sa:heat_engine'})
    event.shaped(
        '2x create_sa:heat_engine',
        [
            ' Z ',
            'GAG',
            ' C '
        ],
        {
            Z: 'create:zinc_nugget',
            G: 'create:cogwheel',
            A: 'create:andesite_alloy',
            C: 'create:copper_nugget'
        }
    ).id('dawn:kinetic_mechanism')
    event.shaped(
        '2x create_sa:heat_engine',
        [
            ' C ',
            'GAG',
            ' Z '
        ],
        {
            Z: 'create:zinc_nugget',
            G: 'create:cogwheel',
            A: 'create:andesite_alloy',
            C: 'create:copper_nugget'
        }
    ).id('dawn:kinetic_mechanism_inverted')

    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_sa:steam_engine').withChance(120),
            Item.of('createaddition:electrum_sheet').withChance(8),
            Item.of('create:cogwheel').withChance(4),
            Item.of('create:large_cogwheel').withChance(2)
        ],
        'createaddition:electrum_sheet',
        [
            event.recipes.create.deploying(
                'create_sa:incomplete_steam_engine',
                [
                    'create_sa:incomplete_steam_engine',
                    'create:cogwheel'
                ]
            ),
            event.recipes.create.deploying(
                'create_sa:incomplete_steam_engine',
                [
                    'create_sa:incomplete_steam_engine',
                    'create:large_cogwheel'
                ]
            ),
            event.recipes.create.deploying(
                'create_sa:incomplete_steam_engine',
                [
                    'create_sa:incomplete_steam_engine',
                    'minecraft:amethyst_shard'
                ]
            )
        ]
    ).transitionalItem('create_sa:incomplete_steam_engine')
    .loops(5)
    .id('create_sa:steam_engine_recipe')

    event.shapeless(
        'createaddition:straw',
        [
            'create_sa:hydraulic_engine',
            'create:mechanical_pump'
        ]
    ).id('createaddition:rolling/straw')

    event.shaped(
        'create:electron_tube',
        [
            'Q',
            'S',
            'W'
        ],
        {
            Q: 'create:polished_rose_quartz',
            S: 'create:iron_sheet',
            W: 'createaddition:copper_wire'
        }
    ).id('create:crafting/materials/electron_tube')

    event.shaped(
        'kubejs:redstone_eye',
        [
            'Q',
            'S',
            'W'
        ],
        {
            Q: 'kubejs:polished_amethyst',
            S: 'create:iron_sheet',
            W: 'createaddition:gold_wire'
        }
    ).id('dawn:redstone_eye')
})