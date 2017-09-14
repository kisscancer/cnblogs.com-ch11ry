describe('测试HTML的Attribute属性', function () {
    var ul = document.getElementById('list')

    it('测试setAttribute', () => {
        ul.setAttribute('data-age', 18)
    })

    it('测试getAttribute', () => {
        should(ul.getAttribute('data-age')).exactly('18', 'ul节点的data-age属性应为\'18\'')
    })


    it('测试removeAttribute', () => {
        ul.removeAttribute('data-age')

        should(ul.getAttribute('data-age')).be.empty()
    })

})