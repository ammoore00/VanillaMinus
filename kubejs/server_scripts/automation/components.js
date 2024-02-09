ServerEvents.recipes(event => {
    event.remove({output: 'create_sa:brass_drill_head'})
    event.remove({output: 'create_sa:fan_component'})
    event.remove({output: 'create_sa:vault_component'})
    
    event.remove({output: 'create_enchantment_industry:experience_rotor'})

    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_sa:steam_engine').withChance(120),
            Item.of('kubejs:deorum_sheet').withChance(8),
            Item.of('create:cogwheel').withChance(4),
            Item.of('create:large_cogwheel').withChance(2)
        ],
        'kubejs:deorum_sheet',
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
                    'forbidden_arcanus:arcane_crystal'
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

    event.replaceInput({output: 'create:propeller'}, 'create:iron_sheet', 'createdeco:industrial_iron_sheet')
})