ServerEvents.recipes(event => {
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
})