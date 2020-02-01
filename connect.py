from pymongo import MongoClient
import json
class MongoDB:
    
    def __init__(self):
        # connect to cluster
        self.client = MongoClient("mongodb+srv://hack2020:hack2020@synitheia-nliiq.mongodb.net/test?retryWrites=true&w=majority")
        self.db = self.client.synitheia
        # connect to database
        #c collection of users
        self.col = self.db.users
        self.user = {
            'name': '',
            'email': '',
            'password': '',
            'number': 0,
            'habit': []
        }

        self.habit = {
            'name': 'Shower',
            'time': 1,
            'points': 1
        }

    # habit is an array of habit objects
    def create_user(self,name,email,password,number,habit):
        user_data ={
            "name":name,
            "email":email,
            "password":password,
            "number":number,
            "habit":habit
        }
        return user_data
    
    def add_user(self,name,email,password,number,habit):
        user = self.create_user(name,email,password,number,habit)
        self.col.insert_one(user)

    # def modify_user(self,user_email):


    # def 
def main():
    database = MongoDB()
    database.add_user("bing","mob@uci.edu","sda","dsadsa",["1","12"])
    
    

main()