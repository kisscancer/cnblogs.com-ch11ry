var EventUtil = function () {
    this.events = []

    this.add = function (type, cb) {
        let exist = false

        const e = (this.events[type] = this.events[type] || [])

        for (var index = 0; index < e.length; index++) {
            var item = e[index];
            
            if (item === cb) {
                exist = true
                break
            }
        }

        if (!exist) {
            e.push(cb)
        }

        return this
    }

    this.remove = function (type, cb) {
        const e = (this.events[type] || [])

        for (var index = 0; index < e.length; index++) {
            var item = e[index];
            if (item === cb) {
                e.splice(index, 1)
                break
            }
        }

        return this
    }

    this.trigger = function (type) {
        const e = (this.events[type] || [])

        e.forEach((item) => {
            try {
                item()
            } catch (error) {
                console.log('catch an error:')
                console.log(error)
            }
        })

        return this
    }
}