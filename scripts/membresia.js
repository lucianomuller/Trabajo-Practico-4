export default class Membresia {

    triangle(x, a, b, m){
        let member = 0;
        if(x <= a) {
            member = 0;
        }else{
            if (x > a && x <= m) {
                member = ((x-a) / (m-a));
            }else{
                if (x > m && x < b) {
                    member = ((b-x) / (b-m));
                } else {
                    if (x >= b) {
                        member = 0;
                    }
                }
            }
        }
        return member;
    }


    trapezoid(x, a, b, c, d){
        let member = 0;
        if(x < a && x < d) {
            member = 0;
        }else{
            if (x >= a && x <= b) {
                member = ((x-a) / (b-a));
            }else{
                if (x >= b && x <= c) {
                    member = 1;
                } else {
                    if (x >= c && x <= d) {
                        member = ((d-c) / (d-c));              
                    }
                }
            }
        }
        return member;
    }

}