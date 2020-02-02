from connect import MongoDB
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
import yaml


app = Flask(__name__)
db = MongoDB()

@app.route('/')
def index():
    return render_template('home.html')


@app.route('/success', methods=['POST']) 
def success():
	#if request.method == 'POST':
	return render_template('home.html', name=request.form["name"])
	#return 'welcome %s' % name

@app.route('/form')
def form():
	if request.method == 'POST':
		user = request.form['nm']
		return redirect(url_for('succces', name = user))
	else:
		return "hello"

@app.route('/user', methods=['POST'])
def user():
	if request.method == 'POST':

		name = request.form["name"]
		username = request.form["username"]
		email = request.form["email"]
		password = request.form["password"]
		habit = request.form["habit"]
		number = request.form["number"]
		#db.add_user("JOHNNY", "uts@uci.edu", "sda", "dsadsa", "habit")	
		db.add_user(name, email, password, number, habit)	
		return jsonify({'args': request.form})


if __name__ == '__main__':
	app.debug = True
	app.run()


