ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:barbed_wire'})
    event.remove({output: 'createaddition:electrum_amulet'})

    event.replaceInput({output: 'quark:trowel'}, 'minecraft:iron_ingot', 'create:iron_sheet')

    event.remove({output: 'shieldexp:griefer_shield'})
    event.remove({output: 'shieldexp:paragon_shield'})
    event.remove({output: 'shieldexp:wooden_shield'})
    event.remove({output: 'shieldexp:iron_shield'})
    event.remove({output: 'shieldexp:golden_shield'})

    event.recipes.create.mechanical_crafting(
        'minecraft:elytra',
        [
            ' MCM ',
            'BPEPB',
            'BP PB',
            'BP PB',
            'B   B',
        ],
        {
            M: 'create:precision_mechanism',
            C: 'create:contraption_controls',
            B: 'createaddition:brass_rod',
            P: 'minecraft:phantom_membrane',
            E: 'create_sa:steam_engine'
        }
    ).id('dawn:glider')

    event.replaceInput({output: 'create:extendo_grip'}, '#forge:rods/wooden', 'createaddition:brass_rod')
    event.replaceInput({output: 'create:potato_cannon'}, 'create:precision_mechanism', 'create_sa:hydraulic_engine')
    event.replaceInput({output: 'create:wand_of_symmetry'}, 'create:precision_mechanism', 'create_sa:steam_engine')

    event.shaped(
        'create:copper_backtank',
        [
            'AKA',
            'CTC',
            'CHC'
        ],
        {
            A: 'create:andesite_alloy',
            K: 'create_sa:heat_engine',
            C: 'create:copper_sheet',
            T: 'create:fluid_tank',
            H: 'create_sa:hydraulic_engine'
        }
    ).id('create:crafting/appliances/copper_backtank')

    event.replaceInput({output: 'create:filter'}, 'minecraft:iron_nugget', 'createaddition:iron_rod')
    event.replaceInput({output: 'create:filter'}, '#minecraft:wool', 'farmersdelight:canvas')
    
    event.replaceInput({output: 'create:attribute_filter'}, 'create:brass_nugget', 'createaddition:brass_rod')
    event.replaceInput({output: 'create:attribute_filter'}, '#minecraft:wool', 'farmersdelight:canvas')

    event.shaped(
        'minecraft:map',
        [
            'PPP',
            'PIP',
            'PPP'
        ],
        {
            P: 'minecraft:paper',
            I: 'supplementaries:antique_ink'
        }
    ).id('minecraft:map')

    event.replaceInput({output: 'minecraft:lodestone'}, 'minecraft:netherite_ingot', 'minecraft:iron_ingot')

    event.shaped(
        'minecraft:shield',
        [
            'WIW',
            'WSW',
            'WIW'
        ],
        {
            W: '#minecraft:planks',
            I: 'create:iron_sheet',
            S: '#forge:rods/wooden'
        }
    ).id('minecraft:shield')

    event.replaceInput({output: 'shieldexp:diamond_shield'}, "minecraft:diamond", "kubejs:adamantine_ingot")
})