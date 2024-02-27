ServerEvents.recipes(event => {
    event.remove({mod: 'immersive_weathering', input: '#immersive_weathering:wax'})

    event.shaped(
        'minecraft:composter',
        [
            'P P',
            'P P',
            'PPP'
        ],
        {
            P: '#minecraft:planks'
        }
    ).id('minecraft:composter')
})