describe('测试HTML的Attributes属性', function () {
    var ul = document.getElementById('list')
    var attributes = ul.attributes

    it('测试getNamedItem/setNamedItem', () => {
        var att = document.createAttribute('data-age')
        att.nodeValue = 18
        attributes.setNamedItem(att)

        should(attributes.getNamedItem('data-age').nodeValue).exactly('18', 'ul节点的data-age属性应为\'18\'')
    })

    it('测试removeNamedItem', () => {
        attributes.removeNamedItem('data-age')

        should(attributes.getNamedItem('data-age')).exactly(null, 'ul节点的data-age属性应为\'null\'')
    })

    it('测试item', () => {
        should(attributes.item(0).nodeName).exactly('id', 'ul节点的item(0).nodeName的值应为\'id\'')

        should(attributes.item(1).nodeName).exactly('title', 'ul节点的item(1).nodeName的值应为\'title\'')

        should(attributes.item(2).nodeName).exactly('class', 'ul节点的item(2).nodeName的值应为\'class\'')
    })

})