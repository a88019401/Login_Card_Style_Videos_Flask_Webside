# SQLALCHEMY登入系統 2024/10/17

目前這網頁就是一個有登入系統的影片網站，flask+簡易的帳密資料庫。
是我當初大學專題的雛型，有喜歡的人歡迎抄去用。XD
![image](https://github.com/a88019401/Login_Card_Style_Videos_Flask_Webside/blob/main/1.png)
![image](https://github.com/a88019401/Login_Card_Style_Videos_Flask_Webside/blob/main/2.png)
![image](https://github.com/a88019401/Login_Card_Style_Videos_Flask_Webside/blob/main/3.png)

1. cd UNVERSITY_PROJETCT_REOPEN_SPEECH_TEST
   \\activate your virtualenv\\
2. pip install -r requirements.txt
3. set FLASK_APP=application.py 
4. set FLASK_ENV=development //$env:FLASK_APP = "application.py"用這個才有用
5. flask run

database
1. python
2. from application import db
3. db.create_all()
4. exit()

確認 database table 
1. sqlite3 database.db 
2. .tables
3. select * from user;

刪除 user
1. sqlite3 database.db
2. delete from user;
3. select * from user;
4. .exit
