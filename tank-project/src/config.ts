import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'
//* 基本配置
export default {
  // * 画布的基本配置
  canvas:{
    width:900,
    height:600
  },

  // * 模型的基本配置
  model:{
    width:30,
    height:30

  },

  straw:{
    num:60,//* 草坪数量
  },
  wall:{
    num:30,//* 砖墙数量
  },
  water:{
    num:10,//* 水坑数量
  },

  //*图片
  images:{
    straw,
    wall,
    water

  }
}
