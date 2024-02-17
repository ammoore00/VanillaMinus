ServerEvents.recipes(event => {
    event.remove({mod: 'geore', not: {input: /quartz/}})
    event.remove({output: 'geore:quartz_geore_spyglass'})

    event.recipes.create.mixing(
        'create:rose_quartz',
        [
            'geore:quartz_shard',
            '8x minecraft:redstone'
        ]
    ).id('create:crafting/materials/rose_quartz')

    event.recipes.create.mixing(
        'create:polished_rose_quartz',
        [
            'minecraft:quartz',
            '8x minecraft:redstone'
        ]
    ).id('create:crafting/materials/polished_rose_quartz')

    event.remove({output: 'minecraft:quartz'})

    event.recipes.create.sandpaper_polishing(
        'minecraft:quartz',
        'geore:quartz_shard'
    ).id('dawn:quartz_polishing')
})

ServerEvents.tags('item', event => {
    event.removeAll('forge:geore_blocks')
    event.removeAll('forge:geore_shards')
})