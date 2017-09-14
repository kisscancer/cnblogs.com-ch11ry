describe('测试HTML的Attribute属性', function () {
    var ul = document.getElementById('list')

    it('测试getAttribute/setAttribute', () => {
        should(ul.getAttribute('data-age')).exactly(null, 'ul节点的data-age属性值应为null')
        ul.setAttribute('data-age', 18)
        should(ul.getAttribute('data-age')).exactly('18', 'ul节点的data-age属性值应为\'18\'')
    })

    it('测试removeAttribute', () => {
        ul.removeAttribute('data-age')
        console.log(ul.getAttribute('data-age'))
        should(ul.getAttribute('data-age')).exactly(null, 'ul节点的data-age属性值应为null')
    })

})