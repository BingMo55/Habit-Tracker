from pymongo import MongoClient
from habit import habit
import json
class MongoDB:
    def __init__(self):
        # connect to cluster
        self.client = MongoClient("mongodb+srv://hack2020:hack2020@synitheia-nliiq.mongodb.net/test?retryWrites=true&w=majority")
        self.db = self.client.synitheia
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


    def create_user(self,name,email,password,number,habit=[]):
        '''
        given a name, email, password, number we return
        a the json of the user data document
        '''
        user_data ={
            "name":name,
            "email":email,
            "password":password,
            "number":number,
            "habit":habit
        }
        return user_data
    
    def add_user(self,name,email,password,number,habit=[]):
        '''
        given a name, email, password, number, we take the
        json return value from create_user function and insert
        it into the collection
        '''
        user = self.create_user(name,email,password,number,habit)
        self.col.insert_one(user)
    
    def add_habit(self, email,habit):
        ''' 
        get current arry of habit objs and append the new habit oject into it
        then update the database's current habit array to this new array
        '''
        habitArr = self.get_val(email, "habit") # returns an array of json objects
        habitArr.append(habit);
        self.set_value(email,"habit",habitArr)

    def remove_habit(self, email,habitname):
        '''
        given a string habitname, we locate where it is in our array 
        and return its corresponding index. The function then takes the index
        and removes the value that exists there and update the habit array
        in mongodb 
        '''
        habitArr = self.get_val(email, "habit")
        index =0;
        for dictionary in habitArr:
            if dictionary["habit"] == habitname:
                break;
            index+=1
        del habitArr[index]
        self.set_value(email,"habit",habitArr)

    def set_value(self, email, key, value):
        '''
        given an email, key and value, we locate the document 
        associated with our email and change the corresponding 
        value of the key given
        '''
        self.col.update_one(
            {"email": email},
            {
                "$set": {
                    key:value
                }
            }
        )

    def get_val(self, email, key):
        '''
        given an email and key, the fuction locates the value
        and returns it
        '''
        users = self.col.find({"email":email});
        return users[0][key]
    