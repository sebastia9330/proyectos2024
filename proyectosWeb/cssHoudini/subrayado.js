class subrayado{

    static get inputProperties(){
        return[
            "--subrayado-tamaño",
            "--subrayado-color"
        ]
    }

    paint(ctx, size, props){
        console.log(ctx, size, props)

        const tamaño = parseInt(props.get("--subrayado-tamaño")) || 5;
        const color = String(props.get("--subrayado-color")) || "black"

        //subrayado

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(0,size.height);
        ctx.lineTo(size.width,size.height);
        ctx.lineTo(size.width, size.height-tamaño);
        ctx.closePath();
        ctx.fill();
    }
}

registerPaint(
    "subrayado",subrayado
)