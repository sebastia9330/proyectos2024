class sombreado{
    static get inputProperties(){
        return["--shadow-color",
            "--shadow-size"
        ]
    }

    paint(ctx, size, props){
        const color = props.get("--shadow-color").toString();
        const shadowSize = parseInt(props.get("--shadow-size").toString());

        ctx.fillStyle = color;
        ctx.fillRect(0, size.height - shadowSize, size.width, shadowSize);
    }
}

registerPaint(
    "sombreado", sombreado
)