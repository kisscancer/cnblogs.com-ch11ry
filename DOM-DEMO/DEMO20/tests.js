describe('测试querySelector', function () {

    it('测试querySelector', () => {
        var ul1 = document.querySelector('ul#list')
        should(ul1.firstElementChild.childNodes[0].nodeValue).exactly('content1', '第一个ul列表中的第一个子元素中的#text应为\'contentn1\'')

        var ul2 = document.querySelector('ul#list2')
        should(ul2.firstElementChild.childNodes[0].nodeValue).exactly('content4', '第二个ul列表中的第一个子元素中的#text应为\'contentn4\'')
    })

})