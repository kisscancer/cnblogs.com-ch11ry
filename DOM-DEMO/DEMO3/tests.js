describe('测试文档子节点', function () {

    var ul = document.getElementById('list')

    it('测试document.documentElement', () => {
        var de = document.documentElement

        should(de.children.length).exactly(2, 'documentElement的children.length应为2')

        var headEle = de.children[0]
        should(headEle).exactly(document.head, 'documentElement的children[0]应为head节点')

        var bodyEle = de.children[1]
        should(bodyEle).exactly(document.body, 'documentElement的children[1]应为body节点')
    })

    it('测试documeng.body', () => {
        var bodyEle = document.body

        var de = document.documentElement

        should(bodyEle).exactly(de.children[1], 'document.body应等于document.documentElement.children[1]')
    })

    it('测试document.title', () => {
        var t = document.title

        should(t).exactly('Mocha', 'document.title应等于\'Mocha\'')
    })

    it('测试document.URL', () => {
        should(document.URL).exactly(location.href, 'document.URL应等于location.href')
    })

    it('测试document.domain', () => {
        should(document.domain).be.empty()
    })

    it('测试document.referrer', () => {
        should(document.referrer).be.empty()
    })

})