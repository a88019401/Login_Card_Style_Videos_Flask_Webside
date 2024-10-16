#2024/10/17
`刪掉原本串接的Azure，調整一下index、login和signup的CSS。目前這網頁就是一個有登入系統的影片，flask+簡易的帳密資料庫，也不知道能延伸什麼，下次嘗試部屬看看。`

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