ServerEvents.recipes(event => {
    event.shaped(
        'littlelogistics:barge',
        [
            'RCR',
            'SSS'
        ],
        {
            R: 'createaddition:iron_rod',
            C: '#forge:chests/wooden',
            S: 'create:iron_sheet'
        }
    ).id('littlelogistics:barge')

    event.shaped(
        'littlelogistics:barrel_barge',
        [
            'RCR',
            'SSS'
        ],
        {
            R: 'createaddition:iron_rod',
            C: '#forge:barrels',
            S: 'create:iron_sheet'
        }
    ).id('littlelogistics:barrel_barge')

    event.shaped(
        'littlelogistics:fishing_barge',
        [
            'FFF',
            'SSS'
        ],
        {
            F: 'minecraft:fishing_rod',
            S: 'create:iron_sheet'
        }
    ).id('littlelogistics:fishing_barge')

    event.shaped(
        'littlelogistics:fluid_barge',
        [
            'RTR',
            'SSS'
        ],
        {
            R: 'createaddition:iron_rod',
            T: 'create:fluid_tank',
            S: 'create:iron_sheet'
        }
    ).id('littlelogistics:fluid_barge')

    event.shaped(
        'littlelogistics:seater_barge',
        [
            'RCR',
            'SSS'
        ],
        {
            R: 'createaddition:iron_rod',
            C: '#create:seats',
            S: 'create:iron_sheet'
        }
    ).id('littlelogistics:seater_barge')
})