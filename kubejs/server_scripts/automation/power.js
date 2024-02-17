ServerEvents.recipes(event => {

    //------ Power Generation ------//

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

    //------ Power Transmission ------//

    event.shapeless(
        'create:gearbox',
        [
            'create:andesite_casing',
            'create_sa:heat_engine'
        ]
    ).id('create:crafting/kinetics/gearbox')
})