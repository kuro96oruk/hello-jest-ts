// npx jest src/chapter2/assertion/assertion.test.ts
/**
 * @jest-environment node
 */

test("testを利用してテストケースを作成する", () => {
    const result = true;
    const expected = true;
    expect(result).toBe(expected); // expect関数とtoBe関数(マッチャー関数)を利用して結果を評価する
});

it("itを利用してテストケースを作成する", () => {
    expect(true).toBe(true);
});


// プリミティブな値の評価
const numberValue = 0;
const stringValue = '文字列';
const booleanValue = true;

test ('evaluates as equal for all the same primitive values when using the toBe function',()=>{
    expect(numberValue).toBe(0);
    expect(stringValue).toBe('文字列');
    expect(booleanValue).toBe(true);
});

test('evaluates as equal for all the same primitive values when using the toEqual function', ()=>{
    expect(numberValue).toEqual(0);
    expect(stringValue).toEqual('文字列');
    expect(booleanValue).toEqual(true);
});

test('evaluates as equal for all the same primitive values when using the toStrictEqual function', ()=>{
    expect(numberValue).toStrictEqual(0);
    expect(stringValue).toStrictEqual('文字列');
    expect(booleanValue).toStrictEqual(true);
});


// オブジェクトの評価
type CanType = {
    flavor: string;
    ounces: number;
};

const can1: CanType ={
    flavor: 'grapefruit',
    ounces: 12,
};

const can2: CanType ={
    flavor: 'grapefruit',
    ounces: 12,
};

const can3: CanType = can2;

class Can {
    flavor: string;
    ounces: number;

    constructor({flavor, ounces}: CanType){
        this.flavor = flavor;
        this.ounces = ounces;
    }
};

const can4 = new Can({
    flavor: 'grapefruit',
    ounces: 12,
});

test('can1 and can2 are not the exact same instance', ()=>{
    expect(can1).not.toBe(can2);
});

test('can2 and can3 are the same instance', ()=>{
    expect(can2).toBe(can3);
});

test('can1 and can2 have th same propaties', ()=>{
    expect(can1).toEqual(can2);
});

test('can2 and can4 have the same propaties', ()=>{
    expect(can2).toEqual(can4);
});

test('can2 and can4 are different class', ()=>{
    expect(can2).not.toStrictEqual(can4);
});


test('differences between toEqual and toStrictEqual', ()=>{
    expect({ foo: NaN, bar: undefined }).toEqual({foo: NaN});

    expect({foo: NaN, bar: undefined}).not.toStrictEqual({foo: NaN});

    expect([, undefined, 1]).toEqual([undefined, , 1]);

    expect([, undefined, 1]).not.toStrictEqual([undefined, , 1]);
});


// 曖昧な真偽値
test('0 should be Truthy', ()=>{
    expect('0').toBeTruthy();
});

test('0 should be Falsy', ()=>{
    expect(0).toBeFalsy();
});


// null undefined
test('should be null', ()=>{
    expect(null).toBe(null);
    expect(null).toBeNull();
});

test('should be undefined', ()=>{
    expect(undefined).toBe(undefined);
    expect(undefined).toBeUndefined();
});

test('should be null or undefined', ()=>{
    let a;
    expect(a==null).toBe(true);
    a=null;
    expect(a==null).toBe(true);
})


// 曖昧な結果の評価
const hoge=() => ({hoge: 'hogehoge',number:0})

test('hoge return anything', ()=>{
    expect(hoge()).toEqual(expect.anything());
    expect(hoge()).toEqual({
        hoge:'hogehoge',
        number: expect.anything(),
    })
    expect(hoge()).toEqual({
        hoge:'hogehoge',
        number: expect.any(Number),
    })
})

// 数値の評価
test('0.1 + 0.2 returns 0.3', ()=>{
    //expect(0.1 + 0.2).toBe(0.3); // 浮動小数点のせいでイコールにならない
    expect(0.1 + 0.2).toBeCloseTo(0.3);
})

test('0.301 and 0.3 are different when numDigits is 3', ()=>{
    expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3);
})

// 数値の比較
test('0.1+0.2 is greater then 0.3', ()=>{
    expect(0.1 + 0.2).toBeGreaterThan(0.3);
    expect(0.1 + 0.2 > 0.3).toBe(true);
})
test('0.1 + 0.2 is greater than 0.3 or 0.1+ 0.2 equals to 0.30000000000000004',()=>{
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004);
    expect(0.1 + 0.2 >=0.3).toBe(true);
    expect(0.1 + 0.2 >= 0.30000000000000004).toBe(true);
})
test('0.1+0.2 is less than 0.4', ()=>{
    expect(0.1 + 0.2).toBeLessThan(0.4);
    expect(0.1 + 0.2 < 0.4).toBe(true);
})
test('0.1 + 0.2 is less than 0.4 or 0.1 + 0.2 equals to 0.30000000000000004', ()=>{
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.4);
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.3000000000000004);
    expect(0.1 + 0.2 <= 0.4).toBe(true)
    expect(0.1 + 0.2 <= 0.3000000000000004).toBe(true);
})

// 文字列の部分一致
const log1 = '10.0.0.3 - - [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
const log2 = '10.0.0.11 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
const log3 = '10.0.0.99 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'

test('contains 10.0.0.3 IP address', ()=>{
    expect(log1).toEqual(expect.stringContaining('10.0.0.3'));
})

test('contain IP address between 10.0.0.0 and 10.0.0.99', ()=>{
    const expected = /^10.0.0.([1-9]?[0-9]) /;

    expect(log1).toEqual(expect.stringMatching(expected));
    expect(log2).toEqual(expect.stringMatching(expected));
    expect(log3).toEqual(expect.stringMatching(expected));

    expect(log1).toMatch(expected);
    expect(log2).toMatch(expected);
    expect(log3).toMatch(expected);

    const regex = new RegExp(expected);
    expect(regex.test(log1)).toBe(true);
    expect(regex.test(log2)).toBe(true);
    expect(regex.test(log3)).toBe(true);
})

// 配列の部分一致
const fruitList = ['Apple', 'Lemon', 'Orange'];

test('contains Apple in fruitList', ()=>{
    expect(fruitList).toContain('Apple');
})

test('contains Aplle and Orange in fruitList', ()=>{
    expect(fruitList).toEqual(expect.arrayContaining(['Apple', 'Orange']));
})

const itemList =[
    {name: 'Apple', price: 100},
    {name: 'Lemon', price: 150},
    {name: 'Orange', price: 120},
]

test('contains Apple in itemList', ()=>{
    expect(itemList).toContainEqual({name:'Apple', price: 100})
})

test('contains Apple and Orange in itemList', ()=>{
    expect(itemList).toEqual(
        expect.arrayContaining([
            {name: 'Apple', price: 100},
            {name: 'Orange', price: 120},
        ]),
    )
})

// オブジェクトの部分一致
const ciBuild = {
    number: 1,
    duration: 12000,
    state: 'success',
    triggerParameters: {
        is_scheduled: true,
    },
    type: 'scheduled_pipeline',
    actor:{
        login: 'Taka',
    },
}

test('build state should be success', ()=>{
    expect(ciBuild).toHaveProperty('state', 'success');
})

test('actor should be Taka', ()=>{
    expect(ciBuild).toHaveProperty('actor.login', 'Taka');
})

test('triggered by the scheduled pipeline', ()=>{
    expect(ciBuild).toEqual(
        expect.objectContaining({
            triggerParameters: expect.objectContaining({is_scheduled: true}),
            type: 'scheduled_pipeline',
        }),
    )
})

// Errorの評価
class User{
    name: string;
    password: string;
    constructor({name, password}:{name:string, password: string}){
        if(password.length < 6) throw new Error('The password length must be at least 6 characters.')
        this.name = name;
        this.password = password;
    }
}

test('create a new with a 6-character password', ()=>{
    expect(new User({name: 'hoge', password:'123456'})).toEqual({
        name: 'hoge',
        password :'123456',
    });
})

test ('throw Error when the length of password is less than 6', ()=>{
    expect(()=>new User({name: 'hoge', password:'12345'})).toThrow();
    expect(()=>new User({name: 'hoge', password:'12345'})).toThrow(Error);
    expect(()=>new User({name: 'hoge', password:'12345'})).toThrow(
        'The password length must be at least 6 characters.'
    );
})

// Callback関数を利用した非同期な関数の結果の評価
const fetchDataWithCallback = callback =>{
    setTimeout(callback, 300, 'lemon');
}

test('return lemon', done =>{
    const callback = data =>{
        expect(data).toBe('lemon');
        done();
    }
    fetchDataWithCallback(callback);
})

// Promiseを利用した非同期な関数の結果の評価
const fetchDataWithPromiseResolve = () => 
    new Promise(resolve => setTimeout(resolve, 100, 'lemon'));

test('return lemon', () => {
    return expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon');
})

test('return lemon with async/await', async () => {
    await expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon');
})

const fetchDataWithPromiseReject = () =>
    new Promise((resolve, reject) => setTimeout(reject, 100, new Error('lemon does not exist')));

test('failed to return lemon', () => {
    return expect(fetchDataWithPromiseReject()).rejects.toThrow('lemon does not exist');
})

test('failed to return lemon', async () => {
    await expect(fetchDataWithPromiseReject()).rejects.toThrow(
        'lemon does not exist',
    )
})