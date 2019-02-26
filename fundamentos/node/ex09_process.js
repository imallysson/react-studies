process.stdout.write('ASdhsd asdnsamndas dasasd?')
process.stdin.on('data', function(data) {
    process.stdout.write(`Sua sauisuahs foi ${data.toString()}\n`)
    process.exit()
})