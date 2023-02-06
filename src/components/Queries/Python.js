const pythonQueries = [
    {
    id: 1,
    category: "Python",
    question: 'What does the @property decorator do in Python?',
    answer: 'Creates a backing field: When you decorate a function with the @property decorator, it creates a backing private field. You can override this behavior if you want, but it is nice to have a default behavior. Identifies a setter: A setter method can change the backing field. Identifies a getter: This function should return the backing field. Identifies a delete function: This function can delete the field.',
    source: 'https://learn.microsoft.com/en-us/training/modules/python-object-oriented-programming/5-game-transitions-with-methods'
  },
  {
    id: 2,
    category: "Python",
    question: 'How do you encapsulate an object to make it private in Python?',
    answer: 'Add double underscores before and after (__object__)',
    source: 'https://learn.microsoft.com/en-us/training/modules/python-object-oriented-programming/6-exercise-game-transitions-with-methods'
  },
]

export default pythonQueries; 