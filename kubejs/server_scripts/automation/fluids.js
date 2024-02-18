ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:hose_pulley'}, 'minecraft:dried_kelp_block', 'create_sa:hydraulic_engine')
    event.replaceInput({output: 'create:fluid_valve'}, 'create:iron_sheet', 'createaddition:iron_rod')
    event.replaceInput({output: 'create:mechanical_pump'}, 'create:cogwheel', 'create_sa:heat_engine')
})