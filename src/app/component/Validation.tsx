type Result<T> = 
    | { ok: true, value: T }
    | { ok: false, message: string }

interface props{
    name: any,
    error: string
}

export  function required(content:any):Result<props>{
    if(content.name.length === 0){
        return{
            ok: false,
            message: content.error
        }
    }
    return {
        ok: true,
        value: content
    }
}


// type Result<T> = 
//     | { ok: true, value: T }
//     | { ok: false, message: string }

// interface ExpectedObj {
//     foo: string;
//     bar: number;
//     baz: boolean; 
// }

// function validate(obj: any): Result<ExpectedObj> {
//     // Foo must be string and cannot be empty
//     if (typeof obj.Foo !== "string") {
//         return {
//             ok: false,
//             message: `obj.Foo must be of type string but was ${typeof obj.Foo}`
//         }
//     } else if (obj.Foo.length === 0) {
//         return { 
//             ok: false,
//             message: `obj.Foo cannot be empty`
//         }
//     }

//     // Bar must be a number, but cannot be negative or greater than 100
//     if (typeof obj.Bar !== "number") {
//         return {
//             ok: false,
//             message: `obj.Bar must be of type number but was ${typeof obj.Bar}`
//         }
//     } else if (obj.Bar < 0) {
//         return {
//             ok: false,
//             message: `obj.Bar must not be less than 0 but was ${obj.Bar}`
//         }
//     } else if (obj.Bar > 100) {
//         return {
//             ok: false,
//             message: `obj.Bar must be less than or equal to 100 but was ${obj.Bar}`
//         }
//     }

//     // Baz must be a boolean, but not a falsey value like 0 or undefined
//     if (typeof obj.Baz !== "boolean") {
//         return {
//             ok: false,
//             message: `obj.Baz must be of type boolean but was ${typeof obj.Baz}`
//         }
//     }

//     return {
//         ok: true,
//         value: obj
//     }
// }