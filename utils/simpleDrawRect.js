export const simpleDrawRect = (detections, ctx) => {
    detections.forEach(pred => {
        const [x, y, width, height] = pred['bbox'];
        const text = pred['class']

        // styiling
        const color = '#' + Math.floor(Math.random()*167777215).toString(16)
        ctx.strokeStyle = color;
        ctx.lineWidth = '4'
        ctx.font = '18px Arial';
        ctx.fillStyle = color;

        // draw rectangle
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    });
}