ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:item_vault'}, 'create:iron_sheet', 'create:sturdy_sheet')

    event.shaped(
        'supplementaries:sack',
        [
            ' S ',
            'C C',
            ' C '
        ],
        {
            S: '#forge:string',
            C: 'farmersdelight:canvas'
        }
    ).id('supplementaries:sack')
})