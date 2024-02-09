ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_stone_tool', [
        "minecraft:iron_block",
        "minecraft:raw_iron_block",
        "minecraft:iron_ore",
        "minecraft:deepslate_iron_ore"
    ])

    event.add('minecraft:needs_iron_tool', [
        "minecraft:iron_block",
        "minecraft:raw_iron_block",
        "minecraft:iron_ore",
        "minecraft:deepslate_iron_ore"
    ])
})