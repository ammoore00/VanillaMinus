ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:contraption_controls'}, '#minecraft:buttons', 'create_sa:heat_engine')
})

ServerEvents.tags('block', event => {
    event.add('create:non_movable', [
        '#lootr:containers',
        'minecraft:budding_amethyst',
        'geore:budding_quartz'
    ])
})