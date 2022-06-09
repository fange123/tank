import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/steel"

//* 创建水坑的实例
class Steel extends CanvasAbstract{
  number(): number {
    return config.steel.num
  }
  model(): IModelConstructor {
   return model
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }


}


export default new Steel()
