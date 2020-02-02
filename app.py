from connect import MongoDB
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
import yaml
from flask_cors import CORS
import json 

app = Flask(__name__)

#create database object to interact with MONGODB database
db = MongoDB()

#enable CORS for flask app
CORS(app)


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
	#Creating a new user login
	if request.method == 'POST':
		
		#extracting the paramaters from Front end data
		name = request.form["name"]
		username = request.form["username"]
		email = request.form["email"]
		password = request.form["password"]
		number = request.form["number"]

		#example of insertion
		#db.add_user("JOHNNY", "uts@uci.edu", "sda", "dsadsa", [])	

		#inserting with variable parameters
		db.add_user(name, email, password, number, [])	

		#returning all the new user data
		return jsonify({'args': request.form})


@app.route('/login', methods=['POST'])
def login():
	#login using existing user's email and password
	if request.method == "POST":
		print(request.form)
		email = request.form["email"]
		password = request.form["password"]
		

		#checking password for user
		if password ==  db.get_val(email, "password"):
			userdata = db.get_user(email)
			#have to delete MongoDB ID object
			del userdata['_id']

			#return userdata
			return userdata
			#return jsonify(True)
		else:
			return jsonify(False)

@app.route('/addhabit', methods=['POST'])
def addhabit():
	#adds habit to user
	if request.method == "POST":
		email = request.form["email"]
		newhabit = request.form["habit"]
		print(email)
		print(newhabit)
		db.add_habit(email, newhabit)
		return jsonify(True)
		
@app.route('/checkin', methods=['POST'])
def checkin():
	#user checking in for a specific habit
	if request.method == "POST":
		email = request.form["email"]
		habit = request.form["habit"]
		print(request.form)
		#TODO
		#implement changes in database based on checking in on habit
		
		return jsonify(True)
		


@app.route('/removehabit', methods=['POST'])
def removehabit():
	#remvoves a user habit
	if request.method == "POST":
		email = request.form["email"]
		delhabit = request.form["habit"]
		try:
			db.remove_habit(email, delhabit)
			return jsonify(True)
		except:
			return jsonify(False)



@app.route('/getuserval', methods=['GET', 'POST'])
def getuserval():
	#get value from a user, needs email and value key
	if request.method == 'POST':
		print(request.form)
		email = request.form["email"]
		key = request.form["key"]
		r = db.get_val(email, key)
		return jsonify(r)


@app.route('/loadhabits', methods=['POST'])
def loadhabits():
	#when clicking on habits tab in front, will return list of user habits
	if request.method == 'POST':
	
		email = request.form["email"]
		
		habits = db.get_val(email, "habit")
		res = {"response" : habits}
		#print(res)
		return json.dumps(res)		


if __name__ == '__main__':
	app.debug = True
	app.run()


