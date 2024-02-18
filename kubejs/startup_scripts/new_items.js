StartupEvents.registry('item', event => {
    event.create('adamantine_ingot');

    event.create('blazing_ingot');
    event.create('blazing_sheet');
    
    event.create('polished_amethyst');
    event.create('redstone_eye');

    let createSmithingUpgrade = (id, name, applies, ingredients) => {
        event.create(id)
            .displayName('Smithing Template')
            .tooltip('§7' + name)
            .tooltip('')
            .tooltip('§7Applies to:')
            .tooltip(' §9' + applies)
            .tooltip('§7Ingredients:')
            .tooltip(' §9' + ingredients)
    }

    createSmithingUpgrade('test_upgrade', 'Test Upgrade', 'Test Base', 'Test Material')
})