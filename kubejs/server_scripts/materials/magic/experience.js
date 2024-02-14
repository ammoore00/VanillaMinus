ServerEvents.recipes(event => {
    event.shaped(
        'create_sa:heap_of_experience',
        [
            'NNN',
            'NNN',
            'NNN'
        ],
        {
            N: 'create:experience_nugget'
        }
    ).id('create_sa:heap_of_experience_recipe')

    event.replaceInput({output: 'create:experience_block'}, 'create:experience_nugget', 'create_sa:heap_of_experience')
    event.replaceOutput({input: 'create:experience_block'}, 'create:experience_nugget', 'create_sa:heap_of_experience')

    event.custom({
        type: 'create_enchantment_industry:disenchanting',
        ingredients: [
            Ingredient.of('create_sa:heap_of_experience').toJson()
        ],
        results: [
            Fluid.of('create_enchantment_industry:experience', 27).toJson()
        ]
    }).id('create_enchantment_industry:disenchanting/experience_sheet')

    event.remove({input: 'create_sa:heap_of_experience', type: 'create_enchantment_industry:disenchanting'})

    event.custom({
        type: 'create_enchantment_industry:disenchanting',
        ingredients: [
            Ingredient.of('create:experience_block').toJson()
        ],
        results: [
            Fluid.of('create_enchantment_industry:experience', 243).toJson()
        ]
    }).id('create_enchantment_industry:disenchanting/experience_block')
})