from flask import Flask, render_template, request



import re
from sympy import Matrix, lcm



elementList = []
elementMatrix = []



def addToMatrix(element, index, count, side):
    global elementMatrix, elementList

    
    if(index == len(elementMatrix)):
       elementMatrix.append([])

       for x in elementList:
            elementMatrix[index].append(0)

    if(element not in elementList):
        elementList.append(element)

        for i in range(len(elementMatrix)):
            elementMatrix[i].append(0)

    column=elementList.index(element)
    elementMatrix[index][column] += count * side

def findElements(segment,index, multiplier, side):
    elementsAndNumbers=re.split('([A-Z][a-z]?)',segment)
    i = 0
    try:
        
      while(i < len(elementsAndNumbers) - 1):#last element always blank
            i += 1
            if(len(elementsAndNumbers[i]) > 0):
              if(elementsAndNumbers[i+1].isdigit()):
                  count=int(elementsAndNumbers[i+1])*multiplier
                  addToMatrix(elementsAndNumbers[i], index, count, side)
                  i += 1
              else:
                  addToMatrix(elementsAndNumbers[i], index, multiplier, side)
    except IndexError:
      # elementMatrix = []
      # elementList = []
      return render_template("index.html", error="Os reagentes e os produtos não batem certo...")

def compoundDecipher(compound, index, side):
    segments=re.split('(\([A-Za-z0-9]*\)[0-9]*)',compound)
    for segment in segments:
        if segment.startswith("("):
            segment = re.split('\)([0-9]*)', segment)
            multiplier = int(segment[1])
            segment = segment[0][1:]
        else:
            multiplier = 1
        findElements(segment, index, multiplier, side)





app = Flask('app')

@app.route('/', methods = ["POST", "GET"])
def hello_world():
  global elementMatrix, elementList
  if request.method == "GET":
    
    return render_template("index.html")
  elif request.method == "POST":
    
    form_data = dict(request.form)
    print(form_data)
    reactants = str(form_data["reactants"])
    products = str(form_data["products"])
    print(reactants, products)
    if reactants.endswith("+") or products.endswith("+") or reactants.endswith("+ ") or products.endswith("+ "):
      elementMatrix = []
      elementList = []
      return render_template("index.html", error="Os reagentes e os produtos não batem certo...")
    reactants = reactants.replace(' ', '').split("+")
    products = products.replace(' ', '').split("+")

    #inicio
    for i in range(len(reactants)):
        compoundDecipher(reactants[i], i, 1)
    
    for i in range(len(products)):
        compoundDecipher(products[i], i + len(reactants), -1)
      
    
    
    elementMatrix = Matrix(elementMatrix)
    elementMatrix = elementMatrix.transpose()
    try:
      
      solution = elementMatrix.nullspace()[0]
    except IndexError:
      elementMatrix = []
      elementList = []
      return render_template("index.html", error="Os reagentes e os produtos não batem certo...")
    multiple = lcm([val.q for val in solution])
    solution = multiple * solution
    coEffi = solution.tolist()
    output = ""
    for i in range(len(reactants)):
        output += str(coEffi[i][0])+reactants[i]
        if i < len(reactants) -1:
           output += " + "
    output+=" -> "
    try:
        
      for i in range(len(products)):
         output += str(coEffi[i + len(reactants)][0]) + products[i]
         if i < len(products) -1:
             output+=" + "
    except IndexError:
      elementMatrix = []
      elementList = []
      return render_template("index.html", error="Os reagentes e os produtos não batem certo...")
    print(output)
    print(elementMatrix, elementList)
    elementMatrix = []
    elementList = []

    
    return render_template("index.html", form_data = form_data, output=output)
  else:
    return "FUCK ROBOTS"


app.run(host='0.0.0.0', port=8080)
