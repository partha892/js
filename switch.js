const  month = "2"
switch (month.length) {
    case 1:
        console.log("jan")
        break;
        case 2:
            console.log("Feb")
            break;
            case 3:
                console.log("march")
                break;
                case 4:
                    console.log("april")
                    break;
                    case 5:
                        console.log("may")
                        break;

    default:
        console.log("rest of month")
        break;
}



const arr = []
const obj = {}

if (arr.length === 0) {
    console.log("empty Array")
}

if (Object.keys(obj).length === 0) {
    console.log("empty object")
}
//nullish opperator ??

let val = undefined ?? 889
console.log(val)


let tern =100;

tern == 70 ? console.log("less"):console.log("big")