describe('测试querySelectorAll', function () {

    it('测试querySelectorALL', () => {
        var ulList = document.querySelectorAll('ul.list-cls')

        var ul1 = ulList[0]
        should(ul1.firstElementChild.childNodes[0].nodeValue).exactly('content1', '第一个ul列表中的第一个li元素中的#text内容应为\'content1\'')

        var ul2 = ulList.item(1)
        should(ul2.firstElementChild.childNodes[0].nodeValue).exactly('content4', '第二个ul列表中的第一个li元素中的#text内容应为\'content4\'')
    })

})