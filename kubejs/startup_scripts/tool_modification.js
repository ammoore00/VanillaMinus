ItemEvents.modification(event => {
    event.modify('create_sa:copper_pickaxe', item => {
        item.tier = tier => {
            tier.level = 3
        }
    })
    
    event.modify('create_sa:copper_axe', item => {
        item.tier = tier => {
            tier.level = 3
        }
    })
    
    event.modify('create_sa:copper_shovel', item => {
        item.tier = tier => {
            tier.level = 3
        }
    })
    
    event.modify('create_sa:copper_sword', item => {
        item.tier = tier => {
            tier.level = 3
        }
    })
})