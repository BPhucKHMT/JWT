Các công nghệ sử dụng :
 npm install --save-exact express@4.17.2 dotenv@10.0.0 body-parser@1.19.1 ejs@3.1.6
 npm install --save-exact @babel/preset-env@7.15.6
 npm install --save-exact nodemon@2.0.15   

+ Bootstrap 5 :

<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

+ Database:
npm install --save-exact mysql2@2.3.3

+ mã hóa mật khẩu người dùng bằng bcrypt.js
npm install --save-exact bcryptjs@2.4.3


+ Body-parser : là 1 middle ware , trước khi request gửi lên server sẽ qua đây , chuyển request thành json
code trên stackoverflow:

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

