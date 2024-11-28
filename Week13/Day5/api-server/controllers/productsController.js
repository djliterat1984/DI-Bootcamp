const {
  getAllProductsDB,
  getProductByIdDB,
  insertProductDB,
} = require("../models/productsData.js");

const getAllProducts = async( req, res ) => {
	try {
		const prodsDB = await getAllProductsDB()
		console.log('========================>', prodsDB);
		// res.end()
		res.json(prodsDB)	
	} catch (error) {
		console.log(error);
	}
} 

const getProductById = async (req, res) => {
  console.log(req.params);
  const { prod_id } = req.params;

  try {
    const [data] = await getProductByIdDB(prod_id);
    if (!data) {
      return res.sendStatus(404);
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  // const myProd = products.find((item) => item.id == prod_id);
  // if (!myProd) {
  //   // return res.status(404).send('not found')
  //   return res.sendStatus(404);
  // }
  // res.send(myProd);
};

const addProduct = async (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  try {
    const data = await insertProductDB(name, price);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  // const newProduct = { name, price, id: products.length + 1 };
  // products.push(newProduct);
  // //   res.json(products);
  // res.sendStatus(201);
};

const productSearch = ( req, res ) => {
	console.log( req.query );
	const { name } = req.query;
	const filtered = products.filter( item => {
		return item.name.toLowerCase().includes(name.toLowerCase())
	} )
	
	if(filtered.length === 0)
		return res.status(404).send( 'Not found' )
	res.json( filtered )
}

const deleteProducts = ( req, res ) => {
	const { id } = req.params;
	const index = products.findIndex( item => item.id == Number(id) );
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to delete not found' )
	}
	
	products.splice( index, 1 )
	res.json(products)
}

const updateProduct = ( req, res ) => {
	const { id } = req.params;
	const { name, price } = req.bodyaaA
	
	const index = products.findIndex( item => item.id == Number(id) );
	
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to updtae not found' )
	}
	
	products[ index ] = { ...products[ index ], name, price }
	res.json(products)
	
}



module.exports = {
	getAllProducts,
	getProductById,
	deleteProducts,
	productSearch,
	addProduct,
	updateProduct,
}