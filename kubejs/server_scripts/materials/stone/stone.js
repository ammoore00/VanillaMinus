ServerEvents.recipes(event => {
    event.recipes.create.milling(
        [
            'create:cinder_flour',
            Item.of('minecraft:soul_sand').withChance(0.05)
        ],
        'minecraft:magma_block'
    ).id('dawn:milling/cinder_flour')

    event.recipes.create.crushing(
        [
            'create:cinder_flour',
            Item.of('create:cinder_flour').withChance(0.5),
            Item.of('minecraft:soul_sand').withChance(0.05)
        ],
        'minecraft:magma_block'
    ).id('create:crushing/netherrack')

    event.remove({output: 'minecraft:netherrack', type: 'create:mixing'})
    event.recipes.create.compacting(
        'minecraft:netherrack',
        '4x create:cinder_flour'
    ).id('dawn:netherrack')

    event.replaceInput({output: 'minecraft:nether_brick'}, 'minecraft:netherrack', 'create:cinder_flour')
})