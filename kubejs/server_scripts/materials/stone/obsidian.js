ServerEvents.recipes(event => {
    event.remove({output: 'forbidden_arcanus:obsidian_with_iron'})
    event.remove({id: 'forbidden_arcanus:obsidian_ingot'})
    event.remove({id: 'forbidden_arcanus:obsidian_ingot_from_blasting'})

    event.replaceOutput({id: 'create:sequenced_assembly/sturdy_sheet'}, 'create:sturdy_sheet', 'forbidden_arcanus:obsidian_ingot')

    event.recipes.create.pressing(
        'create:sturdy_sheet',
        'forbidden_arcanus:obsidian_ingot'
    ).id('btw:sturdy_sheet')
})