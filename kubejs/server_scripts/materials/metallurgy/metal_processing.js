ServerEvents.recipes(event => {
    let rolling = (output, input) => {
        return event.custom({
            type: 'createaddition:rolling',
            result: Item.of(output).toJson(),
            input: Item.of(input).toJson()
        })
    }

    event.recipes.create.pressing(
        'kubejs:deorum_sheet',
        'forbidden_arcanus:deorum_ingot'
    ).id('dawn:pressing/deorum_sheet')

    //------ Rolling ------//

    // Iron
    rolling(
        '2x createaddition:iron_rod',
        '#forge:plates/iron'
    ).id('createaddition:rolling/iron_ingot')

    rolling(
        'createaddition:iron_wire',
        'createaddition:iron_rod'
    ).id('createaddition:rolling/iron_plate')

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
    rolling(
        '2x createaddition:electrum_rod',
        '#forge:plates/electrum'
    ).id('createaddition:rolling/electrum_ingot')

    rolling(
        'createaddition:electrum_wire',
        'createaddition:electrum_rod'
    ).id('createaddition:rolling/electrum_plate')

    // Zinc
    rolling(
        '2x create_sa:zinc_handle',
        '#forge:plates/zinc'
    ).id('create_sa:zinc_handle_recipe')
})

ServerEvents.tags('item', event => {
    event.add('forge:rods/all_metal', 'create_sa:zinc_handle')
    event.add('forge:rods/zinc', 'create_sa:zinc_handle')
})