import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/water"

//* 创建水坑的实例
class Water extends CanvasAbstract{
  number(): number {
    return config.water.num
  }
  model(): IModelConstructor {
    return model
  }


  render(): void {
    super.createModels()
    super.renderModels()
  }


}


export default new Water()
