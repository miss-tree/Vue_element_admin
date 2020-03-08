<template>
    <div>
        <div>
            <h5>Promise.all()</h5>
            <p>
                Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
                只有所有的 Promise 的状态都变成fulfilled，或者其中有一个变为rejected，
                才会调用Promise.all方法后面的回调函数。
            </p>
            <pre>
        const databasePromise = connectDatabase();

        const booksPromise = databasePromise
        .then(findAllBooks);

        const userPromise = databasePromise
        .then(getCurrentUser);

        Promise.all([
            booksPromise,
            userPromise
        ])
        .then(([books, user]) => pickTopRecommendations(books, user));
            </pre>
            <span class="G_red">注意</span>
            <p>
                如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
            </p>
            <pre>
        const p1 = new Promise((resolve, reject) => {
            resolve('hello');
        })
        .then(result => result)
        .catch(e => e);

        const p2 = new Promise((resolve, reject) => {
            throw new Error('报错了');
        })
        .then(result => result)
        .catch(e => e);

        Promise.all([p1, p2])
        .then(result => console.log(result))
        .catch(e => console.log(e));
        // ["hello", Error: 报错了]        
            </pre>
        </div>
        <div>
            <h5>Promise.race()</h5>
            <p>
                Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
                只要参数之中有一个实例率先改变状态，p的状态就跟着改变。
                那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"promiseAll",
}
</script>

