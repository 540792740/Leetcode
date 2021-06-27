// setTimeout(() => console.log(2), 0);

// new Promise((resolve, reject) => {
//     console.log(3);
//     resolve(1);
// })
//     .then(i => {
//         console.log(i);
//         Promise.resolve().then(() => console.log(4))
//     });

// console.log(5);

const Queue = () => {

    return Promise()
}

new Queue()
    .task(1, 3000) // 任务1，需要等待3秒执行
    .task(2, 2000) // 任务2，需要等待2秒执行
    .task(3, 2000) // 任务3，需要等待2秒执行
    .task(4, 1000) // 任务4，需要等待1秒执行
    .run();