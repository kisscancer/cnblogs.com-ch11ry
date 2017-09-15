describe('测试classList', function () {

    it('测试classList', () => {
        var ul = document.getElementById('list')

        var computedStyle = window.getComputedStyle(ul)

        should(computedStyle.color).exactly('rgb(0, 0, 0)', 'ul元素的color样式值应为\'rgb(0, 0, 0)\'')

        ul.classList.add('list-cls')

        should(computedStyle.color).exactly('rgb(255, 255, 255)', 'ul元素的color样式值应为\'rgb(255, 255, 255)\'')

        should(ul.classList.contains('list-cls')).exactly(true, 'ul元素应包含\'list-cls\'的样式')

        ul.classList.remove('list-cls')

        should(computedStyle.color).exactly('rgb(0, 0, 0)', 'ul元素的color样式值应为\'rgb(0, 0, 0)\'')

        ul.classList.toggle('list-cls')

        should(computedStyle.color).exactly('rgb(255, 255, 255)', 'ul元素的color样式值应为\'rgb(255, 255, 255)\'')
    })

})