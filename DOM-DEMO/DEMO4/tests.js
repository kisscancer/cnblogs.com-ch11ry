describe('测试查找元素', function () {

    it('测试document.getElementById', () => {
        var firstEle = document.getElementById('firstEle')

        should(firstEle.childNodes[0].nodeValue).exactly('content1', 'firstEle节点中的#text应为content1')
    })

    it('测试document.getElementsByTagName', () => {
        var liEleList = document.getElementById('list').getElementsByTagName('li')
        console.dir(liEleList)
        should(liEleList.length).exactly(3, 'list中的li标签长度应为3')

        var firstItem = liEleList.item(0)
        should(firstItem.childNodes[0].nodeValue).exactly('content1', 'firstEle节点中的#text应为content1')

        var secondItem = liEleList.item(1)
        should(secondItem.childNodes[0].nodeValue).exactly('content2', 'secondEle节点中的#text应为content2')

        var thirdItem = liEleList.item(2)
        should(thirdItem.childNodes[0].nodeValue).exactly('content3', 'thirdEle节点中的#text应为content3')
    })

    it('测试document.getElementsByName', () => {
        var liEleList = document.getElementsByName('item')
        console.dir(liEleList)
        
        should(liEleList.length).exactly(3, 'list中的li标签长度应为3')

        var firstItem = liEleList.item(0)
        should(firstItem.childNodes[0].nodeValue).exactly('content1', 'firstEle节点中的#text应为content1')

        var secondItem = liEleList.item(1)
        should(secondItem.childNodes[0].nodeValue).exactly('content2', 'secondEle节点中的#text应为content2')

        var thirdItem = liEleList.item(2)
        should(thirdItem.childNodes[0].nodeValue).exactly('content3', 'thirdEle节点中的#text应为content3')
    })

})