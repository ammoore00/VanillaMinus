ServerEvents.recipes(event => {
    event.remove({mod: 'geore', not: {input: /.*quartz.*/}})
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

    // Quartz
    event.remove({output: 'minecraft:quartz'})
    event.recipes.create.sandpaper_polishing(
        'minecraft:quartz',
        'geore:quartz_shard'
    ).id('dawn:quartz_polishing')

    event.stonecutting(
        '2x minecraft:quartz_block',
        'minecraft:quartz'
    ).id('minecraft:quartz_block')
    
    event.stonecutting(
        '2x geore:quartz_block',
        'geore:quartz_shard'
    ).id('geore:quartz_block')

    event.recipes.create.crushing(
        Item.of('geore:quartz_shard').withChance(0.5),
        'geore:quartz_block'
    ).id('dawn:crushing/quartz_block')

    event.recipes.create.crushing(
        'geore:quartz_shard',
        'geore:quartz_cluster'
    ).id('dawn:crushing/quartz_cluster')

    // Amethyst
    event.remove({output: 'minecraft:amethyst_shard', type: 'farmersdelight:cutting'})

    event.recipes.create.sandpaper_polishing(
        'kubejs:polished_amethyst',
        'minecraft:amethyst_shard'
    ).id('dawn:amethyst_polishing')

    event.stonecutting(
        '2x minecraft:amethyst_block',
        'minecraft:amethyst_shard'
    ).id('minecraft:amethyst_block')

    event.recipes.create.crushing(
        Item.of('minecraft:amethyst_shard').withChance(0.5),
        'minecraft:amethyst_block'
    ).id('create:crushing/amethyst_block')

    event.recipes.create.crushing(
        'minecraft:amethyst_shard',
        'minecraft:amethyst_cluster'
    ).id('create:crushing/amethyst_cluster')
})

ServerEvents.tags('item', event => {
    event.removeAll('forge:geore_blocks')
    event.removeAll('forge:geore_shards')
})