describe('测试HTML元素属性', function () {

    var ul = document.getElementById('list')

    it('测试id', () => {
        should(ul.id).exactly('list', 'ul节点的id属性应为\'list\'')
    })

    it('测试title', () => {
        should(ul.title).exactly('这是list的title属性', 'ul节点的title属性应为\'这是list的title属性\'')
    })

    it('测试className', () => {
        should(ul.className).exactly('list-cls', 'ul节点的className属性应为\'list-cls\'')
    })

})