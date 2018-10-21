<template>
    <div class="body-warp">
        <Header></Header>
        <div class="bmap" id="bmap-warp"></div>
    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components: {
            Header
        },
        methods: {
            drawMap() {
                var map = new BMap.Map("bmap-warp");                        // 创建地图实例  

                var startpoint = new BMap.Point(114.02,32.98);              // 创建点坐标    
                var startlabel = new BMap.Label("信息工程学院学生党支部",{
                    offset:new BMap.Size(30,0)
                })                                                         // 添加文本
                var startmarker = new BMap.Marker(startpoint);              // 创建标注 
                map.addOverlay(startmarker);                                // 将标注添加到地图中 
                map.addOverlay(startlabel); 
                startmarker.setLabel(startlabel)                                // 将文本添加到地图中 

                var startpoint = new BMap.Point(114.02,32.98);             
                var startlabel = new BMap.Label("信息工程学院党总部",{
                    offset:new BMap.Size(30,20)
                })                                                        
                var startmarker = new BMap.Marker(startpoint);             
                map.addOverlay(startmarker);                                
                map.addOverlay(startlabel); 
                startmarker.setLabel(startlabel)                                

                var endpoint = new BMap.Point(116.2,40);                    
                var endlabel = new BMap.Label("信息工程学院北京党支部",{        
                    offset:new BMap.Size(30,0)
                })                                                          
                var endmarker = new BMap.Marker(endpoint);                    
                map.addOverlay(endmarker);                                  
                map.addOverlay(endlabel);                                  
                endmarker.setLabel(endlabel)                           
                
                map.centerAndZoom(startpoint,5);                            //定位中心点
                map.enableScrollWheelZoom(true);                            //鼠标滚轮缩放
                map.addControl(new BMap.NavigationControl({                 //平移缩放控件
			        anchor: window.BMAP_ANCHOR_TOP_LEFT
		        }));
            },
        },
        mounted() {
            this.$nextTick(function () {
                this.drawMap();
            });
        }
    }
</script>

<style scoped>
    .bmap {
        height: 12.5rem;
    }
</style>