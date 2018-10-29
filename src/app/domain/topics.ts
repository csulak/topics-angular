export class Topics {

    id: string
    name: string
    description: string

    constructor(_id?: string, _name?: string, _description?: string) {
        this.id = _id
        this.name = _name
        this.description = _description
    }

   /* // Lo necesitamos para mostrar el valor seleccionado en el combo
    equals(_otro) {
        return _otro && this.name == _otro.nombre
    }*/

    static fromJSON(topicJson): Topics {
        const result : Topics = Object.assign(new Topics(), topicJson)
        return result
        // if (!name) return null
      //  return new Topics(topicJson.id, topicJson.name, topicJson.description)
    }

    toJSON(): any {
        const result : any = Object.assign({}, this)
        result.id = this.id 
        result.name = this.name
        result.description = this.description
        return result
    }


}