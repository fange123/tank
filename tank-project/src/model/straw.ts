import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  image(): HTMLImageElement {
   return image.get('straw')!
  }
  name: string = 'straw';
  render(): void {
    super.draw()
  }

}
