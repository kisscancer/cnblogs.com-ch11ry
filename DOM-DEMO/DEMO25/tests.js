describe('测试自定义Attribute', function () {

    it('测试自定义Attribute', () => {
        var ul = document.getElementById('list')

        var ds = ul.dataset

        should(ds.name).exactly('Cheery', '自定义属性\'name\'的值应为\'Cheery\'')

        should(ds.age).exactly(undefined, '自定义属性\'age\'的值应为\'undefined\'')

        ul.setAttribute('data-age', 18)

        should(ds.age).exactly('18', '自定义属性\'age\'的值应为\'18\'')
    })

})