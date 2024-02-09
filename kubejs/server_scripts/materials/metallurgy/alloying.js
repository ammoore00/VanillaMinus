ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        '2x createaddition:electrum_ingot',
        [
            'minecraft:gold_ingot',
            'create:zinc_ingot'
        ]
    ).heated()
    .id('btw:mixing/electrum_alloying')

    event.recipes.create.mixing(
        'forbidden_arcanus:deorum_ingot',
        [
            'createaddition:electrum_ingot',
            '2x forbidden_arcanus:arcane_crystal_dust',
            '2x forbidden_arcanus:mundabitur_dust'
        ]
    ).heated()
    .id('forbidden_arcanus:deorum_ingot')
})