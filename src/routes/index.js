import express from 'express';
const router = express.Router();
import user from '../models/user.model';

router.get('/', (req, res, next)=>{
    //truy vấn db lấy ra tất cả id user
    const data = user.getListUserID();
    // sau đó lấy ra từng id , và lưu vào mảng

    const result = data.map((id) => {
        return user.getUserDetail(id)
    });
res.render('index', {result: result});


})
module.exports = router;