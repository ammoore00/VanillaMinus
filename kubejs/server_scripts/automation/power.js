ServerEvents.recipes(event => {
    event.shaped(
        'create:steam_engine',
        [
            ' B ',
            ' A ',
            'CHC'
        ],
        {
            B: 'create:brass_sheet',
            A: 'create:andesite_alloy',
            C: 'create:copper_sheet',
            H: 'create_sa:hydraulic_engine'
        }
    ).id('create:crafting/kinetics/steam_engine')
})