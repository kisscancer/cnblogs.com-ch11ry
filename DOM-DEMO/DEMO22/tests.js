describe('测试元素遍历', function () {

    it('测试元素遍历', () => {
        var ul = document.querySelector('ul#list')

        should(ul.childElementCount).exactly(3, 'ul元素中的li节点个数应为3')
        should(ul.firstElementChild.textContent).exactly('content1', 'ul元素中的第一个非#text节点的内容应为\'content1\'')
        should(ul.firstElementChild.nextElementSibling.textContent).exactly('content2', 'ul元素中的第一个非#text节点的下一个非#text节点内容应为\'content2\'')
        should(ul.lastElementChild.textContent).exactly('content3', 'ul元素中的最后一个非#text节点的内容应为\'content3\'')
        should(ul.lastElementChild.previousElementSibling.textContent).exactly('content2', 'ul元素中的最后一个非#text节点的前一个非#text节点内容应为\'content2\'')
    })

})