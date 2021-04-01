const buildCount = (i) => {
    let count = i

    const dislayCount = () => {
        console.log(count++)
    }

    return dislayCount
}

const count = buildCount(3)
count();
count();
count();

const myAnotherCount = buildCount(10)
for (let i = 0; i < 10; i++) {
    count();
}
