class Clock():
    'converts hours and minutes to 24 hour format'

    def __init__(self, hours, minutes):
        self.hours = hours
        self.minutes = minutes
        self.convert_to_24_hour()

    def __repr__(self):
        return "%02d:%02d" % (self.hours, self.minutes)

    def __eq__(self, other):
        return str(self) == str(other)

    def add(self, minutes):
        self.minutes += minutes
        return self.convert_to_24_hour()

    def convert_to_24_hour(self):
        self.hours += self.minutes // 60
        self.hours %= 24
        self.minutes %= 60
        return self
