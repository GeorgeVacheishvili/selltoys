// const mySetTimeout = (delay) => new Promise(resolve => setTimeout(resolve,delay))

// function makeToys(numToys, makeTime, deliverTime, sellTime) {
//     let madeToys = 0
//     mySetTimeout(makeTime)
//     .then(() => {
//         madeToys = numToys
//         console.log(`${madeToys} has made`)
//         return mySetTimeout(deliverTime)
//     })
//     .then(() => {
//         console.log(`${madeToys} has delivered`)
//         return mySetTimeout(sellTime)
//     })
//     .then(() => {
//         console.log(`${madeToys} has sold`)
//     })
//     .catch((err) => console.log(err))
// }

// makeToys(10, 3000, 2000, 1000)

const mySetTimeout = (delay) => new Promise(resolve => setTimeout(resolve,delay))

async function makeToys(numToys,makeTime,deliverTime,sellTime) {
    try {
        let madeToys = 0
        console.log('toys has made')
        await mySetTimeout(makeTime)
        madeToys = numToys
        console.log(`${madeToys} has made`)
        await mySetTimeout(deliverTime)
        console.log(`${madeToys} has deliverd`)
        await mySetTimeout(sellTime)
        console.log(`${madeToys} has sold`)
    } catch (err) {
        console.log(err)
    }
}
makeToys(10, 3000, 2000, 1000)