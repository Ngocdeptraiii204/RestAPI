const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Đối với cơ sở dữ liệu local (sử dụng Compass)
const local = "mongodb://127.0.0.1:27017/MyDatabase";

// Đối với cơ sở dữ liệu cloud (sử dụng Atlas)
const atlas = "mongodb+srv://ngocnptpd09488:<pkonaDmsO1Z1TKP3>@cluster0.lowk23q.mongodb.net/";

const connect = async () => {
    try {
        await mongoose.connect(local, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Kết nối thành công');
    } catch (error) {
        console.log(error);
        console.log('Kết nối thất bại');
    }
};

module.exports = { connect };