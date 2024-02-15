ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:barbed_wire'})
    event.remove({output: 'createaddition:electrum_amulet'})

    event.replaceInput({output: 'quark:trowel'}, 'minecraft:iron_ingot', 'create:iron_sheet')

    event.remove({output: 'shieldexp:griefer_shield'})
    event.remove({output: 'shieldexp:paragon_shield'})
    event.remove({output: 'shieldexp:wooden_shield'})
    event.remove({output: 'shieldexp:iron_shield'})
    event.remove({output: 'shieldexp:golden_shield'})
})