ServerEvents.recipes(event => {
    event.replaceInput({output: 'minecraft:diamond_pickaxe'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_axe'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_shovel'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_sword'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_hoe'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'farmersdelight:diamond_knife'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    
    event.replaceInput({output: 'minecraft:diamond_helmet'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_chestplate'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_leggings'}, "minecraft:diamond", "kubejs:adamantine_ingot")
    event.replaceInput({output: 'minecraft:diamond_boots'}, "minecraft:diamond", "kubejs:adamantine_ingot")
})

ServerEvents.tags("item", event => {
    event.add('minecraft:axes', 'create_sa:brass_axe')
    event.add('minecraft:hoes', 'create_sa:brass_hoe')
    event.add('minecraft:pickaxes', 'create_sa:brass_pickaxe')
    event.add('minecraft:shovels', 'create_sa:brass_shovel')
    event.add('minecraft:swords', 'create_sa:brass_sword')
})