ServerEvents.recipes(event => {

    //------ Iron Smelting ------//

    event.smelting(
        'minecraft:iron_nugget',
        'minecraft:raw_iron'
    ).xp(0.7)
    .id('minecraft:iron_ingot_from_smelting_raw_iron')

    event.blasting(
        '2x minecraft:iron_nugget',
        'minecraft:raw_iron'
    ).xp(0.7)
    .id('minecraft:iron_ingot_from_blasting_raw_iron')

    event.smelting(
        '2x minecraft:iron_nugget',
        'create:crushed_raw_iron'
    ).xp(0.1)
    .id('create:smelting/iron_ingot_from_crushed')

    event.blasting(
        '3x minecraft:iron_nugget',
        'create:crushed_raw_iron'
    ).xp(0.1)
    .id('create:blasting/iron_ingot_from_crushed')

    event.recipes.create.splashing(
        [
            '4x minecraft:iron_nugget',
            Item.of('minecraft:redstone').withChance(0.75)
        ],
        'create:crushed_raw_iron'
    ).id('create:splashing/crushed_raw_iron')

    //------ Gold Smelting ------//
    
    event.smelting(
        'minecraft:gold_nugget',
        'minecraft:raw_gold'
    ).xp(0.7)
    .id('minecraft:gold_ingot_from_smelting_raw_gold')

    event.blasting(
        '2x minecraft:gold_nugget',
        'minecraft:raw_gold'
    ).xp(0.7)
    .id('minecraft:gold_ingot_from_blasting_raw_gold')

    event.smelting(
        '2x minecraft:gold_nugget',
        'create:crushed_raw_gold'
    ).xp(0.1)
    .id('create:smelting/gold_ingot_from_crushed')

    event.blasting(
        '3x minecraft:gold_nugget',
        'create:crushed_raw_gold'
    ).xp(0.1)
    .id('create:blasting/gold_ingot_from_crushed')

    event.recipes.create.splashing(
        [
            '4x minecraft:gold_nugget',
            Item.of('minecraft:redstone').withChance(0.75)
        ],
        'create:crushed_raw_gold'
    ).id('create:splashing/crushed_raw_gold')

    //------ Copper Smelting ------//

    event.campfireCooking(
        'create:copper_nugget',
        'minecraft:raw_copper'
    ).id('iguanatweaksreborn:copper_ingot_from_campfire')
})