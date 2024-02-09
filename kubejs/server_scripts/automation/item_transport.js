ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:chute'}, 'minecraft:iron_ingot', 'createdeco:industrial_iron_ingot')
    event.replaceInput({output: 'create:chute'}, 'create:iron_sheet', 'createdeco:industrial_iron_sheet')

    event.remove({output: 'littlelogistics:rapid_hopper'})
})