window.onload = function () {
    var ul = document.body.querySelector('ul')

    // 长度为7的NodeList
    // 根据浏览器不同，有的浏览器可能返回3，有的浏览器可能返回7
    // 返回7的时候，是因为在元素周围添加了#text节点
    var childNodes = ul.childNodes

    // 长度为7时，返回#text
    // 长度为3时，返回第一个li元素
    var firstNode = ul.firstChild

    // 长度为7时，返回#text
    // 长度为3时，返回最后一个li元素
    var lastNode = ul.lastChild

    // 长度为7时，返回第一个li元素
    // 长度为3时，返回第二个li元素
    var secondNode = ul.firstChild.nextSibling

    // 长度为7时，返回第三个li元素
    // 长度为3时，返回第二个li元素
    var secondLastNode = ul.lastChild.previousSibling

    // 等于document.body
    var parentNode = ul.parentNode
}