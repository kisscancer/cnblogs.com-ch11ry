describe('测试getElementsByClassName', function () {

    it('测试元素遍历', () => {
        var liList = document.getElementsByClassName('list-item-cls item')

        var item1 = liList[0]
        should(item1.textContent).exactly('content1', '第一个li元素的textContent应为\'content1\'')

        var item2 = liList[1]
        should(item2.textContent).exactly('content2', '第二个li元素的textContent应为\'content2\'')

        var item3 = liList[2]
        should(item3.textContent).exactly('content3', '第三个li元素的textContent应为\'content3\'')
    })

})