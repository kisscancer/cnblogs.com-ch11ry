describe('测试documentFragment', function () {
    var ul = document.getElementById('list')

    it('测试documentFragment', () => {
        var df = new DocumentFragment

        for (var index = 0; index < 100; index++) {
            var li = document.createElement('li')
            var text = document.createTextNode('content' + index)
            li.appendChild(text)
            df.appendChild(li)
        }

        ul.appendChild(df)

        for (var index = 101; index < 200; index++) {
            var li = document.createElement('li')
            var text = document.createTextNode('content' + index)
            li.appendChild(text)
            df.appendChild(li)
        }

        ul.appendChild(df)
    })

})