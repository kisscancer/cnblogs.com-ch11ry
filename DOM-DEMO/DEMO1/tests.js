describe('测试节点关系', function () {

    var ul = document.body.querySelector('#list')
    var childNodesLength = ul.childNodes.length

    // 根据浏览器不同，有的浏览器可能返回3，有的浏览器可能返回7
    // 返回7的时候，是因为在li节点周围添加了#text节点
    it('测试ChildNodes长度', function () {
        should(childNodesLength).match((v) => {
            return v === 3 || v === 7
        }, 'childNodes的长度应为3或7')
    })

    // 长度为7时，返回#text
    // 长度为3时，返回第一个li元素
    it('测试firstChild', function () {
        var firstNode = ul.firstChild
        var firstEle = document.getElementById('firstEle')
        should(firstNode).match((v) => {
            return childNodesLength === 7 ? (v.nodeName === '#text' && v.nextSibling === firstEle) : (firstNode === firstEle)
        })
    }, 'firstChild应等于#test或本身')

    // 长度为7时，返回#text
    // 长度为3时，返回最后一个li元素
    it('测试lastChild', function () {
        var lastNode = ul.lastChild
        var lastEle = document.getElementById('thirdEle')

        should(lastNode).match((v) => {
            return childNodesLength === 7 ? (v.nodeName === '#text' && v.previousSibling === lastEle) : lastNode === lastEle
        })
    }, 'lastChild应等于#test或本身')

    // 长度为7时，返回第一个li元素
    // 长度为3时，返回第二个li元素
    it('测试firstChild.nextSibling', function () {
        var firstEle = document.getElementById('firstEle')
        var secondEle = document.getElementById('secondEle')

        var nextSibling = ul.firstChild.nextSibling
        should(nextSibling).match((v) => {
            return childNodesLength === 7 ? (v === firstEle) : (v === secondEle)
        })
    })

    // 长度为7时，返回第三个li元素
    // 长度为3时，返回第二个li元素
    it('测试lastChild.previousSibling', function () {
        var secondEle = document.getElementById('secondEle')
        var thirdEle = document.getElementById('thirdEle')

        var previousSibling = ul.lastChild.previousSibling
        should(previousSibling).match((v) => {
            return childNodesLength === 7 ? (v === thirdEle) : (v === secondEle)
        })
    })


    // 等于document.body
    it('测试parentNode', function () {
        var parentNode = ul.parentNode
        var bodyEle = document.body

        should(parentNode).exactly(bodyEle)
    })
})