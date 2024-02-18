ServerEvents.recipes(event => {
    event.replaceInput({output: 'create_enchantment_industry:enchanting_guide'}, 'minecraft:book', 'create_sa:steam_engine')
    event.replaceInput({output: 'create_enchantment_industry:disenchanter'}, '#create:sandpaper', 'create_sa:steam_engine')
    event.replaceInput({output: 'create_enchantment_industry:printer'}, 'minecraft:dried_kelp', 'create_sa:steam_engine')
    
    event.replaceInput({output: 'create:mechanical_press'}, 'create:shaft', 'create_sa:heat_engine')
    event.replaceInput({output: 'create:encased_fan'}, 'create:shaft', 'create_sa:heat_engine')
    event.replaceInput({output: 'create:mechanical_mixer'}, 'create:cogwheel', 'create_sa:heat_engine')
    event.replaceInput({output: 'create:millstone'}, 'create:cogwheel', 'create_sa:heat_engine')

    event.replaceInput({output: 'create:weighted_ejector'}, 'create:cogwheel', 'create_sa:heat_engine')
    
    event.replaceInput({output: 'create:mechanical_arm'}, 'create:brass_sheet', 'createaddition:brass_rod')
    
    event.replaceInput({output: 'create:mechanical_crafter'}, '#forge:workbench', 'create:precision_mechanism')

    event.shaped(
        'create:mechanical_drill',
        [
            'D',
            'C',
            'M'
        ],
        {
            D: 'create_sa:brass_drill_head',
            C: 'create:andesite_casing',
            M: 'create_sa:heat_engine'
        }
    ).id('create:crafting/kinetics/mechanical_drill')

    event.shaped(
        'create:mechanical_saw',
        [
            ' I ',
            'ICI',
            ' M '
        ],
        {
            I: 'create:iron_sheet',
            C: 'create:andesite_casing',
            M: 'create_sa:heat_engine'
        }
    ).id('create:crafting/kinetics/mechanical_saw')

    event.shaped(
        'createaddition:rolling_mill',
        [
            'ISI',
            'ACA',
            'AMA'
        ],
        {
            I: 'create:iron_sheet',
            S: 'create:shaft',
            A: 'create:andesite_alloy',
            C: 'create:andesite_casing',
            M: 'create_sa:heat_engine'
        }
    ).id('createaddition:crafting/rolling_mill')
})