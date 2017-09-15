describe('测试NodeList', function () {

    it('测试Nodelist', (done) => {
        var ul = document.getElementById('list')

        var childNodes = ul.childNodes
        var children = ul.children

        should(childNodes.length).match(v => {
            return v === 3 || v === 7
        }, 'ul节点的childNodes值应为3或7')

        should(children.length).exactly(3, 'ul节点的children属性值应为3')

        var li = document.createElement('li')
        var text = document.createTextNode('content4')
        li.appendChild(text)
        ul.appendChild(li)

        should(childNodes.length).match(v => {
            return v === 4 || v === 8
        }, 'ul节点的childNodes值应为4或8')

        should(children.length).exactly(4, 'ul节点的children属性值应为4')
    })

})