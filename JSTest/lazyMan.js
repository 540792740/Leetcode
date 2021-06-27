class LazyMan {
    constructor(name) {
        this.name = name;
        setTimeout(() => {
            console.log("Hi! This is " + name);
        }, 0);
    }

    sleep(seconds) {
        const delay = seconds * 1000;
        const time = Date.now();
        while (Date.now() - time < delay) {
            // hu lu lu ~~
        }
        setTimeout(() => {
            console.log("wake up after " + seconds);
        }, 0);
        return this;
    }

    eat(something) {
        setTimeout(() => {
            console.log("eat " + something);
        }, 0);
        return this;
    }

    sleepFirst(seconds) {
        new Promise((resolve) => {
            const delay = seconds * 1000;
            const time = Date.now();
            while (Date.now() - time < delay) {
                // hu lu lu ~~
            }
            resolve();
        }).then(() => {
            console.log("wake up after " + seconds);
        });
        return this;
    }
}

function lazyMan(name) {
    return new LazyMan(name);
}

lazyMan("Hank").sleep(2).eat("dinner").sleepFirst(3);
