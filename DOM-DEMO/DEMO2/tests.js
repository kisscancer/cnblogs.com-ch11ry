describe('测试节点操作', function () {

    var ul = document.getElementById('list')

    it('测试appendChild', () => {
        var li = document.createElement('li')
        var text = document.createTextNode('content4')
        li.appendChild(text)

        ul.appendChild(li)

        should(ul.childElementCount).exactly(4, 'ul节点中的li元素应为4个')
    })

    it('测试insertBefore', () => {
        var li = document.createElement('li')
        li.id = 'content5Id'
        var text = document.createTextNode('content5')
        li.appendChild(text)

        ul.insertBefore(li, ul.lastElementChild)

        var content5Ele = document.getElementById('content5Id')
        var secondLastNode = ul.lastElementChild.previousElementSibling

        should(content5Ele).exactly(secondLastNode, 'content5节点应该在content4节点之前')
    })

    it('测试replaceChild', () => {
        var li = document.createElement('li')
        li.id = 'content6Id'
        var text = document.createTextNode('content6')
        li.appendChild(text)

        var content5 = document.getElementById('content5Id')
        ul.replaceChild(li, content5)

        should(ul.childElementCount).exactly(5, '将content6替换为content5后，ul中子元素的个数应为5')

        var secondLastNode = ul.lastElementChild.previousElementSibling
        should(li).exactly(secondLastNode, 'content6节点应该在content4节点之前')
    })

    it('测试removeChild', () => {
        var content6 = document.getElementById('content6Id')

        ul.removeChild(content6)

        should(ul.childElementCount).exactly(4, '删除content6后，ul中子元素个数应为4')

        var thirdEle = document.getElementById('thirdEle')
        var secondLastNode = ul.lastElementChild.previousElementSibling

        should(thirdEle).exactly(secondLastNode, 'content3节点应该在content4节点之前')
    })

    it('测试clonNode', () => {
        var thirdEle = document.getElementById('thirdEle')
        var cloneThirdEle = thirdEle.cloneNode(true)

        ul.appendChild(cloneThirdEle)

        var lastNode = ul.lastElementChild
        should(lastNode.childNodes[0].nodeValue).exactly('content3', '被克隆的li元素中的#text值应为\'content3\'')
    })

    it('测试normalize', () => {
        var div = document.createElement('div')
        div.id = 'divId'
        var text1 = document.createTextNode('text1')
        div.appendChild(text1)
        var text2 = document.createTextNode('text2')
        div.appendChild(text2)

        document.body.appendChild(div)

        var divEle = document.getElementById('divId')
        should(divEle.childNodes.length).exactly(2, 'div中的childNodes长度应为2')

        divEle.normalize()
        should(divEle.childNodes.length).exactly(1, '使用normalize方法后，div中的childNodes长度应为1')
    })

})