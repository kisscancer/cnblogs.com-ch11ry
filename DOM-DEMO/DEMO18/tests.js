describe('测试动态添加css', function () {

    it('测试动态添加css', (done) => {
        var link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = './style.css'
        document.body.appendChild(link)

        window.setTimeout(() => {
            var ul = document.getElementById('list')

            var computedStyle = window.getComputedStyle(ul)

            should(computedStyle.backgroundColor).exactly('rgb(0, 0, 0)', 'ul节点的backgroundColor值应为\'rgb(0, 0, 0)\'')
            should(computedStyle.color).exactly('rgb(255, 255, 255)', 'ul节点的color值应为\'rgb(255, 255, 255)\'')

            done()
        }, 500)
    })

})