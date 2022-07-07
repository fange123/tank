import config from './config'
import straw from'./canvas/straw'
import './style.scss'
//* 游戏开始前需要加载贴图等资源
import { promise } from './service/image'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import player from './canvas/player'


const app:HTMLDivElement= document.querySelector('#app')!
app.style.width = config.canvas.width +'px'
app.style.height = config.canvas.height+'px'

export default {
  isStart:false,
  state:9,
  timeId:0,

  bootstrap(){
    app.addEventListener('click',async ()=> {
      if(this.isStart === true ) return
      await this.start()
      // * 开始游戏后，判断游戏结束
       this.timeId = setInterval(()=> {
        if(tank.models.length === 0) this.state = 1
        if(player.models.length === 0 || boss.models.length === 0) this.state = 0
        if(this.state !== 9) this.stop()
      },100)



    })
  },

  stop(){
    clearInterval(this.timeId)

  },

  async start(){
  this.isStart = true
  app.style.backgroundImage = 'none'
  //promise是数组
  await Promise.all(promise);
  //* 加载完了 可以在image这个Map里面拿图片资源了

  straw.render()//先加载贴图，再加载画布
  wall.render()//渲染砖墙
  water.render()//渲染水坑
  steel.render()//渲染白墙
  tank.render()//渲染坦克
  bullet.render()//渲染子弹
  boss.render()//渲染boss
  player.render()//渲染玩家模型

  }
}




