describe('测试事件流', () => {
    var list = document.getElementById('list')
    var firstItem = document.getElementById('firstItem')
    var secondItem = document.getElementById('secondItem')
    var thirdItem = document.getElementById('thirdItem')

    it('测试捕获事件流', () => {
        // 第三个参数设置为true，表示使用捕获模式
        var flag = 0
        list.addEventListener('click', () => {
            flag = 1
        }, true)

        firstItem.addEventListener('click', () => {
            flag = 0
        }, true)

        firstItem.click()

        should(flag).exactly(0, 'flag应为0')
    })

    it('测试冒泡事件流', () => {
        // 第三个参数设置为falst，表示使用冒泡模式
        var flag = 0
        list.addEventListener('click', () => {
            flag = 1
        }, false)

        firstItem.addEventListener('click', () => {
            flag = 0
        }, false)

        firstItem.click()

        should(flag).exactly(1, 'flag应为1')
    })
})