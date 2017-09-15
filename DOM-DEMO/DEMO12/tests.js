describe('测试节点内容', function () {

    it('测试TextNode的CRUD', () => {
        var ul = document.getElementById('list')

        var li = document.createElement('li')
        var text = document.createTextNode('content4')
        text.appendData('appendTest')
        text.deleteData('content4append'.length, 4)
        text.insertData(0, 'start')
        text.replaceData(0, 'start'.length, 'new')
        li.appendChild(text)
        ul.appendChild(li)

        text.splitText(3)
        
        should(ul.children.length).exactly(4, 'ul元素中的li子节点长度应为4')
    })

})