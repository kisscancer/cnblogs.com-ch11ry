describe('测试节点内容', function () {

    it('测试TextNode的文本拆分', () => {
        var ul = document.getElementById('list')

        var lastEle = ul.lastElementChild

        var text = lastEle.childNodes[0]

        text.splitText('content'.length)

        should(lastEle.childNodes.length).exactly(2)

        should(lastEle.childNodes[0].nodeValue).exactly('content')
        should(lastEle.childNodes[1].nodeValue).exactly('3')
    })

})