export function wrapTo360(a) {
    if(a>=0) return a%360;
    return 360+a;
}


