
// 一层一层执行
Promise.resolve().then(() => {
    console.log('P-1.2')
    Promise.resolve().then(() => {
        console.log('P-2.2')
    })
})
Promise.resolve().then(() => {
    console.log('P-1.3')
    Promise.resolve().then(() => {
        console.log('P-2.3')
    })
})
console.log('同步-0.2')

// 同步-0.2 P-1.2 P-1.3 P-2.2 P-2.3