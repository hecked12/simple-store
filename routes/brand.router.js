const { isAdmin } = require('../middleware/hasAuth');
const brand = require('../controllers/brand.controller');
const root = '/brands';

exports.brandRoutes = (router)=>{
    router.get(root, isAdmin, brand.show_brands);
    router.post(root, isAdmin, brand.submit_brand);
    
    router.get(`${root}/:id`, isAdmin, brand.show_brand);
    
    router.get(`${root}/:id/edit`, isAdmin, brand.show_edit_brand);
    router.post(`${root}/:id/edit`, isAdmin, brand.edit_brand);
    
    router.post(`${root}/:id/delete`, isAdmin, brand.delete_brand);

    return router;
};