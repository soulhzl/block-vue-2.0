const generateTemplate = (option) => {
    let text = `<!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">
     <title>ECharts</title>
     <script src="https://cdn.jsdelivr.net/npm/echarts@5.0.2/dist/echarts.min.js"></script>
     <style>
     body{
         padding: 0;
         margin: 0;
         overflow: hidden;
     }
     </style>
 </head>
 <body>
     <div id="main" style="width: 100vw;height:100vh;"></div>
     <script type="text/javascript">
            this.$echart = echarts
         this.echart = this.$echart.init(document.getElementById('main'));
            ${option}
     </script>
 </body>
 </html>`
 return text
}
export default generateTemplate