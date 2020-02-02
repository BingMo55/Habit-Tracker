class habit:
    def __init__(self, habitvalue):
        self.habit = habitvalue;
        self.streak = 0;

    def getName(self):
        return self.habit

    def getStreak(self):
        return self.streak

    def setStreak(self, value):
        self.streak = value

    def incrementStreak(self):
        self.streak+=1
    
    def json(self):
        return {"habit":self.habit,"streak":self.streak}


    
'''
{
    name: value
    streak: num

}
'''