ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:hose_pulley'}, 'minecraft:dried_kelp_block', 'create_sa:hydraulic_engine')
    
    event.replaceInput({output: 'create_enchantment_industry:enchanting_guide'}, 'minecraft:book', 'create_sa:steam_engine')
    event.replaceInput({output: 'create_enchantment_industry:disenchanter'}, '#create:sandpaper', 'create_sa:steam_engine')
    event.replaceInput({output: 'create_enchantment_industry:printer'}, 'minecraft:dried_kelp', 'create_sa:steam_engine')
})