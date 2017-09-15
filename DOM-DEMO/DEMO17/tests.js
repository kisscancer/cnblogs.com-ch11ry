describe('测试动态添加js', function () {
    var ul = document.getElementById('list')

    it('测试动态添加js', (done) => {
        var scriptEle = document.createElement('script')
        scriptEle.src = './common.js'
        document.body.appendChild(scriptEle)

        setTimeout(() => {
            should(add).be.a.Function()
            done()
        }, 500)
    })

})