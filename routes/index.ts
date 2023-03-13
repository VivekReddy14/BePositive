import express from 'express';
const router=express.Router();
import request from './request';
import user from './user';
import donor from './donor';
import operations from './operations';

router.use('/user',user)
router.use('/donor',donor)
router.use('/request',request)
router.use('/operations',operations)

export default router;