class Singleton(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Singleton, cls).__new__(cls)
            print(f'criando o objeto {cls.instance}')
        return cls.instance
     
s1 = Singleton()
print(f'instancia 1: {id(s1)}')

s2 = Singleton()
print(f'instancia 2: {id(s2)}')
        