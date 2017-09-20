describe('测试事件流', () => {
    var list = document.getElementById('list')
    var firstItem = document.getElementById('firstItem')
    var secondItem = document.getElementById('secondItem')
    var thirdItem = document.getElementById('thirdItem')

    it('测试DOM0级事件绑定', () => {
        // DOM0级只能绑定一个事件

        let flag = 0

        list.onclick = function () {
            flag = 2
        }

        firstItem.onclick = function () {
            flag = 1
        }

        firstItem.click()

        should(flag).exactly(2, 'flag应为2')
    })

    if (Element.prototype.addEventListener) {
        it('测试DOM2级事件绑定', () => {
            // DOM2级能绑定多个事件，并且是按添加顺序执行的
            let flag = 0

            firstItem.addEventListener('click', () => {
                flag = 1
            }, false)

            firstItem.addEventListener('click', () => {
                flag = 2
            }, false)

            list.addEventListener('click', () => {
                flag = 3
            }, false)

            list.addEventListener('click', () => {
                flag = 4
            }, false)

            firstItem.click()

            should(flag).exactly(4, 'flag应为4')
        })
    }

    if (Element.prototype.attachEvent) {
        it('测试IE8事件绑定', () => {
            // IE8也能绑定多个事件，但是执行顺序是相反的，即flag=4先执行，再执行flag=3
            let flag = 0

            firstItem.attachEvent('onclick', () => {
                flag = 1
            })

            firstItem.attachEvent('onclick', () => {
                flag = 2
            })

            list.attachEvent('onclick', () => {
                flag = 3
            })

            list.attachEvent('onclick', () => {
                flag = 4
            })

            firstItem.click()

            should(flag).exactly(3, 'flag应为3')
        })
    }

})