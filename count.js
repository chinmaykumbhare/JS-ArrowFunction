class Count {
    constructor(start, wait) {
        this.count = start;
        //console.log(this);

        setInterval(() => {
            //console.log(this);
            this.count++;
            console.log(this.count);

        }, wait);
    }
}

let obj = new Count(100, 500);