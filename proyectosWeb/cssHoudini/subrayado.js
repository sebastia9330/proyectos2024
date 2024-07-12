class subrayado{

    

    paint(ctx, size, props){
        console.log(ctx, size, props)

        //subrayado

        ctx.beginPath();
        ctx.moveTo(0,size.height);
        ctx.lineTo(size.width,size.height);
        ctx.lineTo(size.width, size.height-5);
        ctx.closePath();
        ctx.fill();
    }
}

registerPaint(
    "subrayado",subrayado
)