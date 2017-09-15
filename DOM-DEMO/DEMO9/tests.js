describe('测试创建元素', function () {

    it('测试createElement', () => {
        var ul = document.getElementById('list')
        var li = document.createElement('li')
        var text = document.createTextNode('content4')
        li.appendChild(text)
        ul.appendChild(li)

        should(ul.children.length).exactly(4, 'ul节点中的li子节点的长度应为4')
        should(ul.lastElementChild.childNodes[0].nodeValue).exactly('content4', 'ul节点中最后一个li节点中的text应为\'content4\'')
    })

})