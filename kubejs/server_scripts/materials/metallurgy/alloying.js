ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        '2x createaddition:electrum_ingot',
        [
            'minecraft:gold_ingot',
            'create:zinc_ingot'
        ]
    ).heated()
    .id('btw:mixing/electrum_alloying')
})