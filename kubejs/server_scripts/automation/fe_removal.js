ServerEvents.recipes(event => {
    event.remove({output:'createaddition:electric_motor'})
    event.remove({output:'createaddition:alternator'})
    event.remove({output:'createaddition:connector'})
    event.remove({output:'createaddition:small_light_connector'})
    event.remove({output:'createaddition:large_connector'})
    event.remove({output:'createaddition:redstone_relay'})
    event.remove({output:'createaddition:tesla_coil'})
    event.remove({output:'createaddition:modular_accumulator'})
    event.remove({output:'createaddition:portable_energy_interface'})
    event.remove({output:'createaddition:capacitor'})
    event.remove({output:/createaddition:.*spool/})
})