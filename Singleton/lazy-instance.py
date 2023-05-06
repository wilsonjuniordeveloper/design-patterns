class Singleton:
    __instace = None

    def __init__(self):
        if Singleton.__instace:
            print('o método __init__ foi chamado')
        else:
            print(f'Ai instancia ja foi criada {self.get_instance()}') 
    @classmethod
    def get_instance(cls):
        if not cls.__instace:
            cls.__instace = Singleton()
        return cls.__instace

s1 = Singleton()

print(f'objeto criado agora: {Singleton.get_instance()}')

s2 = Singleton()