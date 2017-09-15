describe('测试节点内容', function () {

    it('测试nodeValue', () => {
        var ul = document.getElementById('list')

        var children = ul.children

        should(children[0].childNodes[0].nodeValue).exactly('content1', 'ul节点中第一个li元素中的text应为\'content1\'')
    })

})