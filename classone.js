class Sample {
    constructor(a,b){
        this.a = a; 
        this.b =b;
    }
    samplemethod(){
        return ' hii eveyone.'

        }
    }
    const obj = new Sample();
    console.log(obj.samplemethod());

    // 2
     class Sample2 {
        constructor(x, y){
            this.x = x;
            this.y = y;
        }
        sample2method(){
            return ` addition of two numbers are: $(this.x + this.y)`
        }
    }
    const obj2 = new Sample2(22, 65);
    console.log(obj2.sample2method());
 
    //3 
    class Ram{
        constructor( c,d){
            this.c=c;
            this.d=d;
        }
        samplemethod(){
            return'my name is sakshi.'
        }
    }
    const obj3 = new Ram();
    console.log(obj3.samplemethod());

    //4 
    class Supriya {
        constructor(a1,b1){
            this.a1=a1;
            this.b1=b1
        }
        samplemethod(){
            return' your key and your notes.'
        }
    }
    const obj4 = new Supriya();
    console.log(obj4.samplemethod()); 

    // 5
    class Aayu{
        constructor(q,r){
            this.q=q;
            this.r=r;
        }
        samplemethod(){
            return ' hello world.'
        }
    }
    const obj5 = new Aayu();
    console.log(obj5.samplemethod());


    // 6
    class Maruti{
        constructor(s,w){
            this.s=s;
            this.w=w;
        }
        samplemethod(){
            return ' classone.'
        }
    }
    const obj6 = new Maruti();
    console.log(obj6.samplemethod());
