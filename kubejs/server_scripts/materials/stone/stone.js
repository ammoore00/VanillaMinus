ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:cinder_flour'}, 'minecraft:netherrack', 'minecraft:magma_block')

    event.remove({output: 'minecraft:netherrack', type: 'create:mixing'})
    event.recipes.create.compacting(
        'minecraft:netherrack',
        '4x create:cinder_flour'
    ).id('dawn:netherrack')

    event.replaceInput({output: 'minecraft:nether_brick'}, 'minecraft:netherrack', 'create:cinder_flour')
})