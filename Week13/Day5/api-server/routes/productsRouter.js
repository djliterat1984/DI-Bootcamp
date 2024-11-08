const { Router } = require( 'express' )
const {
	getAllProducts,
	getProductById,
	deleteProducts,
	productSearch,
	addProduct,
	updateProduct
} = require( '../controllers/productsController.js' )

const router = Router()

router.get( '/all', getAllProducts)

router.get( '/all/:prod_id',  getProductById)

router.get( '/search', productSearch)

// POST

router.post( '/', addProduct )

// PUT
router.put( '/:id', updateProduct )

// DELETE

router.delete( '/:id', deleteProducts )

module.exports = router