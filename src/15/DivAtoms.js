import { atom, selector } from "recoil"

// atom은 state 변수, 변수 안에는 Object가 들어가야 함
export const divN = atom({
    key :'divN',
    default : 0
});


export const divN2 = selector({
    key : 'divN2',
    get : ({get}) => {
        return get(divN) * 2; 
    }
});

export const divN3 = selector({
   key : 'divN3',
   get : ({get}) => {
        return get(divN) * 3;
   } 
});

export const divN4 = selector ({
    key : 'divN4',
    get : ({get}) => {
        return get(divN) * 4;
    }
});
