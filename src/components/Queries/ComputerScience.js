const compSciQueries = [
  {
    id: 1,
    category: "Computer Science",
    question: 'What is Polymorphism?',
    answer: 'Polymorphism is one of the core concepts of object-oriented programming (OOP) and describes situations in which something occurs in several different forms. In computer science, it describes the concept that you can access objects of different types through the same interface. Each type can provide its own independent implementation of this interface.',
    source: 'https://stackify.com/oop-concept-polymorphism/'
  },
  {
    id: 2,
    category: "Computer Science",
    question: 'What are the benefits of using modular code?',
    answer: 'Easier to read, test, refactor, collaborate, reuse.',
    source: 'https://www.tiny.cloud/blog/modular-programming-principle/'
  },
  {
    id: 3,
    category: "Computer Science",
    question: 'What is a hash table?',
    answer: 'A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.',
    source: 'https://www.chegg.com/homework-help/questions-and-answers/data-structures-algorithms-question-code-c-language-hash-table-hash-map-data-structure-imp-q80282870'
  },
  {
    id: 5,
    category: "Computer Science",
    question: 'What is the different between let, const, and var?',
    answer: 'Var: global scope when declared outside a function, function scope when declared within, can be updated and re-declared, problematic because it may be unknowingly overwritten. Let: block scoped, can be updated but not re-declared. Const: block scoped, cannot be updated or re-declared.',
    source: 'https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/'
  },
  {
    id: 6,
    category: "Computer Science",
    question: 'What is Recursion in a computer science and coding context?',
    answer: 'The process in which a function calls itself directly or indirectly. A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems. Example: https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/',
    source: 'https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/'
  },
  {
    id: 7,
    category: "Computer Science",
    question: 'What is Bubble Sorting and how does it work?',
    answer: 'Bubble sorting involves comparing adject elements and swapping them if they are not in order. This algorithm is not suitable for large data sets.',
    source: 'https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm'
  },
  {
    id: 8,
    category: "Computer Science",
    question: 'What is a Linked List?',
    answer: 'A linear data structure in which elements are linked using pointers. The Linked List consists of nodes, and each node contains a data field and a reference link to the next node in the list.',
    source: 'https://www.geeksforgeeks.org/data-structures/linked-list/'
  },
  {
    id: 9,
    category: "Computer Science",
    question: 'What is Object Oriented Programming?',
    answer: 'A paradigm that allows us to think of real-world object and relate that to our code.',
    source: 'William Marttala'
  },
  {
    id: 10,
    category: "Computer Science",
    question: 'What are the four pillars of OOP?',
    answer: 'Abstraction; Encapsulation; Inheritance; Polymorphism.',
    source: 'https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/'
  },
  {
    id: 11,
    category: "Computer Science",
    question: 'What is an S-expression?',
    answer: 'In computer programming, an S-expression (or symbolic expression, abbreviated as sexpr or sexp) is an expression in a like-named notation for nested list (tree-structured) data. S-expressions were invented for and popularized by the programming language Lisp, which uses them for source code as well as data.',
    source: 'https://en.wikipedia.org/wiki/S-expression'
  },
  {
    id: 12,
    category: "Computer Science",
    question: 'What is a class?',
    answer: 'A class is a data type that acts as a template definition for a particular kind of object.',
    source: 'https://learn.microsoft.com/en-us/training/modules/python-object-oriented-programming/3-model-your-game'
  },
]

export default compSciQueries; 