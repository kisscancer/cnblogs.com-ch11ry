describe('测试节点内容', function () {

    it('测试TextNode的文本规范化', () => {
        var ul = document.getElementById('list')

        var li = document.createElement('li')
        var text1 = document.createTextNode('content4')
        li.appendChild(text1)
        var text2 = document.createTextNode('content4')
        li.appendChild(text2)
        ul.appendChild(li)

        var content4Ele = ul.lastElementChild
        should(content4Ele.childNodes.length).exactly(2,'ul元素中最后一个li节点的childNodes应为2')
        li.normalize()
        should(content4Ele.childNodes.length).exactly(1,'使用过normalize方法后，ul元素中最后一个li节点的childNodes应为1')

        should(ul.children.length).exactly(4, 'ul元素中的li子节点长度应为4')
    })

})