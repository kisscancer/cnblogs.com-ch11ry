describe('测试NodeIterator', function () {

    it('测试NodeIterator', () => {
        var root = document.getElementById('list')
        var wharToShow = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        var filter = NodeFilter.FILTER_ACCEPT

        var ni = document.createNodeIterator(root, wharToShow, filter, false)
        var node = ni.nextNode()
        while (node != null) {

            switch (node.nodeType) {
                case 1: // element
                    console.log('data-seq:' + node.dataset.seq)
                    break
                case 3: // text
                    var str = String.prototype.trim.call(node.textContent)
                    if (str) {
                        console.log('textContent:' + str)
                    }
                    break
            }

            node = ni.nextNode()
        }
    })

})