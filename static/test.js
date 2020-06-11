setTimeout(() => {
    document.body.innerHTML = 'world <div>hello!</div>'
    setTimeout(() => {
        window.location.href = 'hello_world.html'
    }, 2000);
}, 2000)
