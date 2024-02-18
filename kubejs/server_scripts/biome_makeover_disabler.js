ServerEvents.recipes(event => {
    event.remove({mod: 'biomemakeover', not: {output: /.*(ancient|tapestry|terracotta|foxglove).*/}})
})