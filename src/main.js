dom.on(testFind, 'click', () => {
    let rs = dom.find('.red')[0]
    dom.text(container, dom.html(rs))
})
dom.on(testStyle, 'click', () => {
    dom.text(container, '设置类名为red的div的边框颜色为红色')
    dom.each(dom.children(test), (n) => {
        dom.style(n, 'border', '1px solid red');
    })
})
dom.on(testEach, 'click', () => {
    dom.html(container, '')
    dom.each(dom.children(test), (n) => {
        container.innerHTML += dom.html(n) + '<br>'
    })
})
