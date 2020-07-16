#############################################################
#                                                           #
#                   The Monkey problem                      #
#                                                           #
#  Monkey needs to collect enough sweetnuts and fattynuts   #
#  to fed its family (10 monkeys tot) for a weekend.        #
#  Each monkey needs for each day                           #
#  - no more than 7mg of salt                               #
#  - at least 3g of fat                                     #
#  - at least 6g of sugar                                   #
#  10 sweetnuts are collected in 3 hours                    #
#  and they have 8mg of salt, 2g of fat and 20g of sugar    #
#  10 fattynuts are collected in 1 hour                     #
#  and they have 9mg of salt, 15g of fat and 3g of sugar    #
#                                                           #
#  Optimization is done using the pulp library and          #
#  the cbc algorithm: https://github.com/coin-or/Cbc        #
#                                                           #
#  2020 Gloria Capano                                       #
#############################################################




from pulp import LpMinimize, LpProblem, LpStatus, lpSum, LpVariable
import numpy as np

# Create the model
model = LpProblem(name="small-problem", sense=LpMinimize)

# Initialize the decision variables 
x1 = LpVariable(name="x1", lowBound=0)
x2 = LpVariable(name="x2", lowBound=0)

# Add the constraints to the model
model += (8*x1 + 9*x2 <= (7*100*2), "salt constraint")
model += (2*x1 + 15*x2 >= (3*100*2), "fat constraints")
model += (20*x1 + 3*x2 >= (6*100*2), "sugar constraints")

# Add the objective function to the model
obj_func = 3/10*x1 + 1/10*x2
model += obj_func

# Solve the problem
status = model.solve()

# Print results
print("STATUS")
print(f"status: {model.status}, {LpStatus[model.status]}")

print("OBJECTIVE")
print(f"objective: {model.objective.value()}")

print("VARIABLES")
for var in model.variables():
    print(f"{var.name}: {var.value()}")

print("CONSTRAINTS")
for name, constraint in model.constraints.items():
    print(f"{name}: {constraint.value()}")


time = model.variables()[0].value()*3/10 + model.variables()[1].value()*1/10
print("TIME (hours)")
print(time)
