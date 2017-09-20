describe('测试模拟事件处理程序的', () => {

    it('测试EventUtil', () => {
        const e = new EventUtil()

        let counterA = 0
        let counterB = 0

        var addA = () => {
            counterA++
        }

        var addB = () => {
            counterB++
        }

        e.add('add', addA)
            .add('add', addB)
            .trigger('add')

        should(counterA).exactly(1, 'counterA应为1')
        should(counterB).exactly(1, 'counterB应为1')

        e.remove('add', addA)
            .trigger('add')

        should(counterA).exactly(1, 'counterA应为1')
        should(counterB).exactly(2, 'counterB应为2')

        e.remove('add', addB)
            .trigger('add')

        should(counterA).exactly(1, 'counterA应为1')
        should(counterB).exactly(2, 'counterB应为2')

        // 一个事件只能添加一次，多次添加会过滤
        e.add('add', addA)
            .add('add', addA)
            .add('add', addA)
            .add('add', addA)
            .add('add', addA)
            .add('add', addB)
            .add('add', addB)
            .add('add', addB)
            .add('add', addB)
            .add('add', addB)
            .trigger('add')

        should(counterA).exactly(2, 'counterA应为2')
        should(counterB).exactly(3, 'counterB应为3')
    })

})