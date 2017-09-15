describe('测试子节点', function () {

    it('测试childNotes', () => {
        var ul = document.getElementById('list')

        var cn = ul.childNodes

        should(cn).match(v => {
            return v.length === 7 || v.length === 3
        }, '长度应为3或7')

        should(cn).match(v => {
            if (v.length === 3) {
                var condition1 = v[0].childNodes[0].nodeValue === 'content1'
                var condition2 = v[2].childNodes[0].nodeValue === 'content3'

                return condition1 && condition2
            }
            else if (v.length === 7) {
                var condition1 = v[1].childNodes[0].nodeValue === 'content1'
                var condition2 = v[5].childNodes[0].nodeValue === 'content3'

                return condition1 && condition2
            }
            else {
                should.fail('元素长度有误，请确保li元素的个数为3')
            }
        }, '节点不匹配')
    })

})