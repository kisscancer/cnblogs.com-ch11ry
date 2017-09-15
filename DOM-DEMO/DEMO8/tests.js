describe('测试HTML的自定义Attribute', function () {
    var ul = document.getElementById('list')

    it('测试Attribute前加\'date-\'前缀', () => {

        ul.setAttribute('data-name', 'Cheery')
        ul.setAttribute('data-age', '18')
        ul.setAttribute('data-gender', '1')

        should(ul.getAttribute('data-name')).exactly('Cheery', 'ul节点的\'data-name\'属性的值应为\'Cheery\'')
        should(ul.getAttribute('data-age')).exactly('18', 'ul节点的\'data-name\'属性的值应为\'18\'')
        should(ul.getAttribute('data-gender')).exactly('1', 'ul节点的\'data-name\'属性的值应为\'1\'')

    })

    it('测试对象的.dataset属性', () => {
        var ds = ul.dataset

        should(ds.name).exactly('Cheery', 'ul节点的\'.dataset.name\'属性的值应为\'Cheery\'')
        should(ds.age).exactly('18', 'ul节点的\'.dataset.age\'属性的值应为\'18\'')
        should(ds.gender).exactly('1', 'ul节点的\'.dataset.gender\'属性的值应为\'1\'')
    })

})