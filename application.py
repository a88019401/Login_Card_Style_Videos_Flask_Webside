from flask.helpers import url_for
import requests
import base64
import json
import time
import random
import azure.cognitiveservices.speech as speechsdk

from flask import Flask, jsonify, render_template, request, make_response, redirect, url_for
from flask_bootstrap import Bootstrap

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import InputRequired, Email, Length
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
import os
config_path = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

# login system

app.config['SECRET_KEY'] = 'Thisissupposedtobesecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(config_path, 'database.db')
Bootstrap(app)
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class LoginForm(FlaskForm):
    username = StringField('username', validators=[
                           InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[
                             InputRequired(), Length(min=8, max=80)])
    remember = BooleanField('remember me')


class RegisterForm(FlaskForm):
    email = StringField('email', validators=[InputRequired(), Email(
        message='Invalid email'), Length(max=50)])
    username = StringField('username', validators=[
                           InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[
                             InputRequired(), Length(min=8, max=80)])


@app.route('/')
def index():
    if current_user.is_authenticated:
        return render_template('index.html', name=current_user.username)
    return render_template('index.html')

@app.route('/index_login')
@login_required
def index_login():
    return render_template('index_login.html',name=current_user.username)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            # 驗證
            if user.password == form.password.data:
                login_user(user, remember=form.remember.data)
                return redirect(url_for('index_login'))
        return '<h1>帳號或密碼錯誤！ </h1>'
        # return '<h1>' + form.username.data + ' ' + form.password.data + '</h1>'
    return render_template('login.html', form=form)


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = RegisterForm()

    if form.validate_on_submit():
        new_user = User(username=form.username.data,
                        email=form.email.data, password=form.password.data)
        db.session.add(new_user)
        db.session.commit()

        return '<h1>New user has been created! </h1>'
        # return '<h1>' + form.username.data +' ' + form.email.data+ ' ' + form.password.data + '</h1>'
    return render_template('signup.html', form=form)


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))




@app.route("/video_b1")
@login_required
def video_b1():
    return render_template("video_b1.html", name=current_user.username)


@app.route("/video_b2")
@login_required
def video_b2():
    return render_template("video_b2.html", name=current_user.username)




"""版本"""

@app.route("/video_h2u1_1")
@login_required
def video_h2u1_1():
    return render_template("video_h2u1_1.html", name=current_user.username)

@app.route("/video_h2u2_1")
@login_required
def video_h2u2_1():
    return render_template("video_h2u2_1.html", name=current_user.username)

@app.route("/video_k2u1_1")
@login_required
def video_k2u1_1():
    return render_template("video_k2u1_1.html", name=current_user.username)

@app.route("/video_k2u2_1")
@login_required
def video_k2u2_1():
    return render_template("video_k2u2_1.html", name=current_user.username)
"""練習"""
@app.route("/video_h2u1_2")
@login_required
def video_h2u1_2():
    return render_template("video_h2u1_2.html", name=current_user.username)

@app.route("/video_h2u2_2")
@login_required
def video_h2u2_2():
    return render_template("video_h2u2_2.html", name=current_user.username)

@app.route("/video_k2u1_2")
@login_required
def video_k2u1_2():
    return render_template("video_k2u1_2.html", name=current_user.username)

@app.route("/video_k2u2_2")
@login_required
def video_k2u2_2():
    return render_template("video_k2u2_2.html", name=current_user.username)
