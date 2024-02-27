ServerEvents.recipes(event => {
    event.replaceInput({output: 'minecraft:comparator'}, 'minecraft:quartz', 'kubejs:redstone_eye')
    event.replaceInput({output: 'minecraft:observer'}, 'minecraft:quartz', 'kubejs:redstone_eye')

    event.shaped(
        '2x create:redstone_link',
        [
            'E',
            'C',
            'M'
        ],
        {
            E: 'create:electron_tube',
            C: 'create:brass_casing',
            M: 'create_sa:steam_engine'
        }
    ).id('create:crafting/logistics/redstone_link')

    event.remove({output: 'minecraft:hopper'})
})