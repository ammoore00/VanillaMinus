ServerEvents.loaded(event => {
    event.server.runCommandSilent('gamerule doPatrolSpawning false')
    event.server.runCommandSilent('gamerule doInsomnia false')
    event.server.runCommandSilent('gamerule reducedDebugInfo true')
    event.server.runCommandSilent('gamerule decorative_blocks:disableThatch true')
})