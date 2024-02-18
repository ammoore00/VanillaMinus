ServerEvents.recipes(event => {
    let rolling = (output, input) => {
        return event.custom({
            type: 'createaddition:rolling',
            result: Item.of(output).toJson(),
            input: Item.of(input).toJson()
        })
    }

    event.remove({output: 'create:industrial_iron_block', mod: 'create'})

    // Iron
    event.remove({output: 'createaddition:iron_wire'})
    rolling(
        '2x createaddition:iron_rod',
        '#forge:plates/iron'
    ).id('createaddition:rolling/iron_ingot')

    // Gold
    rolling(
        '2x createaddition:gold_rod',
        '#forge:plates/gold'
    ).id('createaddition:rolling/gold_ingot')

    rolling(
        'createaddition:gold_wire',
        'createaddition:gold_rod'
    ).id('createaddition:rolling/gold_plate')

    // Copper
    rolling(
        '2x createaddition:copper_rod',
        '#forge:plates/copper'
    ).id('createaddition:rolling/copper_ingot')

    rolling(
        'createaddition:copper_wire',
        'createaddition:copper_rod'
    ).id('createaddition:rolling/copper_plate')

    // Brass
    rolling(
        '2x createaddition:brass_rod',
        '#forge:plates/brass'
    ).id('createaddition:rolling/brass_ingot')

    // Electrum
    event.remove({output: 'createaddition:electrum_wire'})
    event.remove({output: 'createaddition:electrum_rod'})

    // Zinc
    event.remove({output: 'create_sa:zinc_handle'})
    event.remove({output: 'createaddition:zinc_sheet'})
})

ServerEvents.tags('item', event => {
})