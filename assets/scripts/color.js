class Color{
    random(){
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        return `rgb(${r},${g},${b})`;
    }
}

let color=new Color();
