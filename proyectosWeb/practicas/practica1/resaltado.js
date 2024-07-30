class resaltado{
    static get inputProperties(){
        return["--highlight-color",
            "--highlight-size"
        ];
    }

    paint(ctx, size, props){
        const color = props.get("--highlight-color").toString();
        const highligtSize = parseInt(props.get("--highlight-size").toString());

        ctx.fillStyle = color;
        ctx.fillRect(0, size.height - highligtSize, size.width, highligtSize)
    }
}

registerPaint(
    "resaltado",resaltado
)
