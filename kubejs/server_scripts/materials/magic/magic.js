ServerEvents.recipes(event => {
    event.recipes.create.milling(
        '2x minecraft:glowstone_dust',
        'minecraft:glow_berries'
    ).id('dawn:milling/glowstone_dust')
})