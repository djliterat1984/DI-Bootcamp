const { Router } = require( 'express' );
const userController = require( '../controllers/userController' );
const { verifyToken } = require( '../middlewares/verifyToken' );

const router = Router();

router.post( '/register', userController.registerUser );
router.post( '/login', userController.loginUser );
router.post('/logout', userController.logoutuser)
router.get( '/all', verifyToken, userController.getAllUsers );
router.get( '/auth', verifyToken, userController.verifyAuth );

module.exports = router;