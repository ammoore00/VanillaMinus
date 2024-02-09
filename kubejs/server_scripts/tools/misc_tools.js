ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:barbed_wire'})
    event.remove({output: 'createaddition:electrum_amulet'})

    event.remove({output: 'forbidden_arcanus:quantum_catcher'})

    event.replaceInput({output: 'quark:trowel'}, 'minecraft:iron_ingot', 'create:iron_sheet')
})