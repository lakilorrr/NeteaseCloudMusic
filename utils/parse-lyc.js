export function parseLrc(str) {
    const RegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/
    const lineArray = str.split('\n')
    const timeTransArray = []
    for (let line of lineArray) {
        if (line) {
            const time = RegExp.exec(line)
            if (!time) continue
            const h = time[1] * 60 * 1000
            const s = time[2] * 1000
            const ms = time[3].length === 3 ? time[3] * 1 : time[3] * 10
            const total = h + s + ms
            const lrcLine = line.replace(RegExp, '').trim()
            const lineObj = { total, lrcLine }
            timeTransArray.push(lineObj)
        }
    }
    return timeTransArray
}
