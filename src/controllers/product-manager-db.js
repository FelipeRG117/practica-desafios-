//Aqui vamos a estar requisiriendo los mdelos creados con mongoDB y creado una class con funcinoes para eliminacion actualizacion etc

//Conejo: Traemos y requrimos el model creado para productos 
const ProductModel = require("../models/productos-model")


class ProductManager {
//Consejo/dato: Los async van antes del nombre de los productos y no contiene  let ni const los metodos a realizar ni tampoco se utilizan los = 
//Y no menos importante, no te olvides de poner los ( ) que son necesarios para crear los metodos en el class 
//Agregar producto addProduct 

async addProduct({title, description, price, img, code, stock, category, thumbnails}) {
try {
    
    //validacion en condicional if en caso de qe algunodelos parametros sea falso 
    if (!title || !description || !price || !code || !stock || !category) {
     console.log("Falta alguno de los parametros a recibir para crear un nuevo doc")
     return;
    } 
    //validacion de codigo en caso de que ya exista alguno con el mismo codigo(code), cosa que impediria poder crear uno nuevo con el mismo codigo 
    const Codigo = await ProductModel.findOne({code: code})
    
    //si el codigo ya existe, deovlvemos un el codgio ya exite jigarro(Toph is to the best meestra tierra)
    if(Codigo){
        console.log("El codigo ya exite y no es posible crear un nuevo producto")
        return; 
    }
    //Como cuando se crea el modelo se hace haciendo un objeto con clave valor, le hacemos un new aprductModel y por parametro le metemos un objeeto con clave y valor que tendra el mismo valor que se recibe por parametros del addProduct


    const newProduct = new ProductModel({
        title, 
        description, 
        price,
        img, 
        code, 
        stock, 
        category, 
        status: true, 
        thumbnails: thumbnails || []
    })
//guardamos el nuevo producto en la coleccion, el save guarda el documento en su respectiva coleccion  

     await newProduct.save()
} catch (error) {
    console.log(error)
}

}





//traer productos 
async getProducts() {
    try {
    const productos = await ProductModel.find()
    console.log(productos)
    return productos;

    } catch (error) {
        console.log("Ha habido un error en " + error)
    }
}


//traer productos by id 
//recuerda que en parametros se pone lo que se va a instanciar y usar en el metodo en el que se encuentra 
async getProductById(id){
try {
    const producto = await ProductModel.findById(id)
//validacion si no hay ningun problema 
if (producto) {
    return producto;
} else {
    console.log("Hubo un error en encontrar por id ")
}

    
} catch (error) {
    console.log("Ha habido un error en " + error)
}
}


//traer articulo por id y actualizar 

async updateProduct(id, update){
try{
const productoActualizado = await ProductModel.findByIdAndUpdate(id, update)
//validacion si existe el id o no para seguir prosiguiendo
if(productoActualizado){ 

    
return console.log(productoActualizado);

}else{
console.log("Uno/s parametro de update salio erroneo")
}

}catch(err){
    console.log("Ha habido un error en " + err)
}
}

//eliminar un producto

async deleteProduct(id){
    try{
       
        const producto = await ProductModel.deleteOne({_id: id})
//validacion si no hay ningun problema 
if (producto) {
    return console.log(producto)

} else {
    console.log("Producto no enconcontrado o inexistente")
}

      
    }catch(err){
        console.log("hubo un error " + err)
    }
}




}



module.exports = ProductManager